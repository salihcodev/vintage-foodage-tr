/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> COMPONENTS:
import Title from '../title/Title.component';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

// ==> COMPONENT DATA:
const title = 'Opening';
const subTitle = 'Hours';
const serHeading = 'We are Always Glad to See You';
const serDescription =
  'Our restaurant serves breakfasts, lunches, and dinners throughout the day. Learn more about our opening hours below';

// ==> COMPONENT:
const Opening = () => {
  const { openingData } = React.useContext(ProductContext);
  return (
    <Container>
      <section className="opening">
        <Title title={title} subTitle={subTitle} /> {/* title */}
        <div className="openingBody">
          <h2 className="openHeading">{serHeading}</h2>
          <p className="openDescription">{serDescription}</p>
          <div className="openCards">
            <Row>
              {openingData.map(({ img, title, list }) => (
                <Col lg={4} md={6} sm={12} key={uuid()}>
                  <div className="openCard">
                    <div className="cardHeader">
                      <h5 className="title">
                        <strong>{title}</strong>
                      </h5>
                      <div className="cardImg">
                        <img src={img} alt="" />
                      </div>
                    </div>
                    <div className="cardFooter">
                      <ul>
                        {list.map((item) => (
                          <li key={uuid()} className="listItem">
                            {item}
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

export default Opening;
