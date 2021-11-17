const initState = {
  dish_name: "",
  preparation_time: null,
  dish_type: null,
  number_of_slices: null,
  diameter: null,
  spiciness_scale: 5,
  slices_of_bread: null,
  response: {},
};

const formDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "reset_form": {
      return { ...initState };
    }
    case "set_dish_name": {
      state.dish_name = action.payload.dish_name;
      return { ...state };
    }
    case "set_preparation_time": {
      state.preparation_time = action.payload.preparation_time;
      return { ...state };
    }
    case "set_dish_type": {
      state.dish_type = action.payload.dish_type;
      return { ...state };
    }
    case "set_number_of_slices": {
      state.number_of_slices = action.payload.number_of_slices;
      return { ...state };
    }
    case "set_diameter": {
      state.diameter = action.payload.diameter;
      return { ...state };
    }
    case "set_spiciness_scale": {
      state.spiciness_scale = action.payload.spiciness_scale;
      return { ...state };
    }
    case "set_slices_of_bread": {
      state.slices_of_bread = action.payload.slices_of_bread;
      return { ...state };
    }
    case "set_response": {
      state.response = action.payload.response;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default formDataReducer;
