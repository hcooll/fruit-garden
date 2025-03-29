import React, { useState } from 'react';
import './FruitsPage.css';
import FruitDetail from './FruitDetail';

interface Fruit {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  season: string;
  longDescription: string;
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

const fruits: Fruit[] = [
  {
    id: 1,
    name: '红富士苹果',
    category: '苹果',
    price: 29.9,
    unit: '斤',
    description: '新鲜采摘，甜脆可口，果肉细腻',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '秋季',
    longDescription: '红富士苹果产自阳光充足的山地果园，采用有机种植方式，果实颜色红润，口感脆甜。果肉细腻多汁，富含维生素C和膳食纤维，是一款老少皆宜的健康水果。',
    nutrition: {
      calories: '52千卡/100g',
      sugar: '10.4g/100g',
      fiber: '2.4g/100g',
      vitaminC: '4.6mg/100g'
    },
    storageGuide: '常温可存放3-5天，冰箱保存可延长至2周',
    origin: '山东烟台',
    harvestTime: '9月-11月'
  },
  {
    id: 2,
    name: '阳光葡萄',
    category: '葡萄',
    price: 39.9,
    unit: '斤',
    description: '果肉饱满，清甜多汁，皮薄易剥',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '夏季',
    longDescription: '阳光葡萄采用架式种植，充分接受阳光照射，果粒饱满圆润，皮薄肉厚，口感清甜。富含多种维生素和矿物质，是夏季解暑的绝佳选择。',
    nutrition: {
      calories: '43千卡/100g',
      sugar: '15.5g/100g',
      fiber: '0.9g/100g',
      vitaminC: '3.2mg/100g'
    },
    storageGuide: '冰箱保存可存放1-2周',
    origin: '新疆吐鲁番',
    harvestTime: '7月-8月'
  },
  {
    id: 3,
    name: '黄金梨',
    category: '梨',
    price: 19.9,
    unit: '斤',
    description: '皮薄肉厚，香甜可口，水分充足',
    image: 'https://images.unsplash.com/photo-1543253687-cddc5e6c3e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '秋季',
    longDescription: '黄金梨果肉细腻，水分充足，口感清甜。富含膳食纤维和维生素，具有润肺止咳的功效。',
    nutrition: {
      calories: '42千卡/100g',
      sugar: '9.5g/100g',
      fiber: '3.1g/100g',
      vitaminC: '4.3mg/100g'
    },
    storageGuide: '常温可存放5-7天，冰箱保存可延长至2周',
    origin: '河北石家庄',
    harvestTime: '8月-10月'
  },
  {
    id: 4,
    name: '草莓',
    category: '浆果',
    price: 49.9,
    unit: '斤',
    description: '鲜红诱人，香甜可口，富含维生素C',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '春季',
    longDescription: '草莓色泽鲜艳，果肉细腻，口感香甜。富含维生素C和抗氧化物质，是春季养生佳品。',
    nutrition: {
      calories: '32千卡/100g',
      sugar: '4.9g/100g',
      fiber: '2.0g/100g',
      vitaminC: '58.8mg/100g'
    },
    storageGuide: '冰箱保存可存放3-5天',
    origin: '浙江杭州',
    harvestTime: '3月-5月'
  },
  {
    id: 5,
    name: '水蜜桃',
    category: '桃',
    price: 35.9,
    unit: '斤',
    description: '果肉细腻，汁多味甜，香气浓郁',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '夏季',
    longDescription: '水蜜桃果肉细腻多汁，香气浓郁，口感甜美。富含维生素A和膳食纤维，是夏季解暑的优质水果。',
    nutrition: {
      calories: '39千卡/100g',
      sugar: '8.4g/100g',
      fiber: '1.5g/100g',
      vitaminC: '6.6mg/100g'
    },
    storageGuide: '常温可存放3-4天，冰箱保存可延长至1周',
    origin: '江苏无锡',
    harvestTime: '6月-8月'
  }
];

const categories = ['全部', '苹果', '葡萄', '梨', '浆果', '桃'];
const seasons = ['全部', '春季', '夏季', '秋季', '冬季'];

const FruitsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedSeason, setSelectedSeason] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

  const filteredFruits = fruits.filter(fruit => {
    const matchesCategory = selectedCategory === '全部' || fruit.category === selectedCategory;
    const matchesSeason = selectedSeason === '全部' || fruit.season === selectedSeason;
    const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fruit.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSeason && matchesSearch;
  });

  const handleFruitClick = (fruit: Fruit) => {
    setSelectedFruit(fruit);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedFruit(null);
  };

  return (
    <div className="fruits-page">
      <div className="fruits-header">
        <h1>果园水果</h1>
        <p>探索我们果园的优质水果，每一颗都经过精心培育</p>
      </div>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="搜索水果..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-options">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="fruits-grid">
        {filteredFruits.map(fruit => (
          <div 
            key={fruit.id} 
            className="fruit-card" 
            onClick={() => handleFruitClick(fruit)}
          >
            <div className="fruit-image" style={{backgroundImage: `url(${fruit.image})`}}></div>
            <div className="fruit-info">
              <h3>{fruit.name}</h3>
              <p className="description">{fruit.description}</p>
              <div className="fruit-meta">
                <span className="season">{fruit.season}</span>
                <span className="price">¥{fruit.price}/{fruit.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDetail && selectedFruit && (
        <FruitDetail 
          fruit={selectedFruit}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default FruitsPage; 