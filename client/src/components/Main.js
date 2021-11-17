import { useSelector } from "react-redux";

import FormMain from "./FormMain";
import Pizza from "./DishTypes/Pizza";
import Soup from "./DishTypes/Soup";
import Sandwich from "./DishTypes/Sandwich";
import Response from "./Response";

const Main = () => {
  const { dish_type, response } = useSelector((state) => state.formData);

  return (
    <div className={"center main-wrapper"}>
      <div style={{ width: 800 }}>
        <p
          className={"center"}
          style={{ fontSize: "2rem", textDecoration: "underline" }}
        >
          All fields are required
        </p>
        <FormMain />
        {dish_type === "pizza" && <Pizza />}
        {dish_type === "soup" && <Soup />}
        {dish_type === "sandwich" && <Sandwich />}
        {typeof response.name === "string" ? <Response /> : ""}
      </div>
    </div>
  );
};

export default Main;
