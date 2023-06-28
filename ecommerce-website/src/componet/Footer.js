import React  from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css'

const Footer = () => {

    return(
        <footer>
        <div className="footer-content">
          <p>&copy; 2023 eCommerce-website. All rights reserved.</p>
          <nav>
            
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </footer>
    )
}

export default Footer;