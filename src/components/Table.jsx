import React from 'react'
import '../index.css'
const Table = ({ rows, cols }) => {
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
                <td>
                  {colIndex % 2 ? rows * (colIndex + 1) - rowIndex : rows * colIndex + rowIndex + 1}
                </td>)}
            </tr>)
        }
      </tbody>
    </table>
  )
}

export default Table