import "./Profile.css";
import pic from "../assets/profilepic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Profile = ({ onClick }: { onClick: () => void }) => {
  const profileTxt: string =
    "Jag är en glad och ambitiös problemlösare som motiveras av möjligheten att lära mig nya saker. Jag är en driven person med stor kommunikativ förmåga och ett stort intresse för att skapa användbar och tillgänglighetsanpassad kod. Efter jobbet tycker jag om att pröva restauranger och hänga med mina katter.";
  const more: string = "Vill du veta mer?";

  return (
    <div className={"profile-container"}>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-lg-6 col-md-12 center">
          <img src={pic} alt="horse" className={"profile-pic"} />
        </div>
        <div className="col-lg-6 col-md-12  center">
          <h2 className={"profile-text"}> Hej där,</h2>
          <p className={"profile-text"}>{profileTxt}</p>
        </div>
      </div>

      <div className={"profile-more-wrapper"}>
        <span
          className={"profile-text"}
          style={{ fontSize: "30px", fontWeight: "800" }}
        >
          {more}
        </span>
        <button className={"profile-button"} onClick={onClick}>
          <ArrowDownwardIcon
            className={"profile-button-arrow"}
            sx={{
              height: "50px",
              width: "50px",
              color: "#404040",
              "&:hover, &:focus": {
                color: "lightGrey",
              },
            }}
          />
        </button>
      </div>
    </div>
  );
};
