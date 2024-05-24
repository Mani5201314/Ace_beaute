import "../../Styles/Second.css";
import Button from "react-bootstrap/Button";

const Second = ({ EYESHADOW_PALETTES }) => {
  return (
    <div>
      <div className="images_logic">
        {EYESHADOW_PALETTES.map(data => (
          <div className="images">
            <div className="thumb">
              <img src={data.thumbnail} alt="" />
            </div>
            <div className="detail">
              <div>{data.stars}</div>

              <div className="title1">
                <div style={{ fontWeight: "500" }}>{data.views}</div>
                <div style={{ fontWeight: "900", fontSize: "19px" }}>
                  {data.title}
                </div>
                <div style={{ fontWeight: "500" }}>{data.price}</div>
                <Button id="btn-second" variant="outline-dark">
                  {data.btn}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button id="btn-second1" variant="outline-dark">
        VIEW ALL
      </Button>
    </div>
  );
};
export default Second;
