import React, { useState } from "react";
import AddUser from "../src/components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(enteredUsername, enteredAge) {
    setUsersList((prevUsersList) => {
      return [
        {
          username: enteredUsername,
          age: enteredAge,
          id: Math.random().toString(),
        },
        ...prevUsersList,
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
