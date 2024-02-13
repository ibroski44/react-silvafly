import React from "react";
import { Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <Box position={"relative"} fontFamily={"montserrat"}>
      <Box pl={"150px"}>
        <img
          src="/images/Agege-bread.png"
          alt="bread"
          width={"80%"}
          height={"625px"}
        />
      </Box>
      <Grid>
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgba(18, 39, 221, 1)",
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
            top: "9.8%",
            pt: "10px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontFamily: "montserrat",
          }}
        >
          Home of Finest and Richest Bread
          <Box
            textAlign={"center"}
            sx={{
              position: "absolute",
              top: "60%",
              marginTop: "45px",
              left: "50%",

              transform: "translate(-50%, -50%)",
              color: "white",
              width: "251px",
              borderRadius: "10px",
              fontFamily: "montserrat",
              backgroundColor: "rgba(253, 131, 35, 1)",
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            <Button href="/products" variant="h5">
              Explore Our Products
            </Button>
          </Box>
        </Typography>
      </Grid>
      <Box
        backgroundColor="rgba(128, 128, 128, 0.316)"
        paddingBottom={"70px"}
        marginTop={"50px"}
      >
        <Typography
          variant="h4"
          pt={"50px"}
          sx={{
            textAlign: "center",
            color: "rgba(18, 39, 221, 1)",
            paddingBottom: "40px",
          }}
        >
          Creating lasting delicious memories on your taste buds
        </Typography>
        <Typography pr={"120px"} pl={"120px"}>
          <span>
            “
            <span variant="h3" style={{ fontFamily: "Sixtyfour" }}>
              WOW!!!
            </span>
            <span variant="h4" style={{ fontWeight: "bolder" }}>
              Sweet moments, freshly baked with love Agege Bread.”
            </span>
          </span>
          At Silverfly we bake with love and your health at mind, we serve
          varieties of bread and pastries. We have the Regular Banana bread,
          Chocolate chip banana bread, Almond bread, Raisin bread, Coconut
          bread, Meat pie, Sausage and the delicious Agege bread. all baked to
          satisfy the craving of our costumers.
        </Typography>
        <Button
          variant="h5"
          sx={{
            backgroundColor: "rgba(253, 131, 35, 1)",
            marginLeft: "120px",
            width: "150px",
            color: "white",
            marginTop: "30px",
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
          href="/About"
        >
          About us
        </Button>
      </Box>
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
          <Typography fontWeight={"bold"} paddingBottom={"50px"}>
            Explore Our Best Selling products
          </Typography>
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid item lg={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="Agege-bread"
                  height="250px"
                  image="/images/Agege-bread.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    paddingBottom={"29px"}
                    textAlign={"center"}
                  >
                    Agege bread
                  </Typography>
                  <Box textAlign={"center"} pb={"10px"}>
                    <Typography
                      variant="contained"
                      color="rgba(18, 39, 221, 1)"
                    >
                      (Available only on Wednesdays <br /> and Saturdays)
                      <br />
                      <span>$6 Each</span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card sx={{ width: "300px", borderRadius: "20px" }}>
                <CardMedia
                  component="img"
                  alt="Almond-raisin"
                  height="250px"
                  image="/images/Almond-raisin.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="rgba(18, 39, 221, 1)"
                    component="div"
                    textAlign={"center"}
                  >
                    Almond/Raisin/ Coconut Chip Banana Bread
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                      (Big Loaf)
                      <br />
                      <span>$20.25 Each</span>
                      <br />
                      <span style={{ color: "black" }}>
                        (Min Order: 4 Pieces)
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
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
                    textAlign={"center"}
                  >
                    MeatPie
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography
                      variant="body2"
                      paddingBottom={"30px"}
                      color="rgba(18, 39, 221, 1)"
                    >
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
          </Grid>
        </Box>
        <Button
          variant="small"
          sx={{
            backgroundColor: "rgba(253, 131, 35, 1)",
            marginLeft: "200px",
            width: "200px",
            mt: "25px",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
          href="/products"
        >
          Explore Our Products
        </Button>
      </Box>
      <Box>
        <Box
          sx={{ backgroundColor: "rgba(18, 39, 221, 1)" }}
          mt={"50px"}
          p={"50px"}
          textAlign={"center"}
        >
          <Typography variant="h3" fontWeight={"bolder"} color={"white"}>
            Our Social Media
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          backgroundColor={"rgba(128, 128, 128, 0.316)"}
          paddingTop={"100px"}
          paddingBottom={"100px"}
        >
          <Box pl={"55px"}>
            <img
              src="/images/silvafly-logo.png"
              alt="logo"
              width={"120px"}
              height={"40px"}
            />

            <Grid>
              <Grid container spacing={5} alignItems="center">
                <Grid item>
                  <Card
                    sx={{
                      width: 345,

                      height: "200px",
                      paddingTop: "50px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        color="black"
                        component="div"
                        textAlign={"center"}
                      >
                        Like and follow us
                      </Typography>

                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                      >
                        <a href="https://www.instagram.com/silvaflybakery/">
                          <img
                            src="/images/instagram.png"
                            alt="instagram"
                            width={"60px"}
                            height={"60px"}
                          />
                        </a>

                        <Typography
                          variant="body2"
                          color="black"
                          pl={"10px"}
                          pt={"15px"}
                          fontWeight={"bold"}
                        >
                          @silvaflybakery
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{
                      width: 345,
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        marginBottom={"2px"}
                        paddingTop={"2px"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        Scan to contact us on whatsapp
                      </Typography>
                      <Grid container spacing={2} justifyContent={"center"}>
                        <Grid item>
                          <img
                            src="/images/scan-me.png"
                            alt="scan"
                            width={"200px"}
                            height={"200px"}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
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
