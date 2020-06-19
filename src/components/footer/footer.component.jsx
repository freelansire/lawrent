import React from 'react';
import { Link } from 'react-router-dom'
import './footer.styles.scss';
import * as Icon from 'react-feather';

const Footer = () => (
  
    <div className='footer'>
    
       <div className='fh2'>
        <h2>Lawrent Bankz <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2020</h2>     
      </div>

      <div className='connect'>
       <h2> <a href="#"><Icon.Instagram color="red" size={40} /></a>
            <a href="#"><Icon.Facebook color="lightblue" size={40}/></a>
            <a href="#"> <Icon.Twitter color="blue" size={40}/> </a> </h2>  
      </div>

        <div className='options'>
    <Link className='option' to='/'>
        TERMS
    </Link>
    <Link className='option' to='/'>
        REQUEST
    </Link>
    <Link className='option' to='/'>
        FAQS
    </Link>
    <Link className='option' to='/'>
        PAYMENT METHODS
    </Link>
    <Link className='option' to='/shop'>
        ABOUT US
    </Link>
    <Link className='option' to='/shop'>
        CONTACT US
    </Link>
   
     
    </div>
   
  </div>
);

export default Footer;