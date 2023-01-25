import React from 'react'
import './Direction.scss'
//IMG
import target from '../../../assets/img/target.png'
import interiorDesign from '../../../assets/img/3DDizayn.png'
import graphicDesign from '../../../assets/img/graphicDesign.png'
import logistic from '../../../assets/img/ligistic.png'
import program from '../../../assets/img/program.png'
import management from '../../../assets/img/ITManagement.png'
function Direction() {
  return (
    <div className='direction__bg' id='direction'>
        <div className="direction container">
            <h5>Направлении <br /> <span>Проект будет проводится по направлениям</span></h5>
            <div className='direction__cards'>
                <div className='diretion__card'>
                    <p>SMM и Таргетинг, <br /> копирайтинг</p>
                    <img src={target} alt="" />
                </div>
                <div className='diretion__card'>
                    <p>3D <br /> дизайн.</p>
                    <img src={interiorDesign} alt="" />
                </div>
                <div className='diretion__card'>
                    <p>Графический <br /> дизайн</p>
                    <img src={graphicDesign} alt="" />
                </div>
                <div className='diretion__card'>
                    <p>Логистика</p>
                    <img src={logistic} alt="" />
                </div>
                <div className='diretion__card'>
                    <p>Программиро- <br /> вание</p>
                    <img src={program} alt="" />
                </div>
                <div className='diretion__card'>
                    <p>Айти <br /> менеджмент</p>
                    <img src={management} alt="" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Direction