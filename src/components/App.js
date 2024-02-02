import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={"Welcome to Vinh's Page"}></Header>
      <About src={"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"} about={"meow"}></About>
      <ArticleList></ArticleList>
    </div>
  );
}

export default App;
