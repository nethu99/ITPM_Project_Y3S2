import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.inquiry.module.css";

const InquiryDetails = () => {
  const [inquiryDetails, setInquiryDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/inquiries/${id}`)
      .then((res) => {
        console.log(res.data);
        setInquiryDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, [id]);

  const deleteInquiry = () => {
    axios
      .delete(`http://localhost:8000/inquiries/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Inquiry Deleted Successfully");
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
        <h2 style={{ textAlign: "left" }}>{inquiryDetails.projectName}</h2>
        <div className="d-flex justify-content-between">
          <h5>Inquiry Details</h5>
          <div>
            <Link to={`/dashboard/inquiries/update/${inquiryDetails._id}`}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                height="25"
                alt="Edit Icon"
                loading="lazy"
              />
            </Link>
            <Link
              onClick={() => deleteInquiry()}
              style={{ marginLeft: "20px" }}
            >
              <img
                src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
                height="25"
                alt="Edit Icon"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="card-body text-center">
          <form>
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
                value={inquiryDetails.projectName}
                disabled
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
                value={inquiryDetails.name}
                disabled
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
                value={inquiryDetails.contactNo}
                disabled
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
                value={inquiryDetails.subject}
                disabled
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
                value={inquiryDetails.inquiry}
                disabled
              ></textarea>
            </div>

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <div className={styles.btn_box}>
              <button
                className={styles.btn1}
                style={{ backgroundColor: "#333" }}
                onClick={() => {
                  navigate("/dashboard/inquiries");
                }}
              >
                {"<"} Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default InquiryDetails;
