import React from "react";
import cssClasses from "../UI/ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div>
      <div className={cssClasses.backdrop} />
      <Card className={cssClasses.modal}>
        <header className={cssClasses.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={cssClasses.content}>
          <p>{props.message}</p>
        </div>
        <footer className={cssClasses.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
