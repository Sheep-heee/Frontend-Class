//값을 받아서 생성해줄 것. - 기능적을 분리하자.
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil"; //state 관리 목적을 가지고 있다.
import { toDoState, categoryState } from "../Atom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Form>({});
  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]); //반환 값이 배열이다(toDoState의 빈 배열)
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Write a ToDo...",
        })}
        type="text"
        placeholder="Write a todo"
      />
      <input type="submit" value={"ADD"} />
    </Form>
  );
};

export default CreateToDo;
