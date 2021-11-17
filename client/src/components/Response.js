import { useSelector } from "react-redux";

const Response = () => {
  const { response } = useSelector((state) => state.formData);

  return (
    <div className={"response-wrapper"}>
      {typeof response.message === "string" ? (
        <p
          className={"center"}
          style={{ textAlign: "center", fontSize: "1.5rem" }}
        >
          <p style={{ fontSize: "1.9rem", textDecoration: "underline" }}>
            Latest response:
          </p>
          {response.message}
        </p>
      ) : (
        <p
          className={"center"}
          style={{ textAlign: "center", fontSize: "1.5rem" }}
        >
          <p style={{ fontSize: "1.9rem", textDecoration: "underline" }}>
            Latest response:
          </p>
          {typeof response.name === "string" && (
            <p>Dish name: {response.name}</p>
          )}
          {typeof response.preparation_time === "string" && (
            <p>Preparation time: {response.preparation_time}</p>
          )}
          {typeof response.type === "string" && (
            <p>Dish type: {response.type}</p>
          )}
          {typeof response.no_of_slices === "number" && (
            <p>Number of slices: {response.no_of_slices}</p>
          )}
          {typeof response.diameter === "number" && (
            <p>Diameter: {response.diameter}</p>
          )}
          {typeof response.spiciness_scale === "number" && (
            <p>Spiciness: {response.spiciness_scale}</p>
          )}
          {typeof response.slices_of_bread === "number" && (
            <p>Number of bread slices: {response.slices_of_bread}</p>
          )}
          {typeof response.id === "number" && <>ID: {response.id}</>}
        </p>
      )}
    </div>
  );
};

export default Response;
