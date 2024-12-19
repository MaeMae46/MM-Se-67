import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import p1 from '../assets/sofa.jpg';
import p2 from '../assets/table.jpg';
import p3 from '../assets/chair.jpg';
import p4 from '../assets/wardrobe.jpg';
import back from '../assets/back.png';
import Searchbar from '../components/searchbar';
import Card from '../components/card'
import '../components/card3.css';


const Stock3: React.FC = () => {
  return (
    <div>
      <Header />

      <a href="/Stock2" style={{ position: "absolute", top:"100px", right: "1400px" }}>
        <img style={{ width: "50px", height: "auto" }} src={back} />
      </a>

      <div className="product-card3">
        <img className="product-card-img3" src={p1} alt="โซฟา 3 ที่นั่ง" />
        <div className="product-content3">
        <h3 className="product-title3">โซฟา 3 ที่นั่ง รุ่น Junie</h3>
        <p className="product-description3">
            โซฟา 3 ที่นั่ง รุ่น Junie หุ้มด้วยผ้านำเข้าจากต่างประเทศ นุ่มสบาย ไม่หดตัว 
            อายุการใช้งานทนทาน แข็งแรง ทนทาน ดีไซน์ทันสมัยและสีสันแตกต่าง
        </p>
        </div>
      </div>

      <div className="card-container4">
  {/* การ์ดแสดงภาพ */}
  <div className="card4">
    <img src={p1} alt="sofa" className="card-image4" />
    <h3 className="card-title4">สีครีม</h3>
    <div className="card-actions4">
      <button className="edit-btn">แก้ไข</button>
      <button className="delete-btn">ลบ</button>
    </div>
  </div>

  {/* การ์ดเพิ่มภาพ */}
  <div className="card4">
  <a href="/Stock4">
  <div className="card add-card4">
    <div className="add-image4">
      <span>+</span>
    </div>
  </div>
  </a>
  <h3 className="card-title4"></h3>
  </div>
</div>

        
      
    </div>
  );
};

export default Stock3;
