import React from 'react';
import { Heading } from '..';
import { Cast } from '../../types';

type CastListProps = {
  cast?: Cast[] | undefined;
};

function CastList({ cast }: CastListProps) {
  return (
    <div className="cast-list">
      <Heading tag="h4" text="Cast" />
      <ul className="cast-list__list">
        {cast?.slice(0, 5).map((item) => (
          <li className="cast-list__item" key={item.id}>
            <img
              className="cast-list__img"
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p className="cast-list__name">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CastList;
