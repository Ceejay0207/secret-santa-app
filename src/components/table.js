import { useState } from "react";
import React from "react";
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, email, age } = rowsData;
    return (
      <>
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={email}
            onChange={(event) => onValUpdate(index, event)}
            name="email"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            value={age}
            onChange={(event) => onValUpdate(index, event)}
            name="age"
            className="form-control"
          />
        </td>
        <td>
          <button
            type="button"
            className="deleteBtn"
            onClick={() => tableRowRemove(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
    );
  });
}

    function Table() {
    const [rows, initRow] = useState([]);
    const addRowTable = () => {
      const data = {
        name: "",
        email: "",
        profile: "",
      };
      initRow([...rows, data]);
    };
    const tableRowRemove = (index) => {
      const dataRow = [...rows];
      dataRow.splice(index, 1);
      initRow(dataRow);
    };
    const onValUpdate = (i, event) => {
      const { name, value } = event.target;
      const data = [...rows];
      data[i][name] = value;
      initRow(data);
    };
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
                
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>

            <th>
                <button type="button" className="addBtn text-white" onClick={addRowTable}>
                 Add
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRows
              rows={rows}
              tableRowRemove={tableRowRemove}
              onValUpdate={onValUpdate}
            />
          </tbody>
        </table>
      </>
    );
  }
  export default Table;