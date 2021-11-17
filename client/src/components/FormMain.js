import { useDispatch, useSelector } from "react-redux";
import { Input, Select, TimePicker } from "antd";
import {
  set_dish_type,
  set_preparation_time,
  set_dish_name,
} from "../store/actions/formDataActions";
import moment from "moment";

const FormMain = () => {
  const dispatch = useDispatch();
  const { dish_name, preparation_time, dish_type } = useSelector(
    (state) => state.formData
  );

  return (
    <div>
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Dish name:
      </p>
      <Input
        placeholder="Please input dish name"
        onChange={(e) => dispatch(set_dish_name(e.target.value))}
        value={dish_name}
        size={"large"}
        type={"text"}
      />
      <p className={"center"} style={{ fontSize: "1.7rem", paddingTop: 10 }}>
        Preparation time:
      </p>
      <p className={"center"} style={{ fontSize: "1rem", paddingBottom: 10 }}>
        Hours:Minutes:Seconds
      </p>
      <TimePicker
        showNow={false}
        value={preparation_time}
        format={"HH:mm:ss"}
        placeholder={"Please select preparation time"}
        size="large"
        style={{ width: "100%" }}
        onSelect={(e) => dispatch(set_preparation_time(e))}
      />
      {moment(preparation_time).format("HH:mm:ss") === "00:00:00" && (
        <p style={{ color: "red" }}>
          Preparation time cannot be equal to 00:00:00
        </p>
      )}
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Type of dish:
      </p>
      <Select
        size={"large"}
        style={{ width: "100%" }}
        value={dish_type}
        placeholder={"Please select dish type"}
        onSelect={(e) => dispatch(set_dish_type(e))}
      >
        <Select.Option value="pizza">Pizza</Select.Option>
        <Select.Option value="soup">Soup</Select.Option>
        <Select.Option value="sandwich">Sandwich</Select.Option>
      </Select>
    </div>
  );
};

export default FormMain;
