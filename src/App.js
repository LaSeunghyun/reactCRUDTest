import GNB from "./component/Gnb";
import BoardList from "./component/board";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBoard from "./component/board/createBoard";
import DetailContent from "./component/board/detailContent";

function App() {
  return (
    <div className="App">
      <GNB />
      <Router>
        <Routes>
          <Route exact path="/" element={<BoardList />} />
          <Route path="/createBoard" element={<CreateBoard />} />
          <Route path="/board/:id" element={<DetailContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
