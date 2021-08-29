import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

const SortableItem = SortableElement(({ value }) => (
  <td onDragStart style={{ background: '#F6F6F6', border: '2px solid white' }}>
    {value}
  </td>
));

SortableItem.propTypes = {
  value: PropTypes.string,
};

export default SortableItem;
