import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Shimmer() {
  let arr = new Array(10).fill(0);
  arr[0] =
    "Fetching data from the backend may take a moment. Please wait for 10 seconds. Thank you for your patience.  you can manually refresh the page to expedite the data retrieval.";
  return (
    <div className="question_main">
      {arr.map((val, index) => {
        return (
          <div className="questions" key={index}>
            <Accordion>
              <AccordionSummary
                style={{
                  background: val === 0 ? "#121111" : "#121001",
                  width: "100%",
                }}>
                <Typography
                  className="question"
                  style={{
                    background:
                      val === 0
                        ? "#121111"
                        : "linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: val === 0 ? "#121111" : "transparent",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "sans-serif",
                  }}>
                  {val === 0
                    ? "Fetching data from the backend may take a moment. Please wait for 10 seconds while we retrieve the"
                    : val}
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
