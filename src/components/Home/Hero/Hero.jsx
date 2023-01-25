import React from "react";
import "./Hero.scss";
import DigitalGirl from "../../../assets/img/HeroGirl.png";
function Hero() {
  return (
    <div className="container hero">
      <div className="hero__left">
        <div className="bgFlow">
          <h4>“Girls in digital”</h4>
          <p>
            Организация курсов повышения <br /> квалификации для девушек специалистов <br /> в
            сфере ИТ и подготовка <br /> высококвалифицированных кадров
          </p>
          <a href="/">Подробнее</a>
        </div>
      </div>
      <img src={DigitalGirl} className="DigitalGirl" alt="" />
    </div>
  );
}

export default Hero;
