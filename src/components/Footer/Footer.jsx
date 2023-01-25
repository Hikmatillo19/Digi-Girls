import React from "react";
import "./Footer.scss";
import logo__foot from "../../assets/img/logo__foot.png";
function Footer() {
  return (
    <footer>
      <div className="container footer">
        <span>
          <img src={logo__foot} alt="" />
          <h1>GIRLS IN DIGITAL</h1>
        </span>
        <ul className="foot__list">
          <li>О Проекте</li>
          <li>Направления</li>
          <li>Результаты</li>
          <li>Контакты</li>
        </ul>
        <div className="nets">
          <span>
            <button type="button">Уз</button>
            <button type="button">Ру</button>
          </span>
          <div>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-telegram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-facebook"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
