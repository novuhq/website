import { Card, Stack, Select } from '@sanity/ui';
import React, { useState, useCallback, useEffect } from 'react';
import { set, unset } from 'sanity';

const AsyncSelect = (props) => {
  const [listItems, setListItems] = useState([]);
  const { schemaType, onChange, value } = props;

  const { url, headers, handler } = schemaType.options;

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  useEffect(() => {
    try {
      fetch(url, {
        headers,
      })
        .then((response) => response.json())
        .then((data) => {
          const items = handler(data);
          setListItems(items);
        });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Card padding={0}>
      <Stack>
        <Select value={value} onChange={handleChange}>
          <option value="---">---</option>
          {listItems.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </Select>
      </Stack>
    </Card>
  );
};

export default AsyncSelect;
