export const remove = (id) => {
  return { type: "remove", payload: { id: id } };
};
export const add = (data) => {
  return {
    type: "add",
    payload: {
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
    },
  };
};
export const modify = (data) => {
  return {
    type: "modify",
    payload: {
      id: data.id,
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
    },
  };
};
