import React, { useState } from 'react';
import './App.css';
import FruitsPage from './components/FruitsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'fruits':
        return <FruitsPage />;
      default:
        return (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">探索自然的美味</h1>
                <p className="hero-subtitle">来自我们果园的新鲜水果，让您品尝到最纯正的味道</p>
                <button className="cta-button" onClick={() => setCurrentPage('fruits')}>立即选购</button>
              </div>
            </section>

            <section className="featured-fruits">
              <h2 className="section-title">当季精选</h2>
              <div className="fruit-grid">
                <div className="fruit-card">
                  <div className="fruit-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)'}}></div>
                  <h3>红富士苹果</h3>
                  <p>新鲜采摘，甜脆可口</p>
                  <span className="price">¥29.9/斤</span>
                </div>
                <div className="fruit-card">
                  <div className="fruit-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)'}}></div>
                  <h3>阳光葡萄</h3>
                  <p>果肉饱满，清甜多汁</p>
                  <span className="price">¥39.9/斤</span>
                </div>
                <div className="fruit-card">
                  <div className="fruit-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1543253687-cddc5e6c3e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)'}}></div>
                  <h3>黄金梨</h3>
                  <p>皮薄肉厚，香甜可口</p>
                  <span className="price">¥19.9/斤</span>
                </div>
              </div>
            </section>

            <section className="about-section">
              <div className="about-content">
                <h2 className="section-title">关于我们的果园</h2>
                <div className="about-grid">
                  <div className="about-text">
                    <p>我们拥有超过100亩的优质果园，采用生态种植方式，确保每一颗水果都健康美味。</p>
                    <p>我们的果园位于阳光充足的山坡地带，得天独厚的地理位置让水果品质更上一层楼。</p>
                  </div>
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">果园面积(亩)</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">20+</span>
                      <span className="stat-label">水果品种</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">种植经验(年)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">水果果园</div>
        <div className="nav-links">
          <a href="#home" onClick={() => setCurrentPage('home')}>首页</a>
          <a href="#fruits" onClick={() => setCurrentPage('fruits')}>水果</a>
          <a href="#about">关于我们</a>
          <a href="#contact">联系方式</a>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
