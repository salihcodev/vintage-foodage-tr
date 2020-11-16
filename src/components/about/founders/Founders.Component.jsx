/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Founders.styles.sass';

// ==> UTILITIES:
import { Card, Row, Col } from 'react-bootstrap';
import { v4 as uID } from 'uuid';

const Founders = ({ CompanyFoundersData }) => {
  return (
    <>
      <section className="companyFounders">
        <h4 className="foundersHeading">
          <b>Founders</b>
        </h4>
        <div className="companyFoundersContainer">
          <Row>
            {CompanyFoundersData.map((data) => (
              <Col lg={4} md={6} xs={12}  key={uID()}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={data.img}
                    alt={data.name}
                  />
                  <Card.Body>
                    <h4 className='founderName'>
                      <Card.Title>
                        <b>{data.name}</b>
                      </Card.Title>
                    </h4>
                    <h6>{data.title}</h6>
                    <Card.Text>{data.founderSummary}</Card.Text>
                    <ul className="socialMediaList">
                      {data.contacts.map((contact) => (
                        <li key={uID()}>
                          <a href="/">{contact.icon}</a>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Founders;
