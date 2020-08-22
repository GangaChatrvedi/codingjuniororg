import React, { useState, useEffect, Fragment } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"
import loadergif from "../../static/loading-opaque.gif"

import {
  ThemeProvider
} from '@material-ui/core';
import { createTheme } from '../theme';
import HomeLayout from "../layouts/HomeLayout";
import { graphql } from "gatsby";

const history = createBrowserHistory();

function Loader() {
  return (
    <Fragment>
      <img
        src={loadergif}
        alt="..."
        style={{ margin: "auto", display: "block", width: "60%" }}
      />
    </Fragment>
  )
}

export default function Home({ data }) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 10)
  }, [])

  if (!loaded) {
    return <Loader />
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pledge</title>
          <link rel="canonical" href="https://codingjunior.org/" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <CssBaseline />
        <BrowserRouter>
          <HomeLayout data = { data } />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  )
}


export const query = graphql`
query ContributorsQuery {

  avatarImages: allFile(filter: {dir: {regex: "/images/avatar/i"}}) {
    nodes {
      childImageSharp {
        fixed(width: 155, height: 155, quality: 100) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }

  coverImages: allFile(filter: {dir: {regex: "/images/cover/i"}}) {
    nodes {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }

  galleryImages: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/images/gallery/i"}}) {
    nodes {
      childImageSharp {
        fixed(width: 150, height: 150, quality: 100) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }


  logoImage: file(relativePath: { eq: "logo/logo.png" }) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }

  teamImages: allFile(filter: {dir: {regex: "/images/members/i"}}) {
    nodes {
      childImageSharp {
        fixed(width: 130, height: 130, quality: 100) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }

  associationImages: allFile(filter: {dir: {regex: "/images/assoc/i"}}) {
    nodes {
      childImageSharp {
        fixed(height: 70, quality: 100) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }

  domainImages: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/images/domains/i"}}) {
    nodes {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }

  choiceImages: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/images/choices/i"}}) {
    nodes {
      childImageSharp {
        fluid(maxHeight: 400, quality: 100) {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  } 
}

`
