import React, { useState } from 'react';

function Spreadsheet() {
  const [data, setData] = useState(Array(10).fill(Array(10).fill('')));

  const handleCellChange = (row, col, value) => {
    const updatedData = [...data];
    updatedData[row][col] = value;
    setData(updatedData);
  };

  return (
    <div>
      <input type="text" placeholder="Formula Bar" />
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} contentEditable onInput={(e) => handleCellChange(rowIndex, colIndex, e.target.textContent)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spreadsheet;