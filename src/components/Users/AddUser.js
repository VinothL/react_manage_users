import React, { useState } from "react";

import cssClasses from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (
      (enteredUsername.trim().length === 0) |
      (enteredAge.trim().length === 0)
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter the user name and Age (In years)",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age Input",
        message: "Please enter the Age (In years) greater than 0",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function onClickOkay() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onClickOkay}
        ></ErrorModal>
      )}

      <Card className={cssClasses.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username"> User Name :</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age"> Age :</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
