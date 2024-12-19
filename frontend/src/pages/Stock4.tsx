import React, { useState } from 'react';  
import styled from 'styled-components';
import Header from '../components/header';
import p1 from '../assets/sofa.jpg';
import back from '../assets/back.png';
import '../components/card4.css';

const Stock4: React.FC = () => {
    
    const handleSave = () => {
        alert('ข้อมูลของคุณถูกบันทึกเรียบร้อย!');
      };


  // State สำหรับควบคุมจำนวนสินค้าและราคา
  const [quantity, setQuantity] = useState(1); // ค่าจำนวนเริ่มต้นที่ 1
  const [price, setPrice] = useState(1);       // ค่าราคาเริ่มต้นที่ 1


  // ฟังก์ชันอัปเดตค่าจากการกรอกข้อมูล
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // ไม่ให้ค่าต่ำกว่า 1
    setQuantity(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // ไม่ให้ค่าต่ำกว่า 1
    setPrice(value);
  };

  return (
    <div>
      <Header />

      {/* ปุ่มย้อนกลับ */}
      <a href="/Stock3" style={{ position: "absolute", top:"100px", right: "1400px" }}>
        <img style={{ width: "50px", height: "auto" }} src={back} alt="back" />
      </a>

      <h1 style={{ marginTop: "80px", marginLeft: "250px" }}>เพิ่มรายการสินค้า</h1>

      {/* การ์ดสินค้า */}
      <div className="product-card5">
        <img className="product-card-img5" src={p1} alt="โซฟา 3 ที่นั่ง" />
        <div className="product-content5">
          <h3 className="product-title5">โซฟา 3 ที่นั่ง รุ่น Junie</h3>
          <p className="product-description5">
            โซฟา 3 ที่นั่ง รุ่น Junie หุ้มด้วยผ้านำเข้าจากต่างประเทศ นุ่มสบาย ไม่หดตัว 
            อายุการใช้งานทนทาน แข็งแรง ทนทาน ดีไซน์ทันสมัยและสีสันแตกต่าง
          </p>
        </div>
      </div>

      {/* ฟอร์มเพิ่มข้อมูล */}
      <div className="form-container">
        <div className="form-section">
          <label htmlFor="color">สี</label>
          <input type="text" id="color" className="input-field" />

          <label htmlFor="size">รูปร่าง/ขนาด</label>
          <input type="text" id="size" className="input-field" />

          {/* ส่วนควบคุมราคา */}
          <div className="quantity-container">
            <label htmlFor="price">ราคา</label>
            <label htmlFor="quantity">จำนวนสินค้าในคลัง</label>
        </div>
            <div className="quantity-container">
            <div className="quantity-box">
              
              <input
                type="number"
                min="1"
                value={price}
                onChange={handlePriceChange}
                className="input-field"
              />
              
            </div>
          

          {/* ส่วนควบคุมจำนวนสินค้า */}
          
            
            <div className="quantity-box">
              
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="input-field"
              />
              
            </div>
          </div>
        </div>

        {/* พื้นที่อัปโหลดรูปภาพ */}
        <div className="image-upload">
          <div className="upload-box">
            <span className="upload-icon">+</span>
          </div>
        </div>

        {/* ปุ่มบันทึกและยกเลิก */}
        <div className="button-section">
          <button className="cancel-btn">ยกเลิก</button>
          <button className="save-btn" onClick={handleSave}>บันทึก</button>
        </div>
      </div>
    </div>
  );
};

export default Stock4;
