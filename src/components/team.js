import React, { useState, useEffect, Fragment } from "react"
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles"
import { members } from "../data/teamData"
import {
  Button,
  Grid,
  Typography,
  Container,
  Avatar,
  Link,
  Card,
  Box,
  CardContent

} from "@material-ui/core"

import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: 'linear-gradient(180deg, rgba(255, 76, 0, 0.9) 0%, #FFD8C8 100%)',
    padding: theme.spacing(10, 10, 10),
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
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2),
  },

  avatarGrid: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
}))
export default function Team({ teamImages }) {

  const classes = useStyles()

  return (
    <Grid container className={classes.heroContent}>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h3" align="center" color="textPrimary"
          style={{
            "marginBottom": "50px",
            "color": "#FFFFFF"
          }}>
          Learn From The Best <br /> Our Curriculum Creators
        </Typography>

      </Grid>

      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {
            members.map((member, index) => {

              const memberFileName = member["avatar"]
              const memberImage = teamImages.nodes.find(
                node => node.childImageSharp.fixed.originalName === memberFileName
              )

              return (

                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <Box display="flex" justifyContent="center">
                      <Avatar
                        alt={member.name}
                        component="a"
                        target="_blank"
                        href={member.linkedin}
                        className={classes.avatarLarge}
                      >
                        <Img fixed={memberImage.childImageSharp.fixed}></Img>
                      </Avatar>
                    </Box>
                    {/* <Avatar alt="Remy Sharp" src={edge.node.image} /> */}

                    <CardContent className={classes.cardContent}>

                      <Box display="flex" justifyContent="center">
                        <Typography>
                          <Box fontWeight="fontWeightBold" m={1}>{member.name}</Box>
                          </Typography>
                      </Box>

                    </CardContent>
                  </Card>
                </Grid>

              )
            })
          }

        </Grid>
      </Container>


    </Grid>

  );

}