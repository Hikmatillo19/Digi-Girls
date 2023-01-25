import './Header.scss'
//IMG
import Logo from '../../assets/img/Logo.png'
function Header() {
  return (
    <nav className='container navBar'>
        <h1><img src={Logo} alt="" />Girls in Digital </h1>
        <div className='navBar__right'>
        <ul className='navBar__list'>
            <li><a href='#project'>О Проекте</a></li>
            <li><a href='#direction'>Направления</a></li>
            <li><a href='#task'>Задачи</a></li>
            <li><a href='#result'>Результаты</a></li>
            <li><a href='#contact'>Контакты</a></li>
        </ul> 
        <select>
          <option value="РУ">РУ</option>
          <option value="EN">EN</option>
          <option value="UZ">UZ</option>
        </select>
        <a href="/" className='regist'>Регистрация</a>
        </div>
    </nav>
  )
}

export default Header