import { LineMdBell } from './assets/bell';
import { MaterialSymbolsSearch } from './assets/search';
import { TablerUser } from './assets/user';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-menu-left">
          <img src="/logo.png" alt="logo" />
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">SeriesTV</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Añadido Recientemente</a>
            </li>
            <li>
              <a href="#">Mi Lista</a>
            </li>
          </ul>
        </div>

        <div className="nav-menu-right">
          <NetflixSearchIcon width={24} height={24} />
          <ul>
            <li>
              <a href="#">INFANTIL</a>
            </li>
            <li>
              <a href="#">DVD</a>
            </li>
          </ul>
          <LineMdBell />
          <TablerUser />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;