export const set_dish_name = (dish_name) => async (dispatch) => {
  dispatch({
    type: "set_dish_name",
    payload: { dish_name: dish_name },
  });
};

export const set_preparation_time = (preparation_time) => async (dispatch) => {
  dispatch({
    type: "set_preparation_time",
    payload: { preparation_time: preparation_time },
  });
};

export const set_dish_type = (dish_type) => async (dispatch) => {
  dispatch({
    type: "set_dish_type",
    payload: { dish_type: dish_type },
  });
};

export const set_number_of_slices = (number_of_slices) => async (dispatch) => {
  dispatch({
    type: "set_number_of_slices",
    payload: { number_of_slices: number_of_slices },
  });
};

export const set_diameter = (diameter) => async (dispatch) => {
  dispatch({
    type: "set_diameter",
    payload: { diameter: diameter },
  });
};

export const set_spiciness_scale = (spiciness_scale) => async (dispatch) => {
  dispatch({
    type: "set_spiciness_scale",
    payload: { spiciness_scale: spiciness_scale },
  });
};

export const set_slices_of_bread = (slices_of_bread) => async (dispatch) => {
  dispatch({
    type: "set_slices_of_bread",
    payload: { slices_of_bread: slices_of_bread },
  });
};

export const set_response = (response) => async (dispatch) => {
  dispatch({
    type: "set_response",
    payload: { response: response },
  });
};
