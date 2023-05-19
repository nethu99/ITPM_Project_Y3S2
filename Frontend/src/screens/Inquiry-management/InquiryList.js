import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/inquiries/get/all")
      .then((res) => {
        console.log(res.data);
        setInquiries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, []);

  const deleteInquiry = (id) => {
    axios
      .delete(`http://localhost:8000/inquiries/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Inquiry Deleted Successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  };

  return (
    <>
      <section className="container py-5 h-100">
        <div className="row d-flex h-100">
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <h3 className="mb-4" style={{ textAlign: "left" }}>
                Inquiries List
              </h3>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn btn-primary"
                  style={{ height: "fit-content" }}
                  to={"/dashboard/inquiry/add"}
                >
                  Add Inquiry
                </Link>
              </div>
            </div>
            <hr className="mb-4" style={{ opacity: "0.15" }} />
            <div>
              {inquiries &&
                inquiries.map((inquiry, index) => (
                  <div className="row mb-3">
                    <div className="card mb-3 col-11  " key={inquiry._id}>
                      <div
                        className="card-body d-flex"
                        style={{ flexDirection: "column" }}
                      >
                        <h5
                          className="card-title"
                          style={{ width: "fit-content", textAlign: "left" }}
                        >
                          {inquiry.projectName}
                        </h5>
                        <p
                          className="card-subtitle mb-2 text-muted"
                          style={{ width: "fit-content", textAlign: "left" }}
                        >
                          {inquiry.inquiry}
                        </p>
                      </div>
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-primary"
                        to={`${inquiry._id}`}
                        style={{
                          margin: "0 auto",
                          marginTop: "30px",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InquiryList;
