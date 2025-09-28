import Navbar from './Navbar';
import Recommendations from './assets/recommendations';
import Banner from './assets/banner';
import './Style.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className='recommendations-container'>
        <Recommendations />
      </div>
      
    </>
  );
}

export default App;