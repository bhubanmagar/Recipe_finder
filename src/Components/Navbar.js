import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/home">
          <h2 style={{ color: "#ffff" }}>Reciepe finder:</h2>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
