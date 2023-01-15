import "./Header.css";

export const Header = () => {
  const firstname: string = "Alma";
  const lastName: string = "Cederblad";

  return (
    <div className={"header-content"}>
      <h1 style={{ marginRight: "16px" }}> {firstname} </h1>
      <h1 style={{ fontWeight: "400" }}> {lastName} </h1>
    </div>
  );
};
