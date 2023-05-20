import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.donation.module.css";

const UpdateDonation = () => {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/donations/${id}`)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8000/donations/update/${formData._id}`, formData)
      .then((res) => {
        console.log(res);
        alert("Donation Updated Successfully");
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
            <h2 className="mb-4">Update Donation Details</h2>
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
                  defaultValue={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="projectCost"
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
                Payment Reference Number:
              </label>
              <input
                type="number"
                id="referenceNumber"
                className="form-control"
                name="referenceNumber"
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
              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default UpdateDonation;
