import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "SNOWMAN" },
    { id: 2, text: "ICE" },
    { id: 3, text: "SNOW" },
    { id: 4, text: "WIND" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id 로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해줌
    setNames(nextNames); // names 값을 업데이트함
    setInputText(""); // inputText를 새로고침 (비워줌)
    console.log(nextNames);
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Added</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
