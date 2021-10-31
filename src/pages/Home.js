import React from "react";
import bgImage from "./../assets/images/sectionBg.png";
import Bg from "./../assets/images/bg.png";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";

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

      <div
        id="feature"
        className="py-1">
        <div className="text-center text-white">
            <h1>Our Feature Courses</h1>
            <p className="mb-0">
              Here you can find our all latest courses. Choose some of them and
              try to grow up your skills.
            </p>
        </div>
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
