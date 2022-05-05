import React, { useState } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [page, changepage] = useState([{ title: "", content: "" }]);
  const [expand, changeexpand] = useState(0);

  function Expandbox() {
    changeexpand(1);
  }

  function HandleChange(event) {
    const { name, value } = event.target;

    changepage({ ...page, [name]: value });
  }
  function Handleclick(event) {
    props.Addnotes(page);
    changepage({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form onClick={Expandbox} className="create-note">
        {expand ? (
          <input
            name="title"
            value={page.title}
            onChange={HandleChange}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          value={page.content}
          onChange={HandleChange}
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand}>
          <button onClick={Handleclick}>
            <AddOutlinedIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
