import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Header from '../components/header';
import p1 from '../assets/sofa.jpg';
import p2 from '../assets/table.jpg';
import p3 from '../assets/chair.jpg';
import promotion from '../assets/promotion.png';
import Searchbar from '../components/searchbar';
import Card from '../components/card1'


const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Stock1: React.FC = () => {
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // เรียก API เพื่อดึงข้อมูลสินค้า
        axios.get("http://localhost:8000/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

  return (
    <div>
      <Header />
      <Searchbar />

      <h1 style={{ marginTop: "150px" }}></h1>
      <a href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "700px", height: "auto" }} src={promotion} alt="promotion" />
      </a>      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Card title="โซฟา 3 ที่นั่ง รุ่น Junie" price={8950} image={p1} />
        <Card title="YUKI TABLE" price={8700} image={p2} />
        <Card title="เก้าอี้หวาย" price={8500} image={p3} />
      </div>
    </div>
  );
};

export default Stock1;
