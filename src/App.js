import BoardList from "./component/board";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBoard from "./component/board/createBoard";
import DetailContent from "./component/board/boardDetail";
import "./App.css";
import { SnbStyled, TopBar, GnbStyled, Contents } from "./css/component/Gnb";

function App() {
  const isActive = (e) => {
    const classList = e.target.classList;
    classList.value.includes("active")
      ? classList.remove("active")
      : classList.add("active");
  };

  return (
    <div className="App">
      <SnbStyled onClick={isActive}>ddd</SnbStyled>
      <GnbStyled>
        <TopBar>sdfsdfsdf</TopBar>
        <Contents>
          <Router>
            <Routes>
              <Route exact path="/" element={<BoardList />} />
              <Route path="/createBoard" element={<CreateBoard />} />
              <Route path="/board/:id" element={<DetailContent />} />
            </Routes>
          </Router>
        </Contents>
      </GnbStyled>
    </div>
  );
}

export default App;
