import React, { useState } from "react";
import store from "../redux/store";
import { remove } from "../redux/actions";
import ModifyBook from "./ModifyBook";
function Book(props) {
  const [open, setOpen] = useState(false);
  const removeBook = (event) => {
    event.stopPropagation();
    store.dispatch(remove(props.id));
  };
  const popUpAddBook = () => {
    setOpen(true);
  };

  console.log("change:", open);
  return (
    <div className="book_container" key={props.id}>
      <div className="book_box" onClick={popUpAddBook}>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>${props.price}</div>
        <div>{props.category}</div>
        <div>
          <button onClick={removeBook}>Delete</button>
        </div>
      </div>
      {open ? (
        <ModifyBook
          closePopup={() => setOpen(false)}
          id={props.id}
          name={props.name}
          price={props.price}
          category={props.category}
          description={props.description}
        />
      ) : null}
    </div>
  );
}

export default Book;
