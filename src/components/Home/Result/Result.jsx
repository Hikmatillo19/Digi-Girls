import React from "react";
import "./Result.scss";

import code from "../../../assets/img/code__icon.svg"
import sertifikat from '../../../assets/img/sertifikat__icon.svg'
import money from '../../../assets/img/money__icon.svg'
import rocket from '../../../assets/img/rocket__icon.svg'
import target from '../../../assets/img/target__icon.png'

const resultArr = [
  {
    id:1,
    icon:code,
    text:`Самореализация девушек в сфере IT`
  },
  {
    id:2,
    icon:sertifikat,
    text:`Выбор профессии без квалификациии дипломов`
  },
  {
    id:3,
    icon:money,
    text:`Возможность зарабатывать дистанционно (фриланс)`
  },
  {
    id:4,
    icon:rocket,
    text:`Возможность начать свои социальные проекты в виде Старт апов`
  },
  {
    id:5,
    icon:target,
    text:`Маркетинговые навыки`
  }
];
function Result() {
  return (
    <section className="result__bg" id="result">
      <div className="container result">
        <h4>Результаты</h4>
        <p>
          Ожидаемый результат: Подготовка квалифицированных и
          конкурентоспособных кадров и разработка стартапп проектов и среди
          девушек
        </p>
        <ul className="result__list">
          {
            resultArr && resultArr.map((e,i)=>(
                <li key={i}>
                    <span><img src={e.icon} alt="" /></span>
                    <p>{e.text}</p>
                </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Result;
