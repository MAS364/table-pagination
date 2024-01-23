import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>INSTRUMENT</th>
          <th>SYMBOL</th>
          <th>EXPIRY_DT</th>
          <th>STRIKE_PR</th>
          <th>OPTION_TYP </th>
          <th>OPEN</th>
          {/* <th>HIGH</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const {
            INSTRUMENT,
            SYMBOL,
            EXPIRY_DT,
            STRIKE_PR,
            OPTION_TYP,
            OPEN,
            HIGH,
          } = item;
          return (
            <tr key={index}>
              <td>{INSTRUMENT}</td>
              <td>{SYMBOL}</td>
              <td>{EXPIRY_DT}</td>
              <td>{STRIKE_PR}</td>
              <td>{OPTION_TYP}</td>
              <td>{OPEN}</td>
              {/* <td>{HIGH}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
