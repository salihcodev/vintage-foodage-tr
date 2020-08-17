/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Founders.styles.sass';

// ==> UTILITIES:
import { Card, Row, Col } from 'react-bootstrap';

const Founders = ({ CompanyFoundersData }) => {
  return (
    <>
      <section className="companyFounders">
        <h4 className="foundersHeading">Founders</h4>
        <div className="companyFoundersContainer">
          <Row>
            {CompanyFoundersData.map((data) => (
              <Col key={data.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://fakeimg.pl/350x200/?text=founder"
                    alt={data.name}
                  />
                  <Card.Body>
                    <h4>
                      <Card.Title>{data.name}</Card.Title>
                    </h4>
                    <h6>{data.title}</h6>
                    <Card.Text>{data.founderSummary}</Card.Text>
                    <ul className="socialMediaList">
                      {data.contacts.map((contact) => (
                        <li key={contact.id}>
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
