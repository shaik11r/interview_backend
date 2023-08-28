import { useEffect, useState } from "react";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BASE_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
function Question() {
  const { subject } = useParams();
  const [data, setData] = useState([]);
  const [pagenumber, setPageNumber] = useState(1);
  const handleOnClick = (event, value) => {
    setPageNumber(value);
  };
  async function fetchData() {
    const appData = await fetch(`${BASE_URL}/api/${subject}/questions?page=${pagenumber}`);
    if (!appData) {
      throw new Error("failed to fetch data");
    }
    const response = await appData.json();
    setData(response.data);
  }
  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => {
      controller.abort();
    };
  }, [pagenumber, subject]);
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="question_main">
      {data.map((val) => {
        return (
          <div className="questions" key={val._id}>
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
              <AccordionDetails
                style={{
                  background: "#121111",
                }}>
                <Typography
                  className="answer"
                  style={{
                    color: "white",
                  }}>
                  {val.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <Stack spacing={2} className="pagination">
        <Pagination
          count={4}
          pagenumber={pagenumber}
          color="secondary"
          style={{ color: "white" }}
          onChange={handleOnClick}
        />
      </Stack>
    </div>
  );
}
export default Question;
