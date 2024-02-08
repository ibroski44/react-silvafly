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
    <Box position={"relative"}>
      <img src="/images/q.png" alt="bread" width={"100%"} height={"625px"} />

      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{
          position: "absolute",
          top: "15%",
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
          top: "18%",
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
            backgroundColor: "rgba(253, 131, 35, 1)",
            transform: "translate(-50%, -50%)",
            color: "black",
            width: "251px",
            borderRadius: "10px",
            fontFamily: "montserrat",
          }}
        >
          <Button variant="h5">Explore Our Products</Button>
        </Box>
      </Typography>
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
            marginTop: "30px",
          }}
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
          <Typography fontWeight={"bold"}>
            Explore Our Best Selling products
          </Typography>
        </Typography>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          <Card sx={{ width: "400px", mr: "30px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250px"
              image="/images/q.png"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="rgba(18, 39, 221, 1)"
                component="div"
              >
                Agege bread
              </Typography>
              <Typography variant="contained" color="rgba(18, 39, 221, 1)">
                (Available only on Wednesdays <br /> and Saturdays)
                <br />
                <span>$6 Each</span>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "400px", mr: "30px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250px"
              image="/images/wa2.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="rgba(18, 39, 221, 1)"
                component="div"
              >
                Almond/Raisin/
              </Typography>
              <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                Coconut Chip Banana Bread <br /> (Big Loaf)
                <br />
                <span>$20.25 Each</span>
                <br />
                <span style={{ color: "black" }}>(Min Order: 4 Pieces)</span>
              </Typography>
            </CardContent>
          </Card>
          <Box>
            <Card sx={{ width: "400px", mr: "30px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250px"
                image="/images/wa3.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="rgba(18, 39, 221, 1)"
                  component="div"
                >
                  MeatPie
                </Typography>
                <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                  Meat Pie <br />
                  <span> $ 3.00 each</span>
                  <br />
                  <span style={{ color: "black" }}>(min order:20pieces)</span>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Button
          variant="small"
          sx={{
            backgroundColor: "rgba(253, 131, 35, 1)",
            marginLeft: "120px",
            width: "200px",
            mt: "25px",
            fontSize: "12px",
          }}
        >
          Explore Our Products
        </Button>
      </Box>
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
        <Box>
          <Box mr={"80px"}>
            <img
              src="/images/qa.png"
              alt="logo"
              width={"200px"}
              height={"40px"}
            />
            <Card sx={{ width: 345, height: "200px", paddingTop: "50px" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="black"
                  component="div"
                >
                  Like and follow us
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <img
                      src="/images/instagram.png"
                      alt="instagram"
                      width={"60px"}
                      height={"60px"}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="black">
                      @silvaflybakery
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box marginTop={"41px"}>
          <Card sx={{ width: 345, height: "250px" }}>
            <CardContent>
              <Typography marginBottom={"2px"} paddingTop={"2px"}>
                Scan to contact us on whatsapp
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/w.png"
                    alt="scan"
                    width={"200px"}
                    height={"200px"}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
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

export default Home;
