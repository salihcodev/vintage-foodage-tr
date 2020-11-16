// eslint-disable-next-line react/prop-types
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:

// ==> COMPONENTS:
import Title from '../title/Title.component';
import PopularRecipesWrapper from './popular-recipe-wrapper/popular-recipe-wrapper.comp';

const PopularRecipes = () => {
  return (
    <>
      <article className="popularRecipesWrapper">
        <Title title={'Popular'} subTitle={'Recipes'} />
        <PopularRecipesWrapper />
      </article>
    </>
  );
};

export default PopularRecipes;
