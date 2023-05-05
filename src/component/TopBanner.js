import './TopBanner.css';
import logoHero from "../assets/AtheosLogo.png";
import {NavLink, Link} from 'react-router-dom';

function TopBanner() {
  return (
    <div className="TopBanner position-absolute">
      <Link to="/">
        <img
          className='navMenu'
          src={logoHero}
          alt="Logo Hero"
        />
      </Link>
    </div>
  );
}

export default TopBanner;
