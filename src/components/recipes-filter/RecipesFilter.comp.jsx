// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> COMPONENTS:
import SearchResultsWrapper from '../../components/search-results-wrapper/SearchResultsWrapper.comp';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';

// ==> COMPONENT:
const RecipesFilter = () => {
  const { filterByTitle, setSudoErrorHandler } = React.useContext(ProductContext);
  const [userInput, setUserInput] = React.useState('');

  const handelOnChange = (e) => {
    let cleanSearchQuery = e.target.value.toLowerCase().trim();
    filterByTitle(cleanSearchQuery);
    setUserInput(cleanSearchQuery);
  };

  return (
    <aside className="recipesFilter">
      {/* search form */}
      <h6 className="searchHeading">
        <strong>Those are mine, Find yours :')</strong>
      </h6>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Chicken, pizza, pie"
          onKeyUp={handelOnChange}
          onBlur={() => setSudoErrorHandler(``, false)}
        />
      </form>

      {/* search result wrapper */}
      <SearchResultsWrapper searchQuery={userInput} />
    </aside>
  );
};

export default RecipesFilter;
