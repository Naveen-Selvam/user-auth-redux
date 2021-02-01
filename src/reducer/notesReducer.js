const initialnotes = [];

const notesReducer = (state = initialnotes, action) => {
  switch (action.type) {
    case "POST": {
      return [...state, action.payload];
    }
    case "GET": {
      return [...action.payload];
    }
    case "DELETE": {
      return state.filter((data) => {
        return data._id !== action.payload._id;
      });
    } 
    default: {
      return [...state];
    }
  }
};

export default notesReducer;
