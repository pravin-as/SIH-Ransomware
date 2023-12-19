import './Home.css';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import IntroSection from './components/header_footer/WelcomeSection';
import Overview from './components/Page1/Overview';
import Overview2 from './components/Page2/Overview2';
import Overview3 from './components/Page3/Overview3';
import Overview4 from './components/Page4/Overview4';
import { Slide, Bounce, Zoom } from "react-awesome-reveal";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-intro">
          <Header />
          <Slide cascade delay={0.1}>
          <IntroSection/>
          </Slide>
       
          <Overview />

         
          <Overview2 />
          

          <Overview3 />
           
          <Overview4 /> 
         <Footer /> 
        </div>
      </header>
    </div>
  );
}

export default App;
