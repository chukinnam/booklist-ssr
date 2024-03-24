import React, { useEffect, useState } from "react";
import { modify } from "../redux/actions";
import store from "../redux/store";

function ModifyBook({ closePopup, id, name, price, category, description }) {
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });
  useEffect(() => {
    setFormValue({
      id: id,
      name: name,
      price: price,
      category: category,
      description: description,
    });
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((currentState) => {
      const newState = { ...currentState, [name]: value };
      return newState;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(modify(formValue));
    closePopup();
  };
  return (
    <div className="popup-container">
      <div className="popup-body">
        <button className="close_button" onClick={closePopup}>
          X
        </button>
        <form id="modify_book_form" onSubmit={handleSubmit}>
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
                  value={formValue.name}
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
                  type="text"
                  value={formValue.price}
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
                  value={formValue.category}
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
                  value={formValue.description}
                  name="description"
                ></textarea>
              </td>
            </tr>
          </table>
          <input className="submit" type="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default ModifyBook;
