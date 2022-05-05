import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [pages, changepages] = useState([]);

  function Deletenote(id) {
    function Isvalid(item, index) {
      return id !== index;
    }
    changepages(pages.filter(Isvalid));
  }

  function Addnote(note) {
    changepages([...pages, note]);
  }

  function Printnotes(props, index) {
    return (
      <div>
        <Notes
          key={index}
          id={index}
          removenote={Deletenote}
          title={props.title}
          content={props.content}
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <CreateArea Addnotes={Addnote} />
      {pages.map(Printnotes)}

      <Footer />
    </div>
  );
}

export default App;
