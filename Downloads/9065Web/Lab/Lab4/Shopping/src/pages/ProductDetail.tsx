import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  // 模拟产品数据，后续可以通过 API 动态获取
  const [product, setProduct] = useState({
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300/ff7f7f",
    ],
    name: "Sample Product",
    price: "$199.99",
    stock: 10,
    details: "This is a great product with lots of features.",
  });

  // 加入购物车事件
  const handleAddToCart = () => {
    alert(`Added ${product.name} to the cart!`);
  };

  return (
    <div className="product-detail">
      {/* 上方布局：轮播图 + 产品信息 */}
      <div className="top-section">
        {/* 图片轮播 */}
        <div className="carousel-container">
          <div className="carousel">
            {product.images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* 产品信息 */}
        <div className="product-info-card">
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock > 0 ? `${product.stock} available` : "Out of stock"}</p>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* 下方布局：产品详情 */}
      <div className="product-details">
        <h3>Product Details</h3>
        <p>{product.details}</p>
      </div>
    </div>
  );
};

export default ProductDetail;