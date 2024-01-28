import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const MainPage = () => {
  let [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const view = (e) => {
    localStorage.setItem("search", searchText);
    navigate("/view");
  };

  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="searchbox">
          <form onSubmit={view}>
            <input
              type="text"
              value={searchText}
              placeholder="      Coffee"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={view}>Search</button>
          </form>
        </div>
      </div>
      <div className="items-section"></div>
    </>
  );
};

export default MainPage;
