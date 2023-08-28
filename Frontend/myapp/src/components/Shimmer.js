import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Shimmer() {
  let arr = new Array(20).fill(0);
  console.log(arr);
  return (
    <div className="question_main">
      {arr.map((val) => {
        return (
          <div className="questions">
            <Accordion>
              <AccordionSummary
                style={{
                  background: "#121001",
                }}>
                <Typography
                  className="question"
                  style={{
                    background: "linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "sans-serif",
                  }}>
                  {}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#121111",
                }}>
                <Typography
                  className="answer"
                  style={{
                    color: "white",
                  }}>
                  {}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
