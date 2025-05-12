import React from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom을 사용
import "./MainPage.css"; // CSS 따로 관리
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Table from "./components/Table.jsx";

function MainPage() {
  const navigate = useNavigate(); // navigate 기능 사용

  return (
    
    
    <div className="main-container">
      {/* 상단 바 - 타이틀, 로그인 */}
        <Header /> 

      {/* 검색창 */}
      <div className="search-bar">
        <input type="text" placeholder="검색어를 입력하세요" />
        <button onClick={() => navigate("/search")}>검색</button>
      </div>

      {/* 상태 버튼 */}
    <div className="status-buttons">
      <a href="#" className="notification">
        <span>현재<br />대출 중<br />📖</span>
        <span className="badge">3</span>
      </a>
      <a href="#" className="notification">
        <span>현재<br />예약 중<br />⏰</span>
        <span className="badge">3</span>
      </a>
      <a href="#" className="notification">
        <span>현재<br />연체 중<br />⚠️</span>
        <span className="badge">5</span>
      </a>
    </div>

      {/* 공지 */}
      <div className="section-wrapper">
        <div className="section-header">
          <span>📢 공지</span>
          <button className="plus-button">＋</button>
        </div>
        <div className="card large-card"> <Table limit={3} /> </div>
      </div>
      

      {/* 아래쪽 영역 */}
      <div className="bottom-sections">
        {/* 큐레이션 */}
        <div className="section tall">
          <div className="section-header">
            <span>👩‍🏫 큐레이션</span>
            <button className="plus-button">＋</button>
          </div>
          <div className="card tall-card"><Table limit={5} /></div>
        </div>

        <div className="right-column">
          {/* 문중문고 소개 */}
          <div className="section small">
            <div className="section-header">
              <span>📚 문중문고 소개</span>
              <button className="plus-button">＋</button>
            </div>
            <div className="card small-card"><Table limit={1} /></div>
          </div>

          {/* 이용안내 */}
          <div className="section small">
            <div className="section-header">
              <span>ℹ️ 이용안내</span>
              <button className="plus-button">＋</button>
            </div>
            <div className="card small-card"><Table limit={1} /></div>
          </div>
        </div>
      </div>

    <Footer />

    </div>
  );
}

export default MainPage;