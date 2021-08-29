import * as actionTypes from '../actions/actionTypes';
import { FaChartBar } from '@react-icons/all-files/fa/FaChartBar';
import { FaEllipsisV } from '@react-icons/all-files/fa/FaEllipsisV';
import { nanoid } from 'nanoid';

const initialState = {
  tableData: new Array(40).fill({
    _id: nanoid(),
    id: '203483924',
    name: 'יואב שרון',
    overHours: '4:00',
    hoursByHand: '4:00',
    hours: '155:00',
    totalHours: '159:00',
    icons: { iconA: <FaChartBar />, iconB: <FaEllipsisV /> },
  }),
  currentDragging: null,
  targetObject: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DRAG_START:
      return {
        ...state,
        currentDragging: action.currentDragging,
      };

    case actionTypes.DRAG_END:
      return {
        ...state,
        targetObject: action.targetObject,
      };
    case actionTypes.UPDATE_LIST:
      const updatedTable = [...state.tableData];
      updatedTable[state.currentDragging.index][
        state.currentDragging.keyValue
      ] = updatedTable[state.targetObject.index][state.targetObject.keyValue];
      updatedTable[state.targetObject.index][state.targetObject.keyValue] =
        updatedTable[state.currentDragging.index][
          state.currentDragging.keyValue
        ];
      return {
        ...state,
        tableData: updatedTable, //
      };

    default:
      return state;
  }
};

export default reducer;
