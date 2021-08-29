import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';

const StyledTableData = ({ children, index, keyValue }) => {
  const dispatch = useDispatch();
  return (
    <td
      draggable
      onDragStart={() =>
        dispatch(actions.onDragStart({ value: children, index, keyValue }))
      }
      onDragOver={() =>
        dispatch(actions.onDragEnd({ value: children, index, keyValue }))
      }
      onDragEnd={() => dispatch(actions.updateData())}
      style={{ background: '#F6F6F6', border: '2px solid white' }}>
      {children}
    </td>
  );
};

StyledTableData.propTypes = {
  children: PropTypes.string,
  index: PropTypes.number,
};

export default StyledTableData;
