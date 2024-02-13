import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";

import { Box } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Box position={"relative"} fontFamily={"montserrat"}>
        <Typography
          width={"100%"}
          height={"563px"}
          sx={{ backgroundColor: "blue" }}
        ></Typography>

        <Typography
          variant="h2"
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
          About-US
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Grid container spacing={2} paddingTop={"70px"} paddingBottom={"70px"}>
          <Grid item xs={12} md={12} lg={6}>
            <Box>
              <Typography
                variant="subtitle1"
                color="text"
                component="div"
                pt={"50px"}
                pl={"90px"}
                pr={"60px"}
                pb={"30px"}
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
            </Box>
          </Grid>
          <Box display={"flex"} flexDirection={"row"}>
            <Grid item lg={6} md={6}>
              <Card
                sx={{ width: "600px", height: "350px", borderRadius: "20px" }}
              >
                <div>
                  <img
                    src="/images/Agege-bread2.jpg"
                    alt="bread"
                    width={"300px"}
                    height={"350px"}
                  />
                  <img
                    src="/images/sausage_mini_banana_bread.png"
                    alt="sausage_roll"
                    width={"300px"}
                    height={"350px"}
                  />
                </div>
              </Card>
            </Grid>
          </Box>
        </Grid>
      </Box>

      <footer
        style={{
          width: "100%",
          height: "563px",
          backgroundColor: "rgba(253, 131, 35, 1)",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            paddingTop={"30px"}
            variant="h5"
            color={"rgba(18, 39, 221, 1)"}
          >
            Currently, Agege Bread is available only on <br /> WEDNESDAYS
            AND SATURDAYS
          </Typography>
          <Typography textAlign={"center"} variant="h6" color={"white"}>
            Order a day prior latest 10pm PST
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            color={"white"}
            fontFamily={"montserrat"}
            pt={"70px"}
            pb={"200px"}
          >
            <Box paddingRight={"100px"}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/message-logo.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="white">
                    silvaflyllc@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/phone-call.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="white">
                    +1(469)-605-1142
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <div style={{ backgroundColor: "white" }}>
            <Divider />
          </div>
          <Box
            display={"flex"}
            flexDirection={"row"}
            paddingTop={"20px"}
            color={"white"}
            fontFamily={"montserrat"}
          >
            <Grid container spacing={2} justifyContent={"center"}>
              <Typography
                variant="body2"
                color="white"
                paddingTop={"20px"}
                paddingRight={"300px"}
              >
                copyright© 2024 silvafly bakery
              </Typography>
              <Grid item>
                <a href="https://www.instagram.com/silvaflybakery/">
                  <img
                    src="/images/instagram2.jpg"
                    alt="instagram"
                    width={"30px"}
                    height={"30px"}
                  />
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default About;
