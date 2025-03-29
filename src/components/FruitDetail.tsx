import React from 'react';
import './FruitDetail.css';

interface Fruit {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  longDescription: string;
  image: string;
  season: string;
  nutrition: {
    calories: string;
    sugar: string;
    fiber: string;
    vitaminC: string;
  };
  storageGuide: string;
  origin: string;
  harvestTime: string;
}

interface FruitDetailProps {
  fruit: Fruit;
  onClose: () => void;
}

const FruitDetail: React.FC<FruitDetailProps> = ({ fruit, onClose }) => {
  return (
    <div className="fruit-detail-overlay">
      <div className="fruit-detail-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="fruit-detail-content">
          <div className="fruit-detail-image">
            <img src={fruit.image} alt={fruit.name} />
            <span className="season-tag">{fruit.season}</span>
          </div>
          
          <div className="fruit-detail-info">
            <h1>{fruit.name}</h1>
            <div className="price-tag">¥{fruit.price}/{fruit.unit}</div>
            
            <div className="detail-section">
              <h2>商品介绍</h2>
              <p>{fruit.longDescription}</p>
            </div>
            
            <div className="detail-section">
              <h2>营养成分</h2>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="label">热量</span>
                  <span className="value">{fruit.nutrition.calories}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">糖分</span>
                  <span className="value">{fruit.nutrition.sugar}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">膳食纤维</span>
                  <span className="value">{fruit.nutrition.fiber}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">维生素C</span>
                  <span className="value">{fruit.nutrition.vitaminC}</span>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h2>商品信息</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">产地</span>
                  <span className="value">{fruit.origin}</span>
                </div>
                <div className="info-item">
                  <span className="label">采摘时间</span>
                  <span className="value">{fruit.harvestTime}</span>
                </div>
                <div className="info-item">
                  <span className="label">储存建议</span>
                  <span className="value">{fruit.storageGuide}</span>
                </div>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="add-to-cart">加入购物车</button>
              <button className="buy-now">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitDetail; 