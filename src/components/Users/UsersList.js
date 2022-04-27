import React from "react";
import Card from "../UI/Card";
import cssClasses from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={cssClasses.users}>
      <ul>
        {props.usersList.map((user) => (
          <li key={user.id}>
            {user.username} {user.age} (In years)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
