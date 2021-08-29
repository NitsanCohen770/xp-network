import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/scss/bootstrap.scss';
import StyledTableData from './components/StyledTdata';
import { arrayMove } from 'react-sortable-hoc';
import SortableList from './components/SortableList';

const rows = [
  'מספר ת.ז',
  'שם עובד',
  'שעות חריגות',
  'שעות ידניות',
  'שעות',
  'סך הכול שעות',
  'אפשרויות',
];

const App = () => {
  const columns = useSelector(state => state.table.tableData);

  return (
    <table class='table'>
      <thead>
        <tr>
          {rows.map((col, index) => (
            <th key={index} scope='col'>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map((row, index) => (
          <tr key={row._id}>
            <StyledTableData keyValue='id' index={index}>
              {row.id}
            </StyledTableData>
            <StyledTableData keyValue='name' index={index}>
              {row.name}
            </StyledTableData>
            <StyledTableData keyValue='overHours' index={index}>
              {row.overHours}
            </StyledTableData>
            <StyledTableData keyValue='hoursByHand' index={index}>
              {row.hoursByHand}
            </StyledTableData>
            <StyledTableData keyValue='hours' index={index}>
              {row.hours}
            </StyledTableData>
            <StyledTableData keyValue='totalHours' index={index}>
              {row.totalHours}
            </StyledTableData>
            <StyledTableData keyValue='icons' index={index}>
              {row.icons.iconA}
            </StyledTableData>
            <StyledTableData keyValue='icons' index={index}>
              {row.icons.iconB}
            </StyledTableData>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default App;
