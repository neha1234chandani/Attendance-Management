import Wrapper from "./style";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { services } from "../../services";
import { batches } from "../../services";

const _batches = batches.map(batch => {
    let batchArray = batch.split("-");
    return {
        branch: batchArray[0],
        year: batchArray[1],
        section: batchArray[2] 
    }
})

const FacultyHomePage = () => {
  const currentUser = useSelector(state => state.currentUser);
  const [firstName, lastName] = currentUser.name.split(" ");
  const currentStudents = useSelector((state) => state.currentStudents);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedYear, setSelectedYear] = useState("");
  const [searchedBatch, setSearchedBatch] = useState("");


  const [filteredBatches, setFilteredBatches] = useState(_batches);

  useEffect(() => {
    if (searchedBatch !== "") {
      setFilteredBatches(
        _batches.filter((batch) => {
          const temp = batch.branch + "-" + batch.year + "-" + batch.section;
          return temp.indexOf(searchedBatch.toUpperCase()) !== -1;
        })
      );
    }
    console.log(filteredBatches);
  }, [searchedBatch]);

  useEffect(() => {
    if (currentStudents.length !== 0) {
      navigate("/attendance-mark");
    } else {
     // alert("The batch is empty!!");
    }
  }, [currentStudents]);

  const yearSelectHandler = (event) => {
    if (event.target.nodeName === "DIV") {
      setSelectedYear(event.target.textContent);
    }
  };

  const searchedBatchHandler = (event) => {
    setSearchedBatch(event.target.value);
  };

  const batchSelectHandler = (event) => {
    const currentBatch = event.target.textContent;
    dispatch({
      type: "BATCH_SELECT",
      payload: {
        currentBatch,
      },
    });
    services.user.read().then((res) => {
      dispatch({
        type: "STUDENT_SELECT",
        payload: {
          currentBatch,
          users: res.data,
        },
      });
    });
  };

  if (selectedYear !== "") {
    setFilteredBatches(_batches.filter((batch) => batch.year === selectedYear));
    setSelectedYear("");
  }

  return (
    <Wrapper>
      <h1>Welcome {firstName} </h1>
      <div className="year-filter" onClick={yearSelectHandler}>
        <div>I</div>
        <div>II</div>
        <div>III</div>
        <div>IV</div>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="CS-I-A"
          onChange={searchedBatchHandler}
        />
      </div>
      <div className="batch-options">
        {filteredBatches.map((batch) => (
          <div className="batch-container" onClick={batchSelectHandler} >
            {batch.branch}-{batch.year}-{batch.section}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FacultyHomePage;
