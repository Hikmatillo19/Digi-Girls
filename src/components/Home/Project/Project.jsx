import React from 'react'
import './Project.scss'
import project1 from '../../../assets/img/projectImg1.png'
import project2 from '../../../assets/img/projectImg2.png'
function Project() {
  return (
    <div className='project container' id='project'>
        <h4>О проекте</h4>
        <div className='first__project'>
            <img src={project1} alt="" />
            <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
        </div>
        <div className='second__project'>
            <p>Проект “Программа обучения девушек в <br /> сфере И.Т ”  предназначен для девушек в <br /> возрасте 16-35 ,которые имеет базовые <br /> знание в сфере айти.</p>
            <img src={project2} alt="" />
        </div>
    </div>
  )
}

export default Project