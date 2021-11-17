import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { set_response } from "../store/actions/formDataActions";
import { useState } from "react";
import Loading from "./utils/Loading";

const SubmitReq = async (dataObj) => {
  return await axios({
    method: "post",
    url: "https://frosty-wood-6558.getsandbox.com:443/dishes ",
    timeout: 1000 * 5, // Wait for 5 seconds
    headers: {
      "Content-Type": "application/json",
    },
    data: dataObj,
  })
    .then((response) => response.data)
    .catch((error) => error);
};

const SubmitButton = () => {
  const {
    dish_name,
    preparation_time,
    dish_type,
    number_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    let reqObj = {
      name: dish_name,
      preparation_time: moment(preparation_time).format("HH:mm:ss"),
      type: dish_type,
    };
    if (dish_type === "pizza") {
      reqObj.no_of_slices = parseInt(number_of_slices);
      reqObj.diameter = parseFloat(diameter);
    } else if (dish_type === "soup") {
      reqObj.spiciness_scale = spiciness_scale;
    } else {
      reqObj.slices_of_bread = parseInt(slices_of_bread);
    }
    setIsLoading(true);
    const response = await SubmitReq(reqObj);
    setIsLoading(false);
    console.log(response);
    dispatch(set_response(response));
  };

  return (
    <button
      className={"button"}
      style={{ marginTop: 20 }}
      onClick={() => handleSubmit()}
      disabled={
        !(
          dish_name !== "" &&
          moment(preparation_time).format("HH:mm:ss") !== "00:00:00" &&
          preparation_time !== null &&
          ((dish_type === "pizza" &&
            number_of_slices !== null &&
            diameter !== null &&
            parseFloat(diameter)) ||
            dish_type === "soup" ||
            (dish_type === "sandwich" && slices_of_bread !== null))
        ) || isLoading
      }
    >
      <p className={"center"} style={{ padding: 10, fontSize: "1.8rem" }}>
        {isLoading ? (
          <Loading
            size={"1rem"}
            margin={".5rem"}
            background={"rgba(0,1,255,0.62)"}
            height={"-1rem"}
          />
        ) : (
          "SUBMIT"
        )}
      </p>
    </button>
  );
};

export default SubmitButton;
