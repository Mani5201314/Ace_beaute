import './App.css';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Slide from './components/step1/Slide';
import Slide2 from './components/step2/Slide2';
import Slide3 from './components/step3/Slide3';
import Gif from './components/step4/Gif';
import Carouselss from './components/step5/Slide4';
import Slide5 from './components/step6/Slide5';
import Slide7 from './components/step7/Slide7';
import Slide8 from './components/step8/Slide8';


function App() {
  return (
    <div className="App">
      <Nav1 />
      <Nav2 />
      <Slide />
      <Slide2 />
      <Slide3 />
      <Gif />
      <Carouselss />
      <Slide5 />
      <Slide7 />
      <Slide8/>
    </div>
  );
}

export default App;
