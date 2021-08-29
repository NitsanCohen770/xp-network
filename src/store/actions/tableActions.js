import * as actionTypes from './actionTypes';

export const onDragStart = currentDragging => {
  return {
    type: actionTypes.DRAG_START,
    currentDragging,
  };
};

export const onDragEnd = targetObject => {
  return {
    type: actionTypes.DRAG_END,
    targetObject,
  };
};

export const updateData = () => {
  return {
    type: actionTypes.UPDATE_LIST,
  };
};
