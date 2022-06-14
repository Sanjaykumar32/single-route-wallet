import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, editValue } from "../Redux/CounterSlice";
import { nanoid } from "nanoid";
import { Link, useLocation } from "react-router-dom";

const AddData = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const id = nanoid();

  const location = useLocation()
   const editId  = location?.state?.testId

   const reducerData = useSelector((state)=> state.counter.value)

  //  console.log(reducerData[0].name);

  
  
  
   
   const handlebtn = ()=>{
    if(editId){
      dispatch(editValue({
         name,
        amount,
        editId
      }))
    }else{
      dispatch(data({
        name,
        amount,
        id
      }))
    }
    setName("")
    setAmount("")
   }



 

  return (
    <>
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-5">
            <div className="form-control">
              <label htmlFor=""> Name </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="form-control">
              <label htmlFor=""> Amount </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <Link to="/">
              <button
                className="btn btn-success shadow px-5"
                onClick={handlebtn}
              >
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddData;
