import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "@mui/material";

import { Box } from "@mui/material";
const Home = () => {
  return (
    <Box position={"relative"} fontFamily={"monserrat"}>
      <img
        src="/images/mini-loaf-banana-bread.jpg"
        alt="bread"
        width={"100%"}
        height={"625px"}
      />

      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bolder",
          fontFamily: "montserrat",
        }}
      >
        Silvafly Bakery
      </Typography>
      <Typography
        variant="h6"
        textAlign={"center"}
        sx={{
          position: "absolute",
          top: "9.5%",
          pt: "10px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily: "montserrat",
        }}
      >
        HOME OF DELICIOUS TREATS
        <Box
          textAlign={"center"}
          sx={{
            position: "absolute",
            top: "60%",
            marginTop: "45px",
            left: "50%",
            backgroundColor: "rgba(253, 131, 35, 1)",
            transform: "translate(-50%, -50%)",
            color: "black",
            width: "251px",
            borderRadius: "10px",
            fontFamily: "montserrat",
          }}
        ></Box>
      </Typography>
      <Box>
        <Typography
          variant="h4"
          pt={"50px"}
          sx={{
            textAlign: "center",
            color: "rgba(18, 39, 221, 1)",
            fontWeight: "bolder",
          }}
        >
          OUR PRODUCTS
        </Typography>

        <Box display={"flex"} flexDirection={"row"} pt={"50px"}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item lg={3} marginRight={3} pb={"20px"}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="agege bread"
                  image="/images/Agege-bread2.jpg"
                  height="250px"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"10px"}
                    textAlign={"center"}
                  >
                    Agege bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography
                      variant="contained"
                      color="rgba(18, 39, 221, 1)"
                    >
                      (Available only on Wednesdays <br /> and Saturdays)
                      <br />
                      <span>$6 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Order a day prior)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={3} marginRight={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="Almond"
                  height="250px"
                  image="/images/Almond-raisin.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    textAlign={"center"}
                  >
                    Almond/Raisin/Coconut
                    <br /> Chip Banana Bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      (Big Loaf)
                      <br />
                      <span>$20 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Min Order: 3 Pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={3} marginRight={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250px"
                  image="/images/meat-pie.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"10px"}
                    textAlign={"center"}
                  >
                    MeatPie
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      <br />
                      <br />
                      <span> $ 3.00 each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (min order:20 pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} marginRight={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image="/images/sausage.jpg"
                  height="250px"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"32px"}
                    textAlign={"center"}
                  >
                    Sausage Roll
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      <br />
                      <br />
                      <span> $ 3.00 each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (min order:20 pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} marginRight={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250px"
                  image="/images/Almond-big-loaf.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"20px"}
                    textAlign={"center"}
                  >
                    Regular Banana <br /> Bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      (Big Loaf)
                      <br />
                      <span>$18 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Min Order: 3 Pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} marginRight={3} pb={"20px"}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250px"
                  image="/images/mini-loaf-almond-bread.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    textAlign={"center"}
                  >
                    Regular Banana <br /> Bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      <br /> (Mini Loaf)
                      <br />
                      <span>$3.50 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Min Order: 14 Pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} marginRight={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="Almond"
                  height="250px"
                  image="/images/mini-loaf-banana-bread.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"28px"}
                    textAlign={"center"}
                  >
                    Almond/Raisin/Coconut
                    <br /> Chip Banana Bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      (Mini Loaf)
                      <br />
                      <span>$4 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Min Order: 14 Pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box display={"flex"} flexDirection={"row"} pt={"50px"}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item lg={3} marginRight={3} pb={"20px"}>
              <Card
                sx={{
                  width: "400px",
                  mr: "30px",
                  backgroundColor: "blue",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="rgba(253, 131, 35, 1)"
                    component="div"
                    textAlign={"center"}
                  >
                    Order Instructions
                  </Typography>
                  <Typography variant="h5" color="white" textAlign={"center"}>
                    Call or text on WhatsApp to place your orders for Agege
                    Bread <br />
                    <Typography color={"red"} pt={"20px"}>
                      •
                      <span style={{ color: "white", paddingLeft: "15px" }}>
                        Wednesday pickup: Kindly send in your order latest
                        Tuesday 10pm PST.
                      </span>
                    </Typography>
                    <Typography color={"red"} pb={"20px"}>
                      •
                      <span style={{ color: "white", paddingLeft: "15px" }}>
                        Saturday pickup: Kindly send in your order <br />
                        latest Friday 10pm PST.
                      </span>
                    </Typography>
                    <span>
                      For other Pasteries Kindly place your order atleast
                      48hours Earlier
                    </span>
                    <br />
                    <span
                      style={{
                        color: "rgba(234, 254, 7, 1)",
                      }}
                    >
                      Order now!!!
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} marginRight={3} pb={"20px"}>
              <Card
                sx={{
                  width: "400px",
                  height: "300px",
                  pt: "91px",
                  mr: "30px",
                  backgroundColor: "blue",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="rgba(253, 131, 35, 1)"
                    component="div"
                    textAlign={"center"}
                  >
                    Pay with Zelle
                  </Typography>
                  <div style={{ backgroundColor: "white" }}>
                    <Divider />
                  </div>
                  <Typography
                    variant="h5"
                    color="white"
                    paddingTop={"50px"}
                    textAlign={"center"}
                  >
                    SILVAFLY LLC <br />
                    <Typography> at +1(469)-605-1142</Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
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

export default Home;
