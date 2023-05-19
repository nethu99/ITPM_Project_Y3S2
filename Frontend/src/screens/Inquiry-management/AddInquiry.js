import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.inquiry.module.css";

const AddInquiry = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8000/inquiries/new", formData)
      .then((res) => {
        console.log(res);
        alert("Inquiry Added Successfully");
        navigate("/dashboard/inquiries");
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
            <h2 className="mb-4">New Inquiry</h2>
            <hr className="mb-4" style={{ opacity: "0.15" }} />

            {/* <div className="form-group mb-4">
              <label
                htmlFor="productCategory"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Project Category:
              </label>
              <select
                id="productCategory"
                className="form-select"
                placeholder="Select Category"
                name="productCategory"
              >
                <option value="">Select Category</option>
                <option value="solar-panels">option1</option>
                <option value="inverters">option 2</option>
                <option value="home-appliances">option 3</option>
                <option value="other">Other</option>
              </select>
            </div> */}

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
                htmlFor="name"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                defaultValue={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="contactNo"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Contact Number:
              </label>
              <input
                type="text"
                id="contactNo"
                className="form-control"
                name="contactNo"
                defaultValue={formData.contactNo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="subject"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                className="form-control"
                name="subject"
                defaultValue={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="inquiry"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Inquiry:
              </label>
              <textarea
                id="inquiry"
                className="form-control"
                name="inquiry"
                rows="4"
                required
                value={formData.inquiry}
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
export default AddInquiry;
