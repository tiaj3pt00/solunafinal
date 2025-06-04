import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { FiUpload, FiImage, FiDollarSign, FiEdit2, FiCheckCircle } from "react-icons/fi";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const Addproduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCost, setProductCost] = useState("");
  const [productPhoto, setProductPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("ring");
  const [productMaterials, setProductMaterials] = useState([]);
  const fileInputRef = useRef(null);

  const categories = [
    { value: "ring", label: "Ring" },
    { value: "necklace", label: "Necklace" },
    { value: "bracelet", label: "Bracelet" },
    { value: "earring", label: "Earring" },
    { value: "other", label: "Other" },
  ];

  const materials = [
    "Gold",
    "Silver",
    "Platinum",
    "Diamond",
    "Pearl",
    "Gemstone",
    "Titanium",
  ];

  useEffect(() => {
    if (productPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(productPhoto);
    } else {
      setPreviewImage("");
    }
  }, [productPhoto]);

  const uploadProduct = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("product_name", productName);
      data.append("product_description", productDescription);
      data.append("product_cost", productCost);
      data.append("product_photo", productPhoto);
      data.append("category", selectedCategory);
      data.append("materials", JSON.stringify(productMaterials));

      const response = await axios.post(
        "https://tiaj3pt00.pythonanywhere.com/api/addproduct",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setSuccess(response.data.message);

      // Reset form
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto(null);
      setPreviewImage("");
      setSelectedCategory("ring");
      setProductMaterials([]);
      setStep(1);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || error.message);
    }
  };

  const handleMaterialToggle = (material) => {
    setProductMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #f9e7c0 100%)",
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div
          className="row justify-content-center"
          style={{ perspective: "1000px" }}
        >
          <div
            className="col-lg-8 col-md-10"
            style={{
              position: "relative",
            }}
          >
            {/* Progress Steps */}
            <div
              className="d-flex justify-content-between mb-5 position-relative"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`d-flex flex-column align-items-center ${
                    stepNumber < step ? "text-success" : ""
                  } ${stepNumber === step ? "text-primary" : "text-muted"}`}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center ${
                      stepNumber <= step ? "bg-primary" : "bg-light"
                    }`}
                    style={{
                      width: "40px",
                      height: "40px",
                      color: stepNumber <= step ? "white" : "#6c757d",
                      border: `2px solid ${
                        stepNumber <= step ? "#0d6efd" : "#dee2e6"
                      }`,
                      fontWeight: "bold",
                    }}
                  >
                    {stepNumber < step ? (
                      <FiCheckCircle size={20} />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <small className="mt-2 text-center" style={{ fontSize: "12px" }}>
                    {stepNumber === 1 && "Basic Info"}
                    {stepNumber === 2 && "Details"}
                    {stepNumber === 3 && "Media"}
                  </small>
                </div>
              ))}
              <div
                className="position-absolute bg-light"
                style={{
                  height: "4px",
                  width: "100%",
                  top: "20px",
                  zIndex: 1,
                }}
              >
                <div
                  className="bg-primary h-100"
                  style={{
                    width: `${((step - 1) / 2) * 100}%`,
                    transition: "width 0.4s ease",
                  }}
                ></div>
              </div>
            </div>

            {/* Form Card */}
            <motion.div
              className="card shadow-lg border-0 overflow-hidden"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: step === 2 ? 5 : step === 3 ? -5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                borderRadius: "20px",
                border: "none",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2
                    style={{
                      fontWeight: "700",
                      color: "#d4af37",
                      background: "linear-gradient(to right, #d4af37, #a67c00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "2.2rem",
                      marginBottom: "10px",
                    }}
                  >
                    {step === 1 && "Product Basics"}
                    {step === 2 && "Jewelry Details"}
                    {step === 3 && "Visual Showcase"}
                  </h2>
                  <p className="text-muted">
                    {step === 1 && "Tell us about your jewelry piece"}
                    {step === 2 && "Add specific details about the item"}
                    {step === 3 && "Upload beautiful images of your product"}
                  </p>
                </div>

                {/* Status Messages */}
                <div className="text-center mb-4">
                  {loading && (
                    <div className="d-flex align-items-center justify-content-center">
                      <div
                        className="spinner-border text-warning me-2"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span className="text-warning fw-bold">
                        Uploading your product...
                      </span>
                    </div>
                  )}
                  {success && (
                    <div className="alert alert-success alert-dismissible fade show">
                      {success}
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccess("")}
                      ></button>
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show">
                      {error}
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                      ></button>
                    </div>
                  )}
                </div>

                <form onSubmit={uploadProduct}>
                  {/* Step 1: Basic Information */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Product Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <FiEdit2 />
                          </span>
                          <input
                            type="text"
                            required
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="e.g., Golden Pearl Necklace"
                            className="form-control"
                            style={{
                              borderRadius: "0 8px 8px 0",
                              borderLeft: "none",
                              padding: "12px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Description
                        </label>
                        <textarea
                          required
                          value={productDescription}
                          onChange={(e) => setProductDescription(e.target.value)}
                          placeholder="Describe your product in detail..."
                          className="form-control"
                          rows={5}
                          style={{
                            borderRadius: "8px",
                            padding: "12px",
                            border: "1px solid #ced4da",
                          }}
                        ></textarea>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Product Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Category
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                          {categories.map((category) => (
                            <button
                              key={category.value}
                              type="button"
                              className={`btn ${
                                selectedCategory === category.value
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              }`}
                              onClick={() => setSelectedCategory(category.value)}
                              style={{
                                borderRadius: "20px",
                                padding: "8px 16px",
                                fontSize: "14px",
                              }}
                            >
                              {category.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Materials
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                          {materials.map((material) => (
                            <button
                              key={material}
                              type="button"
                              className={`btn ${
                                productMaterials.includes(material)
                                  ? "btn-warning"
                                  : "btn-outline-secondary"
                              }`}
                              onClick={() => handleMaterialToggle(material)}
                              style={{
                                borderRadius: "20px",
                                padding: "8px 16px",
                                fontSize: "14px",
                              }}
                            >
                              {material}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Price (KSH)
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <FiDollarSign />
                          </span>
                          <input
                            type="number"
                            required
                            value={productCost}
                            onChange={(e) => setProductCost(e.target.value)}
                            placeholder="Enter product price"
                            className="form-control"
                            style={{
                              borderRadius: "0 8px 8px 0",
                              borderLeft: "none",
                              padding: "12px",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Image Upload */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <label className="form-label fw-bold text-secondary">
                          Product Image
                        </label>
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="d-none"
                          accept="image/*"
                          onChange={(e) => setProductPhoto(e.target.files[0])}
                          required={step === 3}
                        />
                        <div
                          className="border rounded-3 p-4 text-center cursor-pointer"
                          onClick={triggerFileInput}
                          style={{
                            borderStyle: "dashed",
                            borderColor: previewImage
                              ? "transparent"
                              : "#d4af37",
                            backgroundColor: previewImage
                              ? "transparent"
                              : "rgba(212, 175, 55, 0.05)",
                            transition: "all 0.3s",
                            minHeight: "200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {previewImage ? (
                            <>
                              <img
                                src={previewImage}
                                alt="Preview"
                                className="img-fluid mb-3 rounded-3 shadow-sm"
                                style={{
                                  maxHeight: "250px",
                                  objectFit: "contain",
                                }}
                              />
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={triggerFileInput}
                              >
                                Change Image
                              </button>
                            </>
                          ) : (
                            <>
                              <FiImage
                                size={48}
                                className="mb-3"
                                color="#d4af37"
                              />
                              <h5 className="text-muted">
                                Click to upload product image
                              </h5>
                              <small className="text-muted">
                                Recommended size: 800x800px or larger
                              </small>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-5">
                    {step > 1 ? (
                      <button
                        type="button"
                        className="btn btn-outline-secondary px-4 py-2"
                        onClick={() => setStep(step - 1)}
                        style={{ borderRadius: "10px" }}
                      >
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        className="btn btn-primary px-4 py-2"
                        onClick={() => setStep(step + 1)}
                        style={{ borderRadius: "10px" }}
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success px-4 py-2"
                        disabled={loading}
                        style={{ borderRadius: "10px" }}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Uploading...
                          </>
                        ) : (
                          <>
                            <FiUpload className="me-2" />
                            Submit Product
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Addproduct;                          