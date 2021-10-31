import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth.js";

const Course = ({ course }) => {
  const history = useHistory();
  const { _id, img, name, shortdescription, price, rating, ratingCount } = course;

  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  return (
    <Col sm={12} md={6} lg={4}>
     
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "21rem" }}>
            <Card.Img variant="top" style={{ minHeight: "220px" }} src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{shortdescription}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {price}$</h4>
            </Card.Body>
            <Card.Body className="my-1 py-1">
            
            </Card.Body>
            <Card.Body className="d-flex">
             
              <button
                onClick={() => {
                  if (uid) {
                    addToCart(course);
                  } else {
                    history.push("/login");
                  }
                }}
                className="btn btn-primary  w-100"
              >
                Add to Cart
              </button>
            </Card.Body>
          </Card>
        </div>
    
    </Col>
  );
};

export default Course;
