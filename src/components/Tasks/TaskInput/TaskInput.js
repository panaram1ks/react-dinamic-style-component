import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalidProps ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalidProps ? "red" : "#ccc")};
    background: ${(props) => (props.invalidProps ? "#d087df" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }

  &.invalid input {
    border-color: red;
    background: #d087df;
  }
`;

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");

  const [isInputValid, setIsInputValue] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValue(true);
    }
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsInputValue(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isInputValid ? "invalid" : ""}`}> */}

      {/*  <FormControl className={!isInputValid && "invalid"}> */}
      <FormControl invalidProps={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
        {/* </div> */}
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
