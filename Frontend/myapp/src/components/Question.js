import { useEffect, useState } from "react";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function Question() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const appData = await fetch("http://localhost:8080/api/questions?page=1");
    if (!appData) {
      throw new Error("failed to fetch data");
    }
    const response = await appData.json();
    setData(response.data);
    console.log(data);
  }
  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="question_main">
      {data.map((val) => {
        return (
          <div className="questions">
            <Accordion>
              <AccordionSummary
                style={{
                  background: "#121111",
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
                  {val.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails  style={{
                  background: "#121111",
                }}>
                <Typography className="answer"
                 style={{
                    color:'white'
                  }}>{val.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <Stack spacing={2} className="pagination" >
        <Pagination count={10} color="secondary" style={{color:'white'}}/>
      </Stack>
    </div>
  );
}
export default Question;
