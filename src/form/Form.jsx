import React, { useState } from "react";
import "../index.css";

function Form() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [item1, setitem] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const getInputOne = (e) => {
    setinput1(e.target.value);
  };
  const getInputTwo = (e) => {
    setinput2(e.target.value);
  };
  const getInputThree = (e) => {
    setinput3(e.target.value);
  };
  const onsunmits = (e) => {
    e.preventDefault();
    setitem((olditems) => {
      return [
        ...olditems,
        [
          "Name : ",
          input1,
          " | ",
          "Department : ",
          input2,
          " | ",
          "Rating : ",
          input3,
        ],
      ];
    });
    setinput1("");
    setinput2("");
    setinput3("");
    setIsSubmit(true);
  };
  function updateBack() {
    setIsSubmit(false);
  }

  return (
    <>
      <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
      <div className="formbox">
        {isSubmit === false ? (
            <div className="formbox1">

          <form onSubmit={onsunmits}>
            <div className="name">
              Name :
              <input
                type="text"
                className="input1"
                onChange={getInputOne}
                value={input1}
                required
                />
            </div>
            <div className="department">
              Department :
              <input
                type="text"
                className="input2"
                onChange={getInputTwo}
                value={input2}
                required
                />
            </div>
            <div className="rating">
              Rating :
              <input
                type="number"
                className="input3"
                onChange={getInputThree}
                value={input3}
                required
                />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
                </div>
        ) : (
            <div>

          <div className="databox">
            {item1.map((itemval) => {
                return <div className="li">{itemval}</div>;
            })}
           
          </div>
          <div>
           <button class="backbutton" onClick={updateBack}>
             Go Back
           </button>
         </div>
        </div>
           
        )}
      </div>
    </>
  );
}
export default Form;
