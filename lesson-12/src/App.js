import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import Test from "./components/Test";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  // const [listTitle, setListTitle] = useState("My list");

  // const changeTitleHandler = useCallback(() => {
  //   setListTitle("New title");
  // }, []);
  // const listItems = useMemo(() => {
  //   return [5, 3, 1, 10, 9];
  // }, []);

  const [name, setName] = useState("Allen");
  const [count, setCount] = useState(0);
  const changeNameHandler = () => {
    setName((prev) => prev + 1);
  };
  const changeFrientCountHandler = () => {
    setCount((prev) => prev + 1);
  };

  const component = useMemo(() => {
    return <Test name={name} count={count}></Test>;
  }, [name]);
  return (
    <>
      {/* <div className="app">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph} />
        <Button onClick={allowToggleHandler}>Allow Toggling</Button>
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      </div> */}
      {/* <div className="app" style={{ marginTop: "30px" }}>
        <DemoList title={listTitle} items={listItems}></DemoList>
        <Button onClick={changeTitleHandler}>Change title</Button>
      </div> */}
      {component}
      <Button onClick={changeNameHandler}>Change name</Button>
      <Button onClick={changeFrientCountHandler}>Change FrientCount</Button>
    </>
  );
}

export default App;
