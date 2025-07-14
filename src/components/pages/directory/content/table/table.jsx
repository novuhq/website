import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const cellClassName =
  'text-sm leading-snug bg-[#05050B] border-r border-b border-gray-2 [&_p]:text-sm [&_p]:my-2 [&_p:first-of-type]:mt-0 [&_ul]:!my-0 [&_ul]:!pl-0 [&_ul>*]:text-sm [&_ul>li]:!mt-1 [&_ul>li:first-of-type]:!mt-0 [&_ul>li]:!pl-4 [&_ul>li:before]:text-sm [&_code]:text-[13px] [&_code]:leading-loose first:sticky first:left-0 first:border-l';

export const TableRow = ({ children }) => children;
export const TableCell = ({ children }) => children;
export const TableCols = ({ cols }) => (
  <colgroup>
    {cols.map((width, index) => (
      <col style={{ minWidth: `${width || 248}px` }} key={index} />
    ))}
  </colgroup>
);

const Table = ({ children }) => {
  const rows = React.Children.toArray(children)
    .filter((child) => child.type === TableRow)
    .map((row) => React.Children.toArray(row.props.children));

  const tableCols = React.Children.toArray(children).find((child) => child.type === TableCols);

  return (
    <div className="relative mt-8 max-h-[650px] overflow-auto rounded-lg">
      <table className="border-separate border-spacing-0">
        {tableCols}
        <thead>
          <tr className="sticky top-0 z-10">
            {rows[0].map((item, index) => (
              <th
                className={clsx(
                  'border-t bg-gray-1 px-4 py-3 text-left font-normal first:rounded-tl-lg last:rounded-tr-lg',
                  !tableCols && 'min-w-60',
                  cellClassName
                )}
                key={index}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, index) => (
            <tr className="group/row" key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  className={clsx(
                    'px-4 py-3.5 align-top font-light text-gray-9 first:bg-gray-1 group-last/row:first:rounded-bl-lg group-last/row:last:rounded-br-lg',
                    'break-words [&:has(code)]:break-all',
                    cellClassName
                  )}
                  key={cellIndex}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Table;
