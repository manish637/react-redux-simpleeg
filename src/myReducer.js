const initialState = {
  count: 3
};

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.payload);
      return (state = {
        count: state.count + action.payload
      });
    // return Object.assign({}, state, { count: action.payload });
    case "DECREMENT":
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
}
