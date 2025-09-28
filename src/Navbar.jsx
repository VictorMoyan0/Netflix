import BellIcon from './assets/bell';
import NetflixSearchIcon from './assets/search';
import TablerUser from './assets/user';

function Navbar() {
  const userAvatar = "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
  return (
    <header>
      <nav>
        <div className="nav-menu-left">
          <a href="/browse" className="logo" aria-label="Netflix">Netflix</a>
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
          <NetflixSearchIcon/>
          <ul>
            <li>
              <a href="#">INFANTIL</a>
            </li>
            <li>
              <a href="#">DVD</a>
            </li>
          </ul>
          <BellIcon />
          <TablerUser imgUrl={userAvatar} />  
        </div>
      </nav>
    </header>
  );
}

export default Navbar;