import React from "react";
import "./Tasks.scss";
const tasksArr = [
  {
    id: 1,
    task: "Подбор рабочей группы",
  },
  {
    id: 2,
    task: "Установить контакт с партнерами",
  },
  {
    id: 3,
    task: "Закупка офисной техники",
  },
  {
    id: 4,
    task: "Привлечение опытных специалистов (зарубежные специалисты);",
  },
  {
    id: 5,
    task: "Разработка модуля",
  },
  {
    id: 6,
    task: "Освещение  проекта с помощью СМИ",
  },
  {
    id: 7,
    task: "Проведение отбора участников",
  },
  {
    id: 8,
    task: "Организация проекта в 4 этапа",
  },
  {
    id: 9,
    task: "Организация форума и церемония награждения победителей",
  },
  {
    id: 10,
    task: "Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов",
  },
];
function Tasks() {
  return (
    <section className="tasks__bg" id="task">
      <div className="tasks container">
        <h4>Задачи</h4>
        <ul className="task__card">
          {tasksArr.map((e, i) =>(
             <li key={i}>{e.task}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tasks;
