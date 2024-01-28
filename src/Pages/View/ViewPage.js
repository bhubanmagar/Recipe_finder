import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const ViewPage = () => {
  let [reciepeData, setReciepeData] = useState([]);
  const getSearchText = localStorage.getItem("search");

  useEffect(() => {
    FindReciepe();
    //eslint-disable-next-line
  }, []);

  const FindReciepe = async () => {
    try {
      let response =
        await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${getSearchText}&app_id=ad3cf698&app_key=fdee68cc2cbef7c28e30c3a0b2fc460b%09
      `);
      setReciepeData(response.data.hits);
    } catch (error) {
      alert("error while retrieving recipe data!");
    }
  };

  return (
    <>
      <div className="reciepe-container">
        <Navbar />
        <br />
        <h2>Suggested Recipe:</h2>
        <br />
        {reciepeData.map((el, index) => (
          <>
            <div className="coffee-lists">
              <br />
              <strong>{el.recipe.label}</strong>
              <br />
              <br />
              <img src={`${el.recipe.image}`} alt="coffee pic"></img>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>Ingridents:</span>
              {<div>{el.recipe.ingredientLines[0]}</div>}
              {<div>{el.recipe.ingredientLines[1]}</div>}
              {<div>{el.recipe.ingredientLines[2]}</div>}
              {<div>{el.recipe.ingredientLines[3]}</div>}
              {<div>{el.recipe.ingredientLines[4]}</div>}
              {<div>{el.recipe.ingredientLines[5]}</div>}
              {<div>{el.recipe.ingredientLines[6]}</div>}
              {<div>{el.recipe.ingredientLines[7]}</div>}
              {<div>{el.recipe.ingredientLines[8]}</div>}
              {<div>{el.recipe.ingredientLines[9]}</div>}
              {<div>{el.recipe.ingredientLines[10]}</div>}

              <br />
              <br />
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};
export default ViewPage;
