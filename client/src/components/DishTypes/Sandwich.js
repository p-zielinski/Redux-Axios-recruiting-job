import { useDispatch, useSelector } from "react-redux";
import { set_slices_of_bread } from "../../store/actions/formDataActions";
import { InputNumber } from "antd";
import SubmitButton from "../SubmitButton";

const Sandwich = () => {
  const dispatch = useDispatch();
  const { slices_of_bread } = useSelector((state) => state.formData);

  const handleSetNumberOfSlices = (e) => {
    if (e !== null) {
      e = e
        .toString()
        .split("")
        .filter((e) => e.match(/[0-9]/))
        .join("");
      dispatch(set_slices_of_bread(e));
    }
  };

  return (
    <>
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Number of bread slices:
      </p>
      <div className={"flex-wrapper"}>
        <InputNumber
          type={"number"}
          min={1}
          value={slices_of_bread}
          onChange={(e) => handleSetNumberOfSlices(e)}
          size={"large"}
          style={{ width: "100%" }}
          placeholder="Number of slices"
        />
      </div>
      <SubmitButton />
    </>
  );
};

export default Sandwich;
