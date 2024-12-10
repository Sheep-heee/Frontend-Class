import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import {
  ToDoListContext,
  ToDoListContextProvider,
} from "./contexts/ToDoContext";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const mockData = [
  "Typlescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

const App = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);
  const [toDo, setToDo] = useState("");

  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
