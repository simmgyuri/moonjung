// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <a className="title" onClick={() => navigate("/")}>문중문고</a>
      <a className="login-btn" onClick={() => navigate("/login")}>
        로그인 / 회원가입
      </a>
    </header>
  );
}

export default Header;