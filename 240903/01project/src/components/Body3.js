import React, { useState } from "react";

const Body2 = () => {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    console.log("현재 수정 대상 : ", e.target.name);
    console.log("수정값 : ", e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={gender} onChange={handleOnChange}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={bio} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default Body2;