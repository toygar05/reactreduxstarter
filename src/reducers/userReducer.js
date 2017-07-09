export default function reducer(state={
  text:'empty-text',
}, action){
  switch (action.type) {
    case "SET_TEXT":{
      return {
              ...state,
              text: action.payload.text
      };
    }
};
  return state;
}
