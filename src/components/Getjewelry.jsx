import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";
import { FiShoppingCart, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { FaComments } from "react-icons/fa";

const Getproducts = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const img_url = "https://tiaj3pt00.pythonanywhere.com/static/images/";

  const fetchProducts = async () => {
    setLoading("Please wait as we get your products...");
    try {
      const response = await axios.get(
        "https://tiaj3pt00.pythonanywhere.com/api/getproducts"
      );
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered_products = products.filter(
    (item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase()) ||
      item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // Cart functions
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product_id === product.product_id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product_cost * item.quantity,
    0
  );

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div
      style={{
        backgroundColor: "#f5fbff",
        minHeight: "100vh",
        paddingBottom: "50px",
        position: "relative",
      }}
    >
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        style={{
          position: "fixed",
          right: "20px",
          top: "20px",
          zIndex: 1000,
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
        }}
      >
        <FiShoppingCart size={24} />
        {cartItemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#ff6b6b",
              color: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Chatbot Button */}
      <div className="chatbot-button-container" style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: 1000,
      }}>
        <button
          className="btn btn-info chatbot-button"
          onClick={() => navigate("/chatbot")}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 20px",
            borderRadius: "30px",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            backgroundColor: "#28a745",
            border: "none",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
        >
          <FaComments className="me-2" />
          Chat with Luna, your virtual assistant
        </button>
      </div>

      {/* Cart Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isCartOpen ? 0 : "-400px",
          width: "400px",
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
          zIndex: 1001,
          transition: "right 0.3s ease-in-out",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #eee",
            paddingBottom: "15px",
            flexShrink: 0,
          }}
        >
          <h3 style={{ color: "#0077b6", margin: 0 }}>Your Shopping Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#666",
            }}
          >
            <FiX />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "60%",
              color: "#666",
              flexGrow: 1,
            }}
          >
            <FiShoppingCart size={48} style={{ marginBottom: "15px" }} />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div style={{ 
              overflowY: "auto", 
              flexGrow: 1,
              marginBottom: "20px",
              maxHeight: "calc(100vh - 200px)",
            }}>
              {cartItems.map((item) => (
                <div
                  key={item.product_id}
                  style={{
                    display: "flex",
                    marginBottom: "15px",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginRight: "15px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        margin: "0 0 5px 0",
                        color: "#0077b6",
                        fontSize: "16px",
                      }}
                    >
                      {item.product_name.slice(0, 30)}
                    </h5>
                    <p style={{ margin: "0 0 10px 0", color: "#666" }}>
                      KSH {item.product_cost}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                        style={{
                          background: "#f0f0f0",
                          border: "none",
                          width: "30px",
                          height: "30px",
                          borderRadius: "4px 0 0 4px",
                          cursor: "pointer",
                        }}
                      >
                        <FiMinus size={14} />
                      </button>
                      <span
                        style={{
                          padding: "0 10px",
                          background: "#f8f9fa",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "30px",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                        style={{
                          background: "#f0f0f0",
                          border: "none",
                          width: "30px",
                          height: "30px",
                          borderRadius: "0 4px 4px 0",
                          cursor: "pointer",
                        }}
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ff6b6b",
                      cursor: "pointer",
                      alignSelf: "flex-start",
                    }}
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid #eee",
                paddingTop: "15px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Total:</span>
                <span style={{ fontWeight: "bold", color: "#0077b6" }}>
                  KSH {cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  navigate("/checkout", { state: { cartItems } });
                  setIsCartOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#0077b6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#005f8c")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b6")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        />
      )}

      <ImageCarousel />
      <div className="container py-4">
        <h2
          className="text-center mb-4"
          style={{ color: "#0077b6", fontWeight: "bold" }}
        >
          Available Jewelry
        </h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="search"
              placeholder="Search for any product"
              className="form-control rounded-pill shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 20px",
                border: "2px solid #ffd700",
                backgroundColor: "#e6f0ff",
              }}
            />
          </div>
        </div>

        {loading && <h5 className="text-center text-info">{loading}</h5>}
        {error && <h5 className="text-center text-danger">{error}</h5>}

        <div className="row">
          {filtered_products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card shadow-sm h-100"
                style={{
                  border: "1px solid #ffd700",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                  backgroundColor: "#ffffff",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5
                      className="card-title"
                      style={{ color: "#0077b6", fontWeight: "bold" }}
                    >
                      {product.product_name.slice(0, 25)}
                    </h5>
                    <p className="card-text text-muted">
                      {product.product_description.slice(0, 60)}...
                    </p>
                  </div>
                  <div>
                    <p className="text-dark">
                      <b style={{ color: "#b08900" }}>
                        KSH {product.product_cost}
                      </b>
                    </p>
                    <div className="d-flex gap-2">
                      <button
                        className="btn flex-grow-1"
                        style={{
                          backgroundColor: "#0077b6",
                          color: "white",
                          borderRadius: "30px",
                          fontWeight: "bold",
                        }}
                        onClick={() =>
                          navigate("/mpesapayment", { state: { product } })
                        }
                      >
                        Buy Now
                      </button>
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#ffd700",
                          color: "#333",
                          borderRadius: "30px",
                          fontWeight: "bold",
                          minWidth: "40px",
                        }}
                        onClick={() => addToCart(product)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
// 

export default Getproducts;