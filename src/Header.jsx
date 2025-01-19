import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Bibliotique</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/details-livre">DetailsLivres</Link>
      </div>
    </div>
  );
};

export default Header;
