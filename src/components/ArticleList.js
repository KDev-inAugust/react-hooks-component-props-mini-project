import React from "react";
import Article from "./Article";


function ArticleList({articles}){
    console.log(articles)
    const postMap=articles.map((index)=>{
    return(
    <Article key={index.id} title={index.title} date={index.date} preview={index.preview}/>)
})
    return(
        <main>
         {postMap}  
        </main>
    )
}

export default ArticleList