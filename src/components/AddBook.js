import React, { useState } from "react";
import store from "../redux/store";
import { add } from "../redux/actions";
const AddBook = ({ closePopup }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(add(formValue));
    closePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((currentState) => {
      const newState = { ...currentState, [name]: value };
      return newState;
    });
  };
  return (
    <>
      <div className="popup-container">
        <div className="popup-body">
          <button className="close_button" onClick={closePopup}>
            X
          </button>

          <form id="add_book_form" onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <label htmlFor="name">name</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="name"
                    id="name"
                    type="text"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="price">price</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="price"
                    id="ptice"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="category">category</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="category"
                    id="category"
                    type="text"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">description</label>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="description"
                  ></textarea>
                </td>
              </tr>
            </table>
            <input className="submit" type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
