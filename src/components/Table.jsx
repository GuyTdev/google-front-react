import React from 'react'
import '../index.css'
const Table = ({ rows, cols, dataarr}) => {
  console.log("rows, cols", rows, cols);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={cols}>ZigZag Table Size: {`${rows} X ${cols} [Rows X Columns]`} </th>
        </tr>
      </thead>
      <tbody>
        {
          Array.from({ length: rows }).map((_, rowIndex) =>
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) =>
                <td key={colIndex}>
                  {colIndex % 2 ? dataarr[rows * (colIndex + 1) - rowIndex -1] : dataarr[rows * colIndex + rowIndex]}
                </td>)}
            </tr>)
        }
      </tbody>
    </table>
  )
}

export default Table