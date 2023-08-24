import "./Card.css";
import js from "../assests/icons8-javascript (1).svg";
import node from "../assests/icons8-node-js.svg";
import react from "../assests/icons8-react-native.svg";
import java from "../assests/icons8-java.svg";

function Card() {
  const array = [
    {
      name: "JavaScript",
      source: js,
    },
    {
      name: "Node",
      source: node,
    },
    {
      name: "React",
      source: react,
    },
    {
      name: "Java",
      source: java,
    },
  ];
  return (
    <div className="Card_main">
      {array.map((val) => {
        return (
          <div className="gradient_border" id="box">
            <img src={val.source} alt="reactjs" />
            <div className="Card_font">{val.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
