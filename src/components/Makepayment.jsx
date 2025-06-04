import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Makepayment = () => {
  const { product } = useLocation().state || {};

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
      data.append("amount", product.product_cost);
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

  const img_url = "https://tiaj3pt00.pythonanywhere.com/static/images/";

  return (
    <div className="row mt-4 p-3">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">
            <img
              src={img_url + product.product_photo}
              alt=""
              className="w-50 product_img"
            />
            <h3 className="text-info">{product.product_name}</h3>

            {/* Payment Summary */}
            <div className="alert alert-info mt-3">
              <strong>You're purchasing:</strong><br />
              {product.product_name} <br />
              <strong>Amount:</strong> KES {product.product_cost}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h1 className="text-info">Kes {product.product_cost}</h1>
        <p className="text-dark">{product.product_description}</p>

        {/* MPESA Branding */}
        <img
          src="images/mpesa.png"
          alt="MPESA Logo"
          style={{ height: "50px", marginBottom: "10px" }}
        />

        <h5 className="text-success">LIPA NA MPESA</h5>

        <form className="card shadow p-2" onSubmit={payNow}>
          <b className="text-success">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>

          {/* Spinner when loading */}
          {loading && (
            <div className="text-center my-2">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Success checkmark */}
          {success && (
            <div className="text-center my-2">
              <i className="bi bi-check-circle-fill text-success fs-1"></i>
            </div>
          )}

          <input
            type="number"
            value={product.product_cost}
            readOnly
            className="form-control"
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter the phone number 2547xxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
          />{" "}
          <br /> <br />
          <button className="btn btn-success">
            <b>Pay Now</b>
          </button>
        </form>

        {/* Disclaimer / Info Note */}
        <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
          * You will receive an MPESA prompt shortly. Ensure your phone is unlocked and has network coverage.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Makepayment;
