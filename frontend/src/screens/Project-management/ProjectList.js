import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/get/all")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong check the console for more details");
      });
  }, []);

  const deleteProject = (id) => {
    axios
      .delete(`http://localhost:8000/projects/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("project Deleted Successfully");
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
                Projects List
              </h3>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn btn-primary"
                  style={{ height: "fit-content" }}
                  to={"/dashboard/project/add"}
                >
                  Add Project
                </Link>
              </div>
            </div>
            <hr className="mb-4" style={{ opacity: "0.15" }} />
            <div>
              {projects &&
                projects.map((project) => (
                  <div className="row">
                    <div className="card mb-3 col-11  " key={project._id}>
                      <div className="card-body d-flex justify-content-between">
                        <h5
                          className="card-title"
                          style={{
                            width: "fit-content",
                            textAlign: "left",
                          }}
                        >
                          {project.projectName}
                        </h5>
                        <div style={{ width: "fit-content" }}>
                          <Link
                            to={`/dashboard/projects/update/${project._id}`}
                          >
                            <img
                              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-512.png"
                              height="25"
                              alt="Edit Icon"
                              loading="lazy"
                            />
                          </Link>
                          <Link
                            onClick={() => deleteProject(project._id)}
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
                        to={`${project._id}`}
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

export default ProjectList;
