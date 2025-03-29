import React, { useState } from 'react';
import './FruitsPage.css';

interface Fruit {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  season: string;
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
    season: '秋季'
  },
  {
    id: 2,
    name: '阳光葡萄',
    category: '葡萄',
    price: 39.9,
    unit: '斤',
    description: '果肉饱满，清甜多汁，皮薄易剥',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '夏季'
  },
  {
    id: 3,
    name: '黄金梨',
    category: '梨',
    price: 19.9,
    unit: '斤',
    description: '皮薄肉厚，香甜可口，水分充足',
    image: 'https://images.unsplash.com/photo-1543253687-cddc5e6c3e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '秋季'
  },
  {
    id: 4,
    name: '草莓',
    category: '浆果',
    price: 49.9,
    unit: '斤',
    description: '鲜红诱人，香甜可口，富含维生素C',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '春季'
  },
  {
    id: 5,
    name: '水蜜桃',
    category: '桃',
    price: 35.9,
    unit: '斤',
    description: '果肉细腻，汁多味甜，香气浓郁',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: '夏季'
  }
];

const categories = ['全部', '苹果', '葡萄', '梨', '浆果', '桃'];
const seasons = ['全部', '春季', '夏季', '秋季', '冬季'];

const FruitsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedSeason, setSelectedSeason] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFruits = fruits.filter(fruit => {
    const matchesCategory = selectedCategory === '全部' || fruit.category === selectedCategory;
    const matchesSeason = selectedSeason === '全部' || fruit.season === selectedSeason;
    const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fruit.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSeason && matchesSearch;
  });

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
          <div key={fruit.id} className="fruit-card">
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
    </div>
  );
};

export default FruitsPage; 