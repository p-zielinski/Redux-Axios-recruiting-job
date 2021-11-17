import { useDispatch, useSelector } from "react-redux";
import { set_spiciness_scale } from "../../store/actions/formDataActions";
import { Slider, InputNumber } from "antd";
import SubmitButton from "../SubmitButton";

const Soup = () => {
  const dispatch = useDispatch();
  const { spiciness_scale } = useSelector((state) => state.formData);

  return (
    <>
      <p className={"center"} style={{ fontSize: "1.7rem", padding: 10 }}>
        Spiciness:
      </p>
      <div className={"flex-wrapper"}>
        <Slider
          min={0}
          max={10}
          value={typeof spiciness_scale === "number" ? spiciness_scale : 0}
          onChange={(e) => dispatch(set_spiciness_scale(e))}
          style={{ width: "100%", marginRight: 20, marginTop: 14 }}
        />
        <InputNumber
          min={0}
          max={10}
          size={"large"}
          style={{ margin: "0 16px" }}
          value={spiciness_scale}
          onChange={(e) => dispatch(set_spiciness_scale(e))}
          style={{ marginRight: 0 }}
        />
      </div>
      <SubmitButton />
    </>
  );
};

export default Soup;
