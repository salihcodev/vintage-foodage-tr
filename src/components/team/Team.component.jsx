/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from 'react-bootstrap';
import { ProductContext } from '../../context/recipes.context';
// ==> COMPONENTS:
import Title from '../title/Title.component';

const teamSliderResponsiveness = {
  0: { items: 0 },
  568: { items: 1 },
  769: { items: 2 },
  1024: { items: 2 },
};

const Team = () => {
  const { teamMembers } = React.useContext(ProductContext);
  const defaultMouseDragging = (e) => e.preventDefault();
  const popRecipesArr = teamMembers.map(({ memImg, role, name }) => {
    const teamMemImg = {
      background: ` url(${memImg}) center/cover`,
    };
    return (
      <div onDragStart={defaultMouseDragging} className="teamMember">
        <div className="memberImg">
          <div style={teamMemImg}>
            <span className="role">{role}</span>
          </div>
        </div>
        <h4 className="memberName">{name}</h4>
      </div>
    );
  });

  return (
    <Container>
      <section className="TeamWrapper">
        <Title title={'Our Creative'} subTitle={'Team'} />
        <h2 className="heading">Meet and Other Team Members</h2>
        <p className="desc">
          Our team is what marks us out from other restaurants. Every one of us
          is a part of a family that always welcomes new members!
        </p>
        <div className="memberSlider">
          <AliceCarousel
            mouseTracking
            autoPlayControls={false}
            autoPlayStrategy="none"
            animationType="slide"
            infinite
            touchTracking
            // disableDotsControls
            disableButtonsControls
            items={popRecipesArr}
            responsive={teamSliderResponsiveness}
          />
        </div>
      </section>
    </Container>
  );
};

export default Team;
