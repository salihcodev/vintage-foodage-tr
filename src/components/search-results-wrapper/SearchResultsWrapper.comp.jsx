// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';

// ==> COMPONENTS:
import FoundRecipe from '../../components/founded-recipe/FoundedRecipe.comp';
import Loading from '../../components/loading/Loading.comp';

// ==> COMPONENT:
const SearchResultsWrapper = ({ searchQuery }) => {
  const {
    loading,
    showSearchResult,
    recipesToFilter,
    sudoErrorHandler,
  } = React.useContext(ProductContext);

  return (
    <>
      <>
        {sudoErrorHandler.show && (
          <small className="moreThan3Char">
            <b>{sudoErrorHandler.errMsg}</b>
          </small>
        )}
      </>
      <>
        {showSearchResult &&
          (recipesToFilter.length === 0 ? (
            <section className="noMatches">
              <small>
                <b>
                  Sorry, <em>{searchQuery}</em> doesn't find a match.
                </b>
              </small>
            </section>
          ) : loading ? (
            <Loading />
          ) : (
            <section className="filteredRecipes">
              <ul className="founded">
                {recipesToFilter.map((item) => (
                  <FoundRecipe key={item.id} fRecipe={item} />
                ))}
              </ul>
            </section>
          ))}
      </>
    </>
  );
};

export default SearchResultsWrapper;
