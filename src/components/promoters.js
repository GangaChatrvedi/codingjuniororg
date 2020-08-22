import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { associations } from "../data/associations"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F2F7FF',
    paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6)
    },
    color: '#000000'
  },

  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px'
  }
}));

function Promoters({ className, associationImages, ...rest }) {
  const classes = useStyles();

  console.log(associationImages);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} lg={12} display="flex" justify="center">
            <Typography variant="body1" gutterBottom>
              Our mentors are associated with
            </Typography>
          </Grid>

          <Grid container>
            {
              associations.map((association, index) => {

                const associationFileName = association["avatar"]
                const associationImage = associationImages.nodes.find(
                  node => node.childImageSharp.fixed.originalName === associationFileName
                )
                return (
                  <Grid item xs={6} md={3} display="flex" justifyContent="center">
                    <Img alt={association["name"]} fixed={associationImage.childImageSharp.fixed}></Img>
                  </Grid>
                )

              })

            }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Promoters.propTypes = {
  className: PropTypes.string
};

export default Promoters;
