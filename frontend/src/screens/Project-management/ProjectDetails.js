import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.project.module.css";

const ProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setProjectDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, [id]);

  const deleteProject = () => {
    axios
      .delete(`http://localhost:8000/projects/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Project Deleted Successfully");
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
        <h2 style={{ textAlign: "left" }}>{projectDetails.projectName}</h2>
        <div className="d-flex justify-content-between">
          <h5>Project Details</h5>
          <div>
            <Link to={`/dashboard/projects/update/${projectDetails._id}`}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                height="25"
                alt="Edit Icon"
                loading="lazy"
              />
            </Link>
            <Link
              onClick={() => deleteProject()}
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
                value={projectDetails.projectName}
                disabled
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="organizationName"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Organization Name:
              </label>
              <input
                type="text"
                id="organizationName"
                className="form-control"
                name="organizationName"
                value={projectDetails.organizationName}
                disabled
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="location"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Location:
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                name="location"
                value={projectDetails.location}
                disabled
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
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="date"
                  defaultValue={projectDetails.date}
                  disabled
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
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  className="form-control"
                  style={{ width: "400px" }}
                  name="time"
                  defaultValue={projectDetails.time}
                  disabled
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="projectCost"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Project Cost:
              </label>
              <input
                type="text"
                id="projectCost"
                className="form-control"
                name="projectCost"
                value={projectDetails.projectCost}
                disabled
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="memberCount"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Member Count:
              </label>
              <input
                type="text"
                id="memberCount"
                className="form-control"
                name="memberCount"
                value={projectDetails.memberCount}
                disabled
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
                value={projectDetails.description}
                disabled
              ></textarea>
            </div>

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <div className={styles.btn_box}>
              <button
                className={styles.btn}
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
export default ProjectDetails;
