import React from "react";
import "./Project2.scss";
import project2img1 from "../../../assets/img/project2img1.png";
import project2img2 from "../../../assets/img/project2img2.png";
function Project2() {
  return (
    <div className="container project2">
      <div className="project2_card project2_card1">
        <img src={project2img1} className="project2img1" alt="" />
        <p className="project2p1">
          Проект осуществляется в 4 этапа. Отбор участников проводится на основе
          специального анкетирования,собесодование а также анкетирование
          возможно на сайте проекта в режиме он-лайн. также собеседования с
          участием тренеров и специалистов. Привлечение участников будет
          производиться посредством рекламной кампании в ТВ, интернет и печатной
          СМИ.
        </p>
      </div>
      <div className="project2_card project2_card2">
        <p className="project2p2">
          Рабочая группа будет состоят из высококвалифицированных
          тренеров-специалистов. Для полного информирования участников проекта
          требуется освещение через СМИ, разработка сайта и создание PR-группы.
          Рабочей группой будут разработаны модули, программы направлений в
          проекте.
        </p>
        <img src={project2img2} alt="" />
      </div>
    </div>
  );
}

export default Project2;
