import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const AdminDataContainer = ({ title = "", buttons = [], children }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>{title}</h1>
        <div className={`d-flex gap-3`}>
          {buttons.map((button, index) => {
            return (
              <Fragment key={index}>
                {button.link ? (
                  <Link to={button.link}>
                    <Button variant="dark">{button.label}</Button>
                  </Link>
                ) : (
                  <Button
                    variant="dark"
                    onClick={button.callback ? button.callback : () => {}}
                  >
                    {button.label}
                  </Button>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      <hr className={style.divider} />
      {children}
    </div>
  );
};

export default AdminDataContainer;
