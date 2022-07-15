import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import logoIcon from "../../assets/img/logo/LogoIcon.svg";

const NotFound = () => {
  return (
    <div className={`${style.notFoundContainer} bg-skSmoke text-skMidnight`}>
      <div
        className={`d-flex gap-5 justify-content-center align-items-center ${style.errorContainer}`}
      >
        <img src={logoIcon} alt={`sewaKantor`} className={style.logoImage} />
        <div className={`${style.divider} bg-skMidnight`} />
        <div className={``}>
          <div className={`d-flex gap-2 align-items-center`}>
            <h1 className={`fw-bold ${style.text404}`}>404</h1>
            <div className={`d-flex flex-column justify-content-center`}>
              <h2 className={`${style.textError}`}>Not</h2>
              <h2 className={`${style.textError}`}>Found</h2>
            </div>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed.
          </p>
        </div>
      </div>
      <Link to="/">
        <Button variant="dark" className={`my-3`}>
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
