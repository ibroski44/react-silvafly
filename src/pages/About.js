import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";

import { Box } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Typography
          width={"100%"}
          height={"625px"}
          sx={{ backgroundColor: "blue" }}
        ></Typography>

        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "montserrat",
          }}
        >
          ABOUT-US
        </Typography>
      </Box>
      <Grid container spacing={2} paddingTop={"50px"} paddingBottom={"50px"}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "200px",
              height: "400px",
            }}
          >
            <CardContent>
              <Typography
                variant="subtitle1"
                color="text"
                component="div"
                pt={"50px"}
              >
                As a family-owned bakery, we take pride in crafting the finest
                and richest bread with love and dedication. Our commitment is
                simple: to craft irresistible delightful treats that not only
                tantalize the taste buds but also create lasting memories. From
                our signature Agege bread to a delightful array of pastries,
                every bite is a testament to our commitment and passion to
                quality and richness. At Silvafly, we believe in more than just
                baking – we believe in creating moments of bliss. Join us on a
                journey where every bite is a celebration, and every visit
                leaves you craving for more. Welcome to a world that prioritizes
                your health, welcome to Silvafly Bakery.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <CardContent>
              <img
                src="/images/com.png"
                alt="scan"
                width={"400px"}
                height={"400px"}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <footer
        style={{
          width: "100%",
          height: "650px",
          backgroundColor: "rgba(253, 131, 35, 1)",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            paddingTop={"50px"}
            color={"rgba(18, 39, 221, 1)"}
          >
            Currently, Agege Bread is available only on <br /> WEDNESDAYS
            AND SATURDAYS
          </Typography>
          <Typography textAlign={"center"} color={"white"}>
            Order a day prior latest 10pm PST
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            pt={"150px"}
            pb={"220px"}
          >
            <Box paddingRight={"100px"}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/em.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="black">
                    silvaflyllc@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/pc.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="black">
                    +1(469)-605-1142
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <div>
            <Divider />
          </div>
          <Box>
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              paddingTop={"20px"}
            >
              <Typography
                variant="body2"
                color="black"
                paddingTop={"20px"}
                paddingRight={"300px"}
              >
                copyright© 2024 silvafly bakery
              </Typography>
              <Grid item>
                <img
                  src="/images/instagram.png"
                  alt="instagram"
                  width={"40px"}
                  height={"40px"}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default About;
