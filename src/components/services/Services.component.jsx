/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Services.style.sass';

// ==> COMPONENTS:
import Title from '../title/Title.component';

// ==> UTILITIES:
import { ProductContext } from '../../context/products.Context';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { BsArrowRight } from 'react-icons/bs';

// ==> COMPONENT DATA:
const title = 'About';
const subTitle = 'Us';
const serHeading = 'Welcome to Our Restaurant';
const serDescription =
  'Since 1999, our restaurant is the center of coziness, comfort, and tasty dishes available to our every visitor and guest';

// ==> COMPONENT:
const Services = () => {
  const { ServicesData } = React.useContext(ProductContext);
  return (
    <Container>
      <section className="services">
        <Title title={title} subTitle={subTitle} /> {/* title */}
        <div className="servicesBody">
          <h2 className="serHeading">{serHeading}</h2>
          <p className="serDescription">{serDescription}</p>
          <div className="serCards">
            <Row>
              {ServicesData.map((ser) => (
                <Col>
                  <div key={uuid()} className="serCard card">
                    <div className="cardHeader">
                      <span className="icon">{ser.icon}</span>
                      <h5 className="title">{ser.name}</h5>
                    </div>
                    <div className="cardBody">
                      <p className="description">{ser.description}</p>
                    </div>
                    <div className="cardFooter">
                      <ul>
                        {ser.list.map((item) => (
                          <li className="listItem">
                            <span className="icon">{BsArrowRight()}</span>
                            <span className="text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
