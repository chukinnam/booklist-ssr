let id = 0;

export const bookreducer = (state = [], action) => {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: id++,
        name: action.payload.name,
        price: action.payload.price,
        category: action.payload.category,
        description: action.payload.description,
      },
    ];
  } else if (action.type === "remove") {
    let newbooklist = state.filter((element) => {
      return element.id !== action.payload.id;
    });

    return newbooklist;
  } else if (action.type === "modify") {
    let targetId = action.payload.id;
    const updatedData = {
      name: action.payload.name,
      price: action.payload.price,
      category: action.payload.category,
      description: action.payload.description,
    };
    const newarray = state.map((item) =>
      item.id === targetId ? { ...item, ...updatedData } : item
    );
    return newarray;
  }

  return state;
};
