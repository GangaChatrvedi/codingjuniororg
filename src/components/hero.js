import React, { useState, useEffect, Fragment } from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Grid,
  Typography

} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)',
    padding: theme.spacing(15, 10, 10),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0",
  },
  btn: {
    textTransform: "none",
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  paddingCls: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: "32px",
  },
  text: {
    color: "#FFFFFF"
  }


}))
export default function Hero({ data }) {

  const classes = useStyles()

  return (
    <Grid container className={classes.heroContent}>
      {/* Hero unit */}

      <Grid item lg={6} md={6} sm={12}>
        <Typography
          variant="h2"
          className={classes.text}
          gutterBottom
        >
          Learn for Cause
        </Typography>
        <Typography
          variant="h2"
          className={classes.text}
          gutterBottom
        >
          Code for Cause
        </Typography>
        <Typography
          variant="body1"
          className={classes.text}
          gutterBottom
          paragraph
        >
          An initiative to help the community by providing training, guidance and awareness about the possibilities in the software field to students &amp; professionals.
          </Typography>

        <Button
          className={classes.btn}
          variant="contained"
          component="a"
          href="https://github.com/codeforcauseorg/pledge#steps-to-take-the-pledge"
          color="primary"
          target="_blank"
        >
          Create a Pull Request
                </Button>
      </Grid>

    </Grid>



  );

}