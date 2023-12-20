import './style.css'
import { Button } from 'reactstrap';

function Footer() {
  return (
    <div className="footer">
      <header className="App-footer">
        <footer className="footer1">

        <div className="footer-column contact-info">
          <div className="address-heading" >Team.Lemon</div>
          <div>123-456-7890</div>
          <div>Info@mysite.com</div>
          <div>Indian Institute of Technology Bhilai</div>
          <div>Kutelabhata, Durg, 491001</div>
        </div>
          <div className="footer-column">
            <div className="address-heading">Explore</div>
            <div className="footer-link">Solutions</div>
            <div className="footer-link">Vision</div>
            <div className="footer-link">Programs</div>
            <div className="footer-link" style={{paddingBottom:"20px"}}>Blog</div>
            <Button Danger >Get Started</Button>
          </div>
          <div className="footer-column subscription">
            <div className="subscribe-heading" style={{padding:"20px"}}>Subscribe to Our Newsletter</div>
            <form className="subscribe-form" >
                <label for="email" className="sr-only">Email* </label>
                <input type="email" placeholder="Email" />
                <span style={{padding:"10px"}}></span>
                <button type="submit" style={{padding:"10px", borderRadius:"10%", width: "fit-content"}}>Submit</button>
            </form>
          </div>
        <div className="footer-column footer-links">
          <div className="footer-row">
            <span style={{padding:"10px", fontWeight:"bold"}}>Follow Us On:</span>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
          <div className="footer-row">
            <span>© 2035 by Team.Lemon secured from RansomWare</span>
          </div>
        </div>
        </footer>
      </header>
    </div>
  );
}

export default Footer;
