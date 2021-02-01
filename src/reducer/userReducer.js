const initialUser = {};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "REGISTER": {
      return { ...action.payload };
    }
    case "ACCOUNT_DETAILS": {
      return { ...action.payload };
    }
    case "ERROR": {
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
}; 

export default userReducer;
