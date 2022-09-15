import { useNavigate } from "react-router-dom";
import jokerPNG from "../../assets/img/joker.png";
import getColor from "../../services/getColor";
import styles from "./styles.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "90vh",
        overflowY: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              color: getColor("citizen"),
              margin: "4px",
            }}
          >
            4
          </h1>
          <img
            src={jokerPNG}
            height="64px"
            width="40px"
            style={{
              marginBottom: "8px",
            }}
          />
          <h1
            style={{
              fontSize: "50px",
              color: getColor("mafia"),
              margin: "4px",
            }}
          >
            4
          </h1>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/", {
              replace: true,
            });
          }}
        >
          Back to HomePage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
