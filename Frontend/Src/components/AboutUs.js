import React from "react";

function AboutUs() {
  return (
    <div className="mb-5">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1366810401/photo/water-drops.jpg?s=170667a&w=0&k=20&c=vSwZzcn7ll-1BPR5DkCx1_1VV31c_poP-Pfm49GG0MA="
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://www.worldvision.com.au/images/default-source/Stories/coming-clean-img2.jpg?sfvrsn=692ce23c_4&quality=90&format=jpg&resize=1"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://www.maga.lk/wp-content/uploads/2015/05/148-Ruhunupura-wsp-12.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
              <h4 className="title mb-4">
                Our mission is to <br />
                Give everyone access to clean water.
              </h4>
              <p className="text-muted mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt?
              </p>

              <div className="row">
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">10,000+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Projects Completed
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1500+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Donators
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1000+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Workers
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1800+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Locations
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
