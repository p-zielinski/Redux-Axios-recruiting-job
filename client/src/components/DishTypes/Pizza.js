import { Input, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  set_number_of_slices,
  set_diameter,
} from "../../store/actions/formDataActions";
import SubmitButton from "../SubmitButton";

const Pizza = () => {
  const dispatch = useDispatch();
  const { number_of_slices, diameter } = useSelector((state) => state.formData);

  const handleSetDiameterChange = (e) => {
    let firstDot = false;
    e = e
      .replace(/,/g, ".")
      .split("")
      .filter((e) => {
        if (firstDot === false) {
          if (e === ".") {
            firstDot = true;
          }
          return e.match(/[0-9.]/);
        } else {
          return e.match(/[0-9]/);
        }
      })
      .join("");
    dispatch(set_diameter(e));
  };

  const handleSetNumberOfSlices = (e) => {
    if (e !== null) {
      e = e
        .toString()
        .split("")
        .filter((e) => e.match(/[0-9]/))
        .join("");
      dispatch(set_number_of_slices(e));
    }
  };

  return (
    <>
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Number of slices:
      </p>
      <InputNumber
        type={"number"}
        value={number_of_slices}
        onChange={(e) => handleSetNumberOfSlices(e)}
        size={"large"}
        style={{ width: "100%" }}
        placeholder="Number of slices"
      />
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Pizza's diameter in cm:
      </p>
      <Input
        placeholder="Pizza's diameter in cm"
        size={"large"}
        type={"text"}
        value={diameter}
        onChange={(e) => handleSetDiameterChange(e.target.value)}
      />
      <SubmitButton />
    </>
  );
};

export default Pizza;
