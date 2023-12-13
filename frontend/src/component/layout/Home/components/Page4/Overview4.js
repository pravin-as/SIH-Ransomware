import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './Overview4.css'; // Ensure this file is in the same directory
import { Slide } from 'react-awesome-reveal';
const Overview4 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50 && !scrolled) {
        setScrolled(true);
      } else if (scrollY <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`Overview4-section ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{border:"1px solid white", fontSize:"30px", fontFamily:"sans-serif"}} >

      
        <div className="row" >
            <div className="col" style={{border:"1px solid white", padding:"50px"}} > 
            <Slide delay={1}>Our Partners </Slide></div>
        
            <div className="col" style={{border:"1px solid white", padding:"50px"}} > <Slide delay={1}><img src='https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_136,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2016.png'></img> </Slide> </div>

            <div className="col" style={{border:"1px solid white", padding:"50px"}} > <Slide delay={1}><img src='https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_101,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2028.png'></img> </Slide>  </div>

            
            <div className="col" style={{border:"1px solid white", padding:"50px"}} > <Slide delay={1}><img src='https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_152,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2020.png'></img> </Slide> </div>
            
            <div className="col" style={{border:"1px solid white", padding:"50px"}} > <Slide delay={1}><img src='https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_98,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2017.png'></img> </Slide> </div>

        </div>
        <div className="row">
            <div className="col" style={{border:"1px solid white", padding:"120px"}}  > <Slide delay={1}> Are You Ready to Accelerate Your Business?</Slide> </div>
            <div className="col" style={{border:"1px solid white", padding:"100px", fontSize:"16px", textAlign:"left"}}  > 
            <Slide delay={1}>
            <div>
            <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <Button> Get Started</Button>
            </div>
            </Slide> 
             </div>
        </div>

      </div>

    </div>
  );
};

export default Overview4;
