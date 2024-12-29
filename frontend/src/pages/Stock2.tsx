import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header';
import p1 from '../assets/sofa.jpg';
import p2 from '../assets/table.jpg';
import p3 from '../assets/chair.jpg';
import p4 from '../assets/wardrobe.jpg';
import back from '../assets/back.png';
import Searchbar from '../components/searchbar';
import Card from '../components/card'
import '../components/card2.css';


const Stock2: React.FC = () => {
  const navigate = useNavigate();
  const handleNext3Click =() => {
    navigate("/Stock3");
  }
  return (
    <div>
      <Header />
      <Searchbar />

      <a href="/" style={{ position: "absolute", top:"100px", right: "1400px" }}>
        <img style={{ width: "50px", height: "auto" }} src={back} />
      </a>

      <h1 style={{ marginTop: "150px", marginLeft: "-50px" }}>กรุณาเลือกสินค้า</h1>
        
      <div className="product-grid2">
      <button onClick={handleNext3Click}className="product-card2">
        <img className="product-card-img2" src={p1} alt="โซฟา 3 ที่นั่ง" />
        <div className="product-content2">
        <h2 className="product-title2">โซฟา 3 ที่นั่ง รุ่น Junie</h2>
        <p className="product-description2">
            โซฟา 3 ที่นั่ง รุ่น Junie หุ้มด้วยผ้านำเข้าจากต่างประเทศ นุ่มสบาย ไม่หดตัว 
            อายุการใช้งานทนทาน แข็งแรง ทนทาน ดีไซน์ทันสมัยและสีสันแตกต่าง
        </p>
        </div>
        </button>
      <button onClick={handleNext3Click} className="product-card2">
        <img className="product-card-img2" src={p3} alt="เก้าอี้หวาย" />
        <div className="product-content2">
        <h2 className="product-title2">เก้าอี้หวาย</h2>
        <p className="product-description2">
        สานด้วยเชือกปอ คุณภาพดี โครงสร้างไม้สัก(Teak Wood) มีน้ำหนักเบา แข็งแรง
        </p>
        </div>
        </button>
      <button onClick={handleNext3Click} className="product-card2">
        <img className="product-card-img2" src={p2} alt="YUKI TABLE" />
        <div className="product-content2">
        <h2 className="product-title2">YUKI TABLE</h2>
        <p className="product-description2">
        โต๊ะกลางสไตล์ญี่ปุ่น รุ่น YUKI ผลิตจากไม้ยางพาราเกรด A ส่วนขาผลิตจากไม้ท่อนทั้งแท่งขนาดใหญ่ แข็งแรง ทนทาน เคลือบตามมาตรฐานการส่งออก
        </p>
        </div>
        </button>
      <button onClick={handleNext3Click} className="product-card2">
        <img className="product-card-img2" src={p4} alt="Inhome Furniture" />
        <div className="product-content2">
        <h2 className="product-title2">ตู้เสื้อผ้า 2 บาน</h2>
        <p className="product-description2">
        ตู้เสื้อผ้า 2 บาน ทำจากไม้ปาร์ติเกิ้ลบอร์ด ปิดผิวเมลามีน (ลายหินอ่อน) และฟอยล์หนา (ลายไม้) เป็นน็อคดาวน์เฟอร์นิเจอร์ สามารถถอดประกอบได้
        </p>
        </div>
        </button>
    </div>
    </div>
  );
};

export default Stock2;
