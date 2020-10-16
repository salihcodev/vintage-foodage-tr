// BASIC IMPORTS:==>
import React from 'react';
import './style.sass';

// UTILITIES IMPORTS:==>
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import appLogo from '../../assets/app-logo.svg';

// COMPONENT IMPORTS:==>
const Footer = () => {
  const { Projects, Support, Company, companyExperience } = React.useContext(
    ProductContext,
  );
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col lg={3} md={4}>
              <div className="companyIdentity footerWing">
                <div className="flexShield">
                  <Link to="/">
                    <img src={appLogo} alt="foodage" />
                  </Link>
                  <p className="identityDesc">
                    Foodage working in this field from 1999 till now, It wins 2
                    medals on this industry.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className="footerLinks footerWing">
                <h5 className="sectionTitle">Site map</h5>
                <Row>
                  <Col xl={3} lg={4} sm={6}>
                    <ul className="siteMap">
                      <h6 className="colDescription">Projects</h6>
                      {Projects.map((SLink) => (
                        <li className="sLink" key={SLink.id}>
                          <Link to={SLink.link}>{SLink.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col xl={3} lg={4} sm={6}>
                    <ul className="siteMap">
                      <h6 className="colDescription">Support</h6>
                      {Support.map((SLink) => (
                        <li className="sLink" key={SLink.id}>
                          <Link to={SLink.link}>{SLink.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col xl={3} lg={4} sm={6}>
                    <ul className="siteMap">
                      <h6 className="colDescription">Company</h6>
                      {Company.map((SLink) => (
                        <li className="sLink" key={SLink.id}>
                          <Link to={SLink.link}>{SLink.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col xl={3} lg={4} sm={6}>
                    <ul className="siteMap">
                      <h6 className="colDescription">Co. experience</h6>
                      {companyExperience.map((SLink) => (
                        <li className="sLink" key={SLink.id}>
                          <Link to={SLink.link}>{SLink.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <section className="lastFooter">
            <Row>
              <Col>
                <div className="policyAndPrivacy">
                  <p className="policy">
                    <a href="#">Policy</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="copyrightsWrapper">
                  <p className="copyText">
                    <span className="copyrights">
                      @copyrights {new Date().getFullYear()}
                    </span>
                    <span>, all rights reserved to</span>
                    <a
                      className="author"
                      href="https://www.twitter.com/salihcodev"
                    >
                      @ahmedsalih
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
