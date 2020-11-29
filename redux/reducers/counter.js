import { DECREMENT, INCREMENT } from "../actionCreaters/counter";

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const data = action.payload;
      return { ...state, count: data };
    }

    case DECREMENT: {
      const data = action.payload;
      return { ...state, count: data };
    }

    default:
      return state;
  }
}

// const obj = { name: "yash", age: 21 };

// obj.age = 23; // mutating an object

// const newObject = { ...obj, age: 23 }; /// immuatting an object  // faster and effiecient
