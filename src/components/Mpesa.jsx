import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Makepayment = () => {
  //we can use the useLocation hook to get the details that have been passed from the get products component
  const { product } = useLocation().state || {};

  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Implement the function that will handle the pay now activity
  const payNow = async (e) => {
    //PRevent the site from reloading
    e.preventDefault();
    //set the loading hook with a message
    setLoading("Please wait as we complete the payment");

    try {
      //Create a new form data object
      const data = new FormData();

      //append the two details into the form data created
      data.append("amount", product.product_cost);
      data.append("phone", phone);
      //Access the post function in axios
      const response = await axios.post(
        "https://tiaj3pt00.pythonanywhere.com/api/mpesa_payment",
        data
      );

      //set the loading hook back to default
      setLoading("");

      //Update the success hook with the response form api
      setSuccess(response.data.message);

      //clear the phone number hook
      setPhone("");
    } catch (error) {
      //set the loading hook back to default
      setLoading("");
      //update the error hook with the error response
      setError(error.message);
    }
  };

  // console.log(product)
  //Specify the image url
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
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h1 className="text-info">Kes {product.product_cost}</h1>
        <p className="text-dark">{product.product_description}</p>
        <h5 className="text-success">LIPA NA MPESA</h5>
        <form className="card shadow p-2" onSubmit={payNow}>
          <b className="text-success">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>
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
          {/* {phone} */}
          <button className="btn btn-success">
            <b>Pay Now</b>
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Makepayment;
