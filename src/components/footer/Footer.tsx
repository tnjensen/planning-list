import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import './footer.scss';

export default function Footer() {
    let date = new Date().getFullYear();
    if(date > 2024){
        date = ` 2024 - `+ date;
    }else{
        date =  ` 2024`;
    }
  return (
    <footer className="footer"> 
        <div className="footer-content">Copyright &copy; {date}</div>
        <div className="footer-social">
        <Link to={"https://www.facebook.com/tnjensen09"}><FaFacebook /></Link>
                <Link to={"https://www.instagram.com/tnjensen09"}><FaInstagram /></Link>
                <Link to={"https://linkedin.com/in/tnjensen09"}><FaLinkedin /></Link>
        </div>
    </footer>
  )
}
