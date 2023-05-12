import {Link} from 'react-router-dom';
import LOGO from '../Images/LOGO.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import './footerStyle.css'


const Footer = () => {
  return (
    <footer>
        <div className="conatiner footer__container">
            <article className='footer__logo__social'>
                <Link to='/' >
                <img src={LOGO} alt="footer logo" className='LoGo'/>
                </Link>
                <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                <p>
                The latest news, articles, and resources, sent to your inbox weekly. 
                <input type="text" className='input1'/>
                <button className='btn1'>Subscribe</button>
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Support</h4>
                <Link to="/">Pricing</Link>
                
            </article>
            <article>
                <h4>Company</h4>
                <Link to="/">About</Link>
                
            </article>
            <article>
                <h4>Legal</h4>
                
                <Link to="/">Privacy</Link>
                <Link to="https://github.com">Terms</Link>
                
            </article>
            
        </div>
        <div className="footer__copyright">
                <small>2023 GymGenie &copy; ALL rights are Reserved</small>
            </div>
    </footer>
  )
}

export default Footer