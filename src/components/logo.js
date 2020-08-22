import React from 'react';
import Img from "gatsby-image"

function Logo({logoImage}) {

  return (
    <Img fixed={logoImage.childImageSharp.fixed} />
  );
}

export default Logo;
