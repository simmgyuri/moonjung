import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Table.css';

// TableComponent.jsx
const Table= ({ limit }) => {
    const rows = [];
    let day = 20;
  
    for (let i = 10; i > 0; i--) {
      rows.push({
        title: '제목입니다.',
        author: '작성자',
        date: `24-01-${day-- <= 0 ? 1 : day + 1}`
      });
    }

    const limitedRows = rows.slice(0, limit);
  
    return (
      <table className="board-table">
        <tbody>
        {limitedRows.map((row, idx) => (
          <tr key={idx} className="body">
            <td className="title">{row.title}</td>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };
  
  export default Table;