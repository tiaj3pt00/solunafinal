// Cart.jsx
import React from "react";

const Cart = ({ cartItems }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
          <h1>Soluna Jewelry</h1>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <cartItems size={24} />
            {cartItems > 0 && (
              <span style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px"
              }}>
                {cartItems}
              </span>
            )}
          </div>
        </nav>
      );
};

export default Cart;
