import React from "react";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input id="amount" type="number" className="form-controll" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <select id="category" className="form-select">
          <option value=""></option>
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
