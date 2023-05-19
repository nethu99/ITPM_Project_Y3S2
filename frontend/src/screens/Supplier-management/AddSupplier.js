import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.supplier.module.css";

const AddSupplier = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8000/suppliers/new", formData)
      .then((res) => {
        console.log(res);
        alert("Supplier Added Successfully");
        navigate("/dashboard/suppliers");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  };

  return (
    <section className="container py-5 h-100">
      <div className="row d-flex h-100">
        <div className="card-body text-center">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">New Supplier</h2>
            <hr className="mb-4" style={{ opacity: "0.15" }} />

            <div className="form-group mb-4">
              <label
                htmlFor="projectName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Project Name:
              </label>
              <input
                type="text"
                id="projectName"
                className="form-control"
                name="projectName"
                defaultValue={formData.projectName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="supplierName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Supplier Name:
              </label>
              <input
                type="text"
                id="supplierName"
                className="form-control"
                name="supplierName"
                defaultValue={formData.supplierName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="organization"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Organization:
              </label>
              <input
                type="text"
                id="organization"
                className="form-control"
                name="organization"
                defaultValue={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="suppliedAmount"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Supplied Amount:
              </label>
              <input
                type="number"
                id="suppliedAmount"
                className="form-control"
                name="suppliedAmount"
                defaultValue={formData.suppliedAmount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="details"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Details:
              </label>
              <textarea
                id="details"
                className="form-control"
                name="details"
                rows="4"
                required
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <div className={styles.btn_box}>
              <button
                className={styles.btn1}
                style={{ backgroundColor: "#333" }}
                onClick={() => {}}
              >
                Clear
              </button>

              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddSupplier;
