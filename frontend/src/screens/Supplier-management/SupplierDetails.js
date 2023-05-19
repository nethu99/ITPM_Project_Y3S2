import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.supplier.module.css";

const SupplierDetails = () => {
  const [supplierDetails, setSupplierDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/suppliers/${id}`)
      .then((res) => {
        console.log(res.data);
        setSupplierDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, [id]);

  const deleteSupplier = () => {
    axios
      .delete(`http://localhost:8000/suppliers/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Project Deleted Successfully");
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
        <h2 style={{ textAlign: "left", padding: "0px" }}>
          {supplierDetails.projectName}
        </h2>
        <div
          className="d-flex justify-content-between"
          style={{ padding: "0px" }}
        >
          <h5>Supplier Details</h5>
          <div>
            <Link to={`/dashboard/suppliers/update/${supplierDetails._id}`}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                height="25"
                alt="Edit Icon"
                loading="lazy"
              />
            </Link>
            <Link
              onClick={() => deleteSupplier()}
              style={{ marginLeft: "10px" }}
            >
              <img
                src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
                height="25"
                alt="delete Icon"
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
                defaultValue={supplierDetails.projectName}
                disabled
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
                defaultValue={supplierDetails.supplierName}
                disabled
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
                defaultValue={supplierDetails.organization}
                disabled
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
                defaultValue={supplierDetails.suppliedAmount}
                disabled
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
                value={supplierDetails.details}
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
export default SupplierDetails;
