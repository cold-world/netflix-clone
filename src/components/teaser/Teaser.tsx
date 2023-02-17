/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Heading } from '..';
import { IResultTeaser } from '../../types';

type TeaserProps = {
  teaser: IResultTeaser;
};

function Teaser({ teaser }: TeaserProps) {
  const teaserUrl = `https://www.youtube.com/embed/${teaser?.key}`;
  return (
    <div className="teaser">
      <Heading className="teaser__heading heading" tag="h4" text="Teaser" />
      <iframe width="860" height="515" src={teaserUrl} title={teaser?.name} />
    </div>
  );
}

export default Teaser;
