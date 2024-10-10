/* eslint-disable no-case-declarations */
import parse, { attributesToProps } from 'html-react-parser';
import isBoolean from 'lodash.isboolean';
import isEmpty from 'lodash.isempty';
import React from 'react';
import slugify from 'slugify';

function isBooleanString(string) {
  return string === 'true' || string === 'false';
}

function isJSON(string) {
  if (typeof string !== 'string') return false;
  if (isBooleanString(string)) return false;

  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }

  return true;
}

function toCamelCase(string) {
  return string.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
}

function transformValue(value) {
  if (isJSON(value)) {
    const parsedJSON = JSON.parse(value);

    if (Array.isArray(parsedJSON)) return parsedJSON.map((item) => transformProps(item));
    if (typeof parsedJSON === 'object' && parsedJSON !== null) return transformProps(parsedJSON);

    return parsedJSON;
  }

  if (Array.isArray(value)) return value.map((item) => transformProps(item));
  if (typeof value === 'object' && value !== null) return transformProps(value);

  if (isBooleanString(value)) return value === 'true';

  return value;
}

function transformProps(props) {
  const transformedProps = {};

  Object.keys(props).forEach((propName) => {
    const transformedValue = transformValue(props[propName]);
    if (!transformedValue && isEmpty(transformedValue) && !isBoolean(transformedValue)) return;
    transformedProps[toCamelCase(propName)] = transformedValue;
  });

  return transformedProps;
}

export default function getReactContentWithLazyBlocks(content, pageComponents, includeBaseTags) {
  // https://github.com/remarkablemark/html-react-parser#htmlparser2
  // The library does parsing on client side differently from server side
  // it results in having a need of passing htmlparser2 to adjust behavior
  // according to the client side behavior

  const components = {
    ...pageComponents,
  };

  // Here we remove anything that can come from WordPress but should not be rendered.
  // For now it's only <meta charset="utf-8"> that can come in a value of a field with type Rich Text or Classic Editor
  const cleanedContent = content.replace(/&lt;meta charset=\\&quot;utf-8\\&quot;&gt;/gim, '');

  return parse(cleanedContent, {
    htmlparser2: {
      lowerCaseAttributeNames: true,
    },
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        if (domNode.attribs?.class?.includes('wp-block-lazyblock')) {
          const element =
            domNode.children[0].type === 'tag' ? domNode.children[0] : domNode.children[1];

          const Component = components[element.name];
          if (!Component) return <></>;

          const props = transformProps(attributesToProps(element.attribs));

          return <Component {...props} />;
        }

        if (domNode.attribs?.class?.includes('wp-block-heading')) {
          const text = domNode.children.reduce((acc, child) => {
            if (child.type === 'text') acc += child.data;
            if (child.type === 'tag')
              acc += child.children.reduce((acc, child) => {
                if (child.type === 'text') acc += child.data;
                return acc;
              }, '');
            return acc;
          }, '');

          const id = slugify(text, { lower: true, remove: /[*+~.()'"!:@/?]/g });

          domNode.attribs.id = id;
        }

        if (!includeBaseTags) return <></>;
      }
    },
  });
}
