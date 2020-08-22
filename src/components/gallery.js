import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Box,
  Grid,
  Button,
  CardMedia,
  Card,
} from "@material-ui/core"
import Img from "gatsby-image"
import React, { useState, useEffect, Fragment } from "react"


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "auto%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardMedia: {
    width: "auto",
    height: "auto",
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
  iconCls: {
    marginLeft: "10px",
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
  logo: {
    borderRadius: "50%",
    marginRight: "14px",
  },
}))


function GalleryItem({ itemImage }) {

  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <Img fixed={itemImage.childImageSharp.fixed} />
        </CardMedia>
      </Card>
    </Grid>

  );
}

export default function Gallery({ galleryImages }) {

  const classes = useStyles()

  console.log(galleryImages);

  const galleryItems = galleryImages.nodes.map((itemImage, index) =>
    <GalleryItem key={index} itemImage={itemImage} />
  );

  console.log(galleryItems)

  return (
    <Grid
      container
      style={{
        background: "blue",
        padding: "70px"
      }}
    >
      <Grid item md={12}>
        <Typography
          variant="h4"
          style={{
            color: "white"
          }}
        >

          Online Coding Courses for Age 6 - 18
        </Typography>
      </Grid>

      <Grid container
        md={12}
        sm={12}
        justifyContent="center"
        height="100%"
      >

        {galleryItems}

      </Grid>
    </Grid>

  );

}
