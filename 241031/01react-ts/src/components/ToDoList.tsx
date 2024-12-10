import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { toDoState, toDoSelector, categoryState, Categories } from "../Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import ToDo from "./ToDo";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((todoItem) => (
        <ToDo key={todoItem.id} {...todoItem} />
      ))}
    </Container>
  );
};

export default ToDoList;
