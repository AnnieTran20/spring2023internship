import car1 from './images/car1.jpg';
import './App.css';
import NavBar from './components/NavBar';
import Poster from './components/Poster';
import AnotherSearch from './components/AnotherSearch';
import MyCarousel from './components/MyCarousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Title1 from './components/Title1';
import Panel1 from './components/Panel1';
import Container1 from './components/Container1';
import Container2 from './components/Container2';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };  
  return (
    <div className="App">
      <NavBar/>
      <Poster/>
      <AnotherSearch/>
      <Title1/>
      <Carousel className="MyCarousel" responsive={responsive}>
      <div>
        <img src={car1} alt="product 1"/>
        <h3>Newly Listed</h3>
        <h3>More description</h3>
        <h2>$44,367</h2>
      </div>
      <div>
        <img src={car1} alt="product 1"/>
        <h3>Newly Listed</h3>
        <h3>More description</h3>
        <h2>$44,367</h2>
      </div>
      <div>
        <img src={car1} alt="product 1"/>
        <h3>Newly Listed</h3>
        <h3>More description</h3>
        <h2>$44,367</h2>
      </div>
      <div>
        <img src={car1} alt="product 1"/>
        <h3>Newly Listed</h3>
        <h3>More description</h3>
        <h2>$44,367</h2>
      </div>
    </Carousel>
    <Panel1/>
    <Container1/>
    <Container2/>


    </div>
  );
}

export default App;
