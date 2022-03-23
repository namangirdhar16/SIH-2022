import React from "react";
import Header from "./Header";
import TextEditor from "./TextEditor";
import SearchBar from "./SearchBar";

function Notes() {
   const handle = ({body}) => {
       console.log(body);
   }
   return (
       <>
       <Header/>
       <SearchBar />
       <TextEditor onSubmit={handle}/>
       </>
   )
}

export default Notes;