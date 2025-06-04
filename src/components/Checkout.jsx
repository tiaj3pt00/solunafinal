import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Checkout = () => {
  const { cartItems } = useLocation().state || { cartItems: [] };
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://tiaj3pt00.pythonanywhere.com/static/images/";

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.product_cost * item.quantity,
    0
  );

  // Auto-hide success and error messages after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [success, error]);

  const payNow = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we complete the payment");

    try {
      const data = new FormData();
      data.append("amount", totalCost);
      data.append("phone", phone);

      const response = await axios.post(
        "https://tiaj3pt00.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setLoading("");
      setSuccess(response.data.message);
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row mt-4 p-3">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">
            <h3 className="text-info">Your Cart Items</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="mb-3 border-bottom pb-3">
                <img
                  src={img_url + item.product_photo}
                  alt={item.product_name}
                  className="img-thumbnail"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <div>
                  <strong>{item.product_name}</strong>
                  <p className="text-muted mb-1">{item.product_description}</p>
                  <p>
                    <b>KES {item.product_cost}</b> x {item.quantity} ={" "}
                    <b>KES {(item.product_cost * item.quantity).toFixed(2)}</b>
                  </p>
                </div>
              </div>
            ))}

            <div className="alert alert-info mt-4">
              <strong>Total Amount to Pay:</strong> KES {totalCost.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h2 className="text-info">Checkout</h2>

        <img
          src="images/mpesa.png"
          alt="MPESA Logo"
          style={{ height: "50px", marginBottom: "10px" }}
        />

        <h5 className="text-success">LIPA NA MPESA</h5>

        <form className="card shadow p-3" onSubmit={payNow}>
          <b className="text-success">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>

          {loading && (
            <div className="text-center my-2">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {success && (
            <div className="text-center my-2">
              <i className="bi bi-check-circle-fill text-success fs-1"></i>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Total Amount (KES)</label>
            <input
              type="number"
              value={totalCost}
              readOnly
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number (2547xxxxxxxx)</label>
            <input
              type="number"
              placeholder="Enter the phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <button className="btn btn-success w-100">
            <b>Pay Now</b>
          </button>
        </form>

        <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
          * You will receive an MPESA prompt shortly. Ensure your phone is unlocked and has network coverage.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
