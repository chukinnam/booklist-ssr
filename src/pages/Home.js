import React, { useState } from "react";
import Book from "../components/Book";
import { useSelector } from "react-redux";
import AddBook from "../components/AddBook";

function Home() {
  const booklist = useSelector((state) => state);
  const [open, setOpen] = useState(false);

  const popUpAddBook = () => {
    setOpen(true);
  };
  return (
    <>
      <h1 className="title">Leo Chu Booklist </h1>
      <button className="add_new_book_bt" onClick={popUpAddBook}>
        Add new book{" "}
      </button>
      <div className="bookshelf">
        {open ? <AddBook closePopup={() => setOpen(false)} /> : null}
        <div className="header">
          <div>id</div>
          <div>name</div>
          <div>price</div>
          <div>category</div>
          <div></div>
        </div>
        {booklist.map((element) => {
          return (
            <Book
              id={element.id}
              name={element.name}
              price={element.price}
              category={element.category}
              description={element.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
