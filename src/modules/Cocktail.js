import React from 'react';
import { Link } from '@reach/router';

export default function Cocktail({
  id,
  strDrinkThumb,
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass
}) {
  return (
    <div className="results__card">
      <div className="cocktail-box">
        <img
          className="cocktail-box__thumb"
          src={`${strDrinkThumb}/preview`}
          alt="Cocktail Thumbnails"
        />
        <div className="cocktail-box__info">
          <h3 className="cocktail-box__title">
            <span role="img" aria-label="drink">
              🍸
            </span>
            &nbsp;
            {strDrink}
          </h3>
          <p className="cocktail-box__meta">
            <span>
              <span role="img" aria-label="category">
                🥂
              </span>
              &nbsp; Category:
            </span>
            &nbsp;{strCategory}
          </p>
          <p className="cocktail-box__meta">
            <span>
              <span role="img" aria-label="types">
                🍹
              </span>
              &nbsp; Types:
            </span>
            &nbsp;{strAlcoholic}
          </p>
          <p className="cocktail-box__meta">
            <span>
              <span role="img" aria-label="glass">
                🥃
              </span>
              &nbsp; Glass:
            </span>
            &nbsp;{strGlass}
          </p>
          <Link
            to={`/details/${id}`}
            className="cocktail-box__link btn btn--dark"
          >
            MixItUp Instruction
          </Link>
        </div>
      </div>
    </div>
  );
}
