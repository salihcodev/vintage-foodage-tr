/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { Container, Form, Row, Col } from 'react-bootstrap';

// ==> COMPONENTS:
import Title from '../title/Title.component';

// ==> COMPONENT DATA:
const ContactHeading = 'Get in Touch with Us';
const ContactDesc =
  'Whether you’d like to reserve a table or ask us a question, feel free to drop a few lines in the form below.';

// ==> COMPONENT:
const Contact = () => {
  return (
    <>
      <section className="contact">
        <Container>
          <Title title="Contact" subTitle="Us" />
          <div className="formContainer">
            <h2 className="contactHeading">{ContactHeading}</h2>
            <p className="contactDescription">{ContactDesc}</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Row>
                  <Col md={4} xs={12}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" />
                    <small className="required">Required</small>
                  </Col>
                  <Col md={4} xs={12}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" />
                  </Col>
                  <Col md={4} xs={12}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                    <small className="required">Required</small>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Col>
                </Row>
                <Form.Control type="submit" value="Done" />
              </Form.Group>
            </Form>
          </div>
        </Container>
          <div className="map">
            <iframe frameBorder="0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440154.2128229136!2d30.821290695361338!3d30.472798731845028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c97111b6991d%3A0xb334d5f3a8a4071c!2sStereo%20Restaurant%20And%20Cafe!5e0!3m2!1sen!2seg!4v1602852272442!5m2!1sen!2seg"></iframe>
          </div>
      </section>
    </>
  );
};

export default Contact;
