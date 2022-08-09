import Account from "./Account";
import className from '../style/Nav.module.css';
import logo from '../../'

export default function Nav(){
  return (
    <nav className={className.nav}>
      <ul>
        <li>
          <a href="index.html" className={className.brand}>
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
  );
}