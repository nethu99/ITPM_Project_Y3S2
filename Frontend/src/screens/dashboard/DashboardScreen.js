import React from "react";

import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";

function DashboardScreen() {
  return (
    <>
      <Hero />
      <AboutUs />
      <div className="d-flex justify-content-between mb-5">
        <div className="container">
          <h1 className="title font-weight-light text-black mt-2">
            Contact Us
          </h1>
          <form className="mt-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input
                    className="form-control text-white"
                    type="text"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input
                    className="form-control text-white"
                    type="email"
                    placeholder="email address"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <textarea
                    className="form-control text-white"
                    rows="3"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center mt-2">
                <button
                  type="submit"
                  className="btn bg-info text-inverse text-white px-3 py-2"
                >
                  <span> Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
       
        <div className="col-lg-6 right-image p-r-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.794653768366!2d79.97087957580239!3d6.9151376684866905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1684496272527!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default DashboardScreen;
