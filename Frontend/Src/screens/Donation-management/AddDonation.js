import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.donation.module.css";

const AddDonation = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8000/donations/new", formData)
      .then((res) => {
        console.log(res);
        alert("Donation Added Successfully");
        navigate("/dashboard/donations");
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
            <h2 className="mb-4">New Donation</h2>
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
                required
                defaultValue={formData.projectName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="donorName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Donor Name:
              </label>
              <input
                type="text"
                id="donorName"
                className="form-control"
                name="donorName"
                required
                defaultValue={formData.donorName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="donorNIC"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Donor NIC:
              </label>
              <input
                type="text"
                id="donorNIC"
                className="form-control"
                name="donorNIC"
                required
                defaultValue={formData.donorNIC}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4 d-flex">
              <div className="d-flex" style={{ flexDirection: "column" }}>
                <label
                  htmlFor="date"
                  className="mb-2 text-muted"
                  style={{
                    alignSelf: "start",
                  }}
                >
                  Donation Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="date"
                  required
                  defaultValue={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div
                className="d-flex"
                style={{ flexDirection: "column", marginLeft: "2rem" }}
              >
                <label
                  htmlFor="time"
                  className="mb-2 text-muted"
                  style={{
                    alignSelf: "start",
                  }}
                >
                 Donation Time:
                </label>
                <input
                  type="time"
                  id="time"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="time"
                  required
                  defaultValue={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="donationCost"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
               Donation Amount:
              </label>
              <input
                type="number"
                id="donationCost"
                className="form-control"
                name="donationCost"
                required
                defaultValue={formData.donationCost}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="referenceNumber"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Payment Reference number:
              </label>
              <input
                type="number"
                id="referenceNumber"
                className="form-control"
                name="referenceNumber"
                required
                defaultValue={formData.referenceNumber}
                onChange={handleChange}
              />
            </div>



            <div className="form-group mb-4">
              <label
                htmlFor="description"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Description:
              </label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                rows="4"
                required
                value={formData.description}
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
export default AddDonation;
