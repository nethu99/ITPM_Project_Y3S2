import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/donations/get/all")
      .then((res) => {
        console.log(res.data);
        setDonations(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, []);

  const deleteDonation = (id) => {
    axios
      .delete(`http://localhost:8000/donations/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Donation Deleted Successfully");
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
                Donation List
              </h3>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn btn-primary"
                  style={{ height: "fit-content" }}
                  to={"/dashboard/donation/add"}
                >
                  Add Donation
                </Link>
              </div>
            </div>
            <hr className="mb-4" style={{ opacity: "0.15" }} />
            <div>
              {donations &&
                donations.map((donation) => (
                  <div className="row">
                    <div className="card mb-3 col-11  " key={donation._id}>
                      <div className="card-body d-flex justify-content-between">
                        <h5
                          className="card-title"
                          style={{
                            width: "fit-content",
                            textAlign: "left",
                          }}
                        >
                          {donation.projectName}
                        </h5>
                        <div style={{ width: "fit-content" }}>
                          <Link
                            to={`/dashboard/donations/update/${donation._id}`}
                          >
                            <img
                              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                              height="25"
                              alt="Edit Icon"
                              loading="lazy"
                            />
                          </Link>
                          <Link
                            onClick={() => deleteDonation(donation._id)}
                            style={{ marginLeft: "10px" }}
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
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-primary"
                        to={`${donation._id}`}
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

export default DonationList;
