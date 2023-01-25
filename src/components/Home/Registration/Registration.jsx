import React from "react";
import "./Registration.scss";
function Registration() {
  return (
    <section className="registration container">
      <h4>Регистрация</h4>
      <form action="#" className="form_register">
        <nav className="input__group">
          <nav>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Адрес" />
          </nav>
          <nav>
            <input type="text" placeholder="Дата рождения" />
            <input type="text" placeholder="Почта" />
            <input type="text" placeholder="Телефон" />
          </nav>
        </nav>
        <div className="regist_button">
          <button type="submit">Отправить</button>
        </div>
      </form>
    </section>
  );
}

export default Registration;
