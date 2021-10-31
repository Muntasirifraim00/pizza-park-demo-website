import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../hooks/useAuth.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { selectedCourse, remove, setSelectedCourse, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  const history = useHistory();
  const totalPrice = selectedCourse.reduce((total, course) => total + course.price, 0);

  return (
    <div className="my-4">
      <Container>
        {selectedCourse.length ? (
          <Row>
            <div className="text-center" md={4}>
              <h4>Total {selectedCourse.length} Pizza selected</h4>
              <h6>Total Price: {totalPrice} $</h6>

              <button
                onClick={() => {
                  fetch(
                    `https://wicked-mausoleum-90619.herokuapp.com/purchase/${uid}`,
                    {
                      method: "delete",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        alert("Thankssss for purchasing");
                        setSelectedCourse([]);
                        history.push("/home");
                      }
                    });
                }}
                className="btn btn-primary" > Check Out</button>
            </div>
            <Col className="" md={9}>
              {selectedCourse.map((course) => {
                const { img, _id, name, shortdescription, price } =
                  course;

                return (
                  <Row className="my-2 " key={_id}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h3>{name}</h3>
                      <h5>{shortdescription}</h5>

                      <h4>Price: {price}</h4>
                      <Row>

                        <Col sm={8}>
                          <div className="d-flex">
                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-primary  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Course Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
