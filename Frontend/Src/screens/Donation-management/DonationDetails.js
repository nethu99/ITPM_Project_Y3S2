import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.donation.module.css";

const DonationDetails = () => {
  const [donationDetails, setDonationDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
        .get(`http://localhost:8000/donations/${id}`)
        .then((res) => {
          console.log(res.data);
          setDonationDetails(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong. Please check the console for more details.");
        });
  }, [id]);

  const deleteDonation = () => {
    axios
        .delete(`http://localhost:8000/donations/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          alert("Donation Deleted Successfully");
          // navigate("/dashboard/inquiries");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong. Please check the console for more details.");
        });
  };

  return (
      <section className="container py-5 h-100">
        <div className="row d-flex h-100">
          <h2 style={{ textAlign: "left" }}>{donationDetails.donorName}</h2>
          <div className="d-flex justify-content-between">
            <h5>Donation Details</h5>
            <div>
              <Link to={`/dashboard/donations/update/${donationDetails._id}`}>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                    height="25"
                    alt="Edit Icon"
                    loading="lazy"
                />
              </Link>
              <Link onClick={() => deleteDonation()} style={{ marginLeft: "10px" }}>
                <img
                    src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
                    height="25"
                    alt="Delete Icon"
                    loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="card-body text-center">
            <form>
              <hr className="mb-4" style={{ opacity: "0.15" }} />

              <div className="form-group mb-4">
                <label htmlFor="projectName" className="mb-2 text-muted" style={{ float: "left" }}>
                  Project Name:
                </label>
                <input
                    type="text"
                    id="projectName"
                    className="form-control"
                    name="projectName"
                    value={donationDetails.projectName}
                    disabled
                />
              </div>

              {/* ... Other form fields ... */}

              <div className="form-group mb-4">
                <label htmlFor="donationCost" className="mb-2 text-muted" style={{ float: "left" }}>
                  Donation Amount:
                </label>
                <input
                    type="text"
                    id="donationCost"
                    className="form-control"
                    name="donationCost"
                    value={donationDetails.donationCost}
                    disabled
                />
              </div>



              <div className="form-group mb-4">
                <label htmlFor="receiptFile" className="mb-2 text-muted" style={{ float: "left" }}>
                  Receipt File:
                </label>
                <input
                    type="file"
                    id="receiptFile"
                    className="form-control"
                    name="receiptFile"
                    disabled
                />
                {donationDetails.receiptFile && (
                    <p>Uploaded File: {donationDetails.receiptFile}</p>
                )}
              </div>



              <div className="form-group mb-4">
                <label htmlFor="date" className="mb-2 text-muted" style={{ float: "left" }}>
                  Donation Date:
                </label>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    name="date"
                    value={donationDetails.date}
                    disabled
                />
              </div>


              <div className="form-group mb-4">
                <label htmlFor="time" className="mb-2 text-muted" style={{ float: "left" }}>
                  Donation Time:
                </label>
                <input
                    type="time"
                    id="time"
                    className="form-control"
                    name="time"
                    value={donationDetails.time}
                    disabled
                />
              </div>


              <div className="form-group mb-4">
                <label htmlFor="referenceNumber" className="mb-2 text-muted" style={{ float: "left" }}>
                  Reference Number:
                </label>
                <input
                    type="referenceNumber"
                    id="referenceNumber"
                    className="form-control"
                    name="time"
                    value={donationDetails.referenceNumber}
                    disabled
                />
              </div>
              {/* ... Remaining form fields ... */}

              <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

              <div className={styles.btn_box}>
                <button
                    className={styles.btn}
                    style={{ backgroundColor: "#333" }}
                    onClick={() => {
                      navigate("/dashboard/inquiries");
                    }}
                >
                  {"<"} Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default DonationDetails;
