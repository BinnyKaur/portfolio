import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Image = ({ className }) => (
  <StaticImage
    src='../images/profile-fullres-cropped.jpeg'
    className={className}
    alt='Diogo Correia'
    width={100}
    height={100}
  />
);
export default Image;
