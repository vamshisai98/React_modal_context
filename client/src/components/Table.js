import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../App';

const Table = () => {
  const { info, setDetails, handleDelete } = useContext(GlobalContext);

  useEffect(() => {
    console.log(info);
  });
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>SLno</th>
            <th>Name</th>
            <th>Place</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {info.length > 0 &&
            info.map((x, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{x.name}</td>
                <td>{x.place}</td>
                <td>{x.age}</td>
                <td>
                  <button type='button' onClick={() => handleDelete(x.name)}>
                    <i class='fas fa-trash-alt'></i>
                  </button>
                  <button type='button'>
                    <i class='fas fa-edit'></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
