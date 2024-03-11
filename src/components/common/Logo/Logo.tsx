import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = (): JSX.Element => {
  return (
    <div className="logo_container">
      <Link to="/#start">
        <img
          src="/logo-no-background-white.png"
          alt="Białe logo na czarnym tle"
        />
      </Link>
    </div>
  );
};

export default Logo;
