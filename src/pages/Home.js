import React from "react";

import { Container, Row } from "react-bootstrap";


import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div
     
      >
        <Container>
          <div
            style={{ height: "40vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-2 py-2">
             
                <h1 className="">Order your most favroute Pizzaaa</h1>
            
                <p className="my-1  fs-2">
                Pizza the one and only choice of yours .....be with us always to have a great pizza
                </p>
             
            </div>
          </div>
        </Container>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto text-center" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

      <div
        id="feature"
        className="py-1">
       
        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {courses.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
