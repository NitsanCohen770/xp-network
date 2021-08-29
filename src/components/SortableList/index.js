import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from '../SortableTableItem';
import PropTypes from 'prop-types';

const SortableList = SortableContainer(({ items }) => {
  return (
    <tr>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </tr>
  );
});
SortableList.propTypes = {};

export default SortableList;
