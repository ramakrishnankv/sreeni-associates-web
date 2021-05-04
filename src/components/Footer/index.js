import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="appFooter">
    <div className="footerInner">
      <div className="footerLinks">
        <div className="flink">
          <h3>CAREER WITH US</h3>
          <p><Link to="/">Accounts Assistant - Trainee</Link></p>
          <p><Link to="/">Accounts Assistant</Link></p>
          <p><Link to="/">Office Assistant</Link></p>
          <p><Link to="/">Tax Practitioner</Link></p>
        </div>
        <div className="flink">
          <h3>OUR CLIENTS</h3>
          <p><Link to="/">HDFC India</Link></p>
          <p><Link to="/">DELL Systems Limited</Link></p>
          <p><Link to="/">Kottakkal Aryavaidyasala</Link></p>
        </div>
        <div className="flink">
          <h3>PARTNERS</h3>
          <p><Link to="/">Kotak</Link></p>
          <p><Link to="/">TATA</Link></p>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };