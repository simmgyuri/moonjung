import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
    <a className="footerbutton" href="/loan">대출/반납</a>
    <a className="footerbutton" href="/">Home</a>
    <a className="footerbutton" href="/mypage">마이페이지</a>
  </footer>
  );
}

export default Footer;