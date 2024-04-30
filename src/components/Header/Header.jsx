import { Fragment, useState } from "react";
import styles from "./Header.module.scss";
import cuisine from "../../assets/images/cuisine.png";
import HeaderMenu from "../Header_Menu/HeaderMenu";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function handleClick() {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="d-flex align-items-center flex-fill">
        <img src={cuisine} alt="logo cookchef" />
        <h1 className={`ml-15`}>{`Cuisin'Art`}</h1>
      </div>
      <ul className={`${styles.headerList}`}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={handleClick}
        className={`${styles.headerXs} fa-solid fa-bars mr-15`}
      ></i>
      {isShowMenu && (
        <Fragment>
          <div onClick={handleClick} className="calc"></div>
          <HeaderMenu />
        </Fragment>
      )}
    </header>
  );
}

export default Header;
