import "./Profile.css";
import pic from "../../assets/profilepic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Profile = ({ onClick }: { onClick: () => void }) => {
  const profileTxt: string =
    "Jag är en glad och ambitiös problemlösare som motiveras av möjligheten att lära mig nya saker. Jag är en driven person med stor kommunikativ förmåga och ett stort intresse för att skapa användbar och tillgänglighetsanpassad kod. Efter jobbet tycker jag om att pröva restauranger och hänga med mina katter.";
  const more: string = "Vill du veta mer?";

  return (
    <div className={"profile-container"}>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-lg-6 col-md-12 profile-align">
          <img src={pic} alt="horse" className={"profile-pic"} />
        </div>
        <div className="col-lg-6 col-md-12 profile-align">
          <h2 className={"profile-text"}> Hej där,</h2>
          <p className={"profile-text"}>{profileTxt}</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <button className={"profile-info-button"}>Ladda ner cv</button>
            <button className={"profile-info-button"}>Kontakta mig</button>
          </div>
        </div>
      </div>
      <div className={"profile-more-wrapper"}>
        <button className={"profile-button"} onClick={onClick}>
          <ArrowDownwardIcon
            className={"profile-button-arrow"}
            sx={{
              height: "70px",
              width: "70px",
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
