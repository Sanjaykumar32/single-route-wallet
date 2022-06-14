import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRow } from "../Redux/CounterSlice";


const Table = () => {
  const data = useSelector((state) => state.counter.value);
 const dispatch = useDispatch()
  return (
    <div>
      <div className="container">
  <Link   to="/add"  >
     <button
          type="text"
          className="btn btn-light px-5 shadow-lg"
        >
          🚀 Addvalue
        </button>
  
  </Link>
       
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-light shadow">
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="py-3">{e.name} </td>
                  <td className="py-3">{e.amount} </td>
                  <td className="text-end py-3">
                    <Link to="/add" state={{ testId: e.id }} >
                      <button
                        type="text"
                        className="btn btn-warning me-5 px-5 shadow-lg"
                       
                      >
                        🖊️ Edit
                      </button>
                    </Link>
                    <button
                      type="text"
                      className="btn btn-danger px-5 shadow-lg"
                      onClick={()=> dispatch(deleteRow({id :e.id}))}
                    >
                      🚀 Delete
                    </button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
