import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";



function App() {
  return (
    <div className="App">
      <Header blogName="This is The Blog Name"/>
      <About about="This Blog Is About pretty cool stuff" imageSource=""/>
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
