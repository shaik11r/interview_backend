import "./Card.css";
import js from "../assests/icons8-javascript (1).svg";
import node from "../assests/icons8-node-js.svg";
import react from "../assests/icons8-react-native.svg";
import java from "../assests/icons8-java.svg";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const handleOnClick = (subject, source) => {
    const propsToPass = {
      source,
    };
    navigate(`/${subject}`, { state: { propsToPass } });
  };
  const array = [
    {
      name: "JavaScript",
      source: js,
      subject: "javaScript",
    },
    {
      name: "Node",
      source: node,
      subject: "node",
    },
    {
      name: "React",
      source: react,
      subject: "react",
    },
    {
      name: "Java",
      source: java,
      subject: "java",
    },
  ];
  return (
    <div className="Card_main">
      {array.map((val) => {
        return (
          <div className="gradient_border" id="box" onClick={() => handleOnClick(val.subject, val.source)}>
            <img src={val.source} alt="reactjs" />
            <div className="Card_font">{val.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
