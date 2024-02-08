import React from "react";
import { ListItem, List, ListItemText, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "@mui/material";

import { Box } from "@mui/material";
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
          <Typography fontWeight={"bold"}>
            Explore Our Best Selling products
          </Typography>
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          mt={"50px"}
        >
          <Card sx={{ width: "300px", mr: "30px" }}>
            <CardMedia
              component="img"
              alt="agege bread"
              image="/images/wa5.jpg"
              height="250px"
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
                <br />
                <span style={{ color: "black" }}>(Order a day prior)</span>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "300px", mr: "30px" }}>
            <CardMedia
              component="img"
              alt="Almond"
              height="250px"
              image="/images/wa2.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="rgba(18, 39, 221, 1)"
                component="div"
              >
                Almond/Raisin/Coconut
                <br /> Chip Banana Bread
              </Typography>
              <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                (Big Loaf)
                <br />
                <span>$20 Each</span>
                <br />
                <span style={{ color: "black" }}>(Min Order: 3 Pieces)</span>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "300px", mr: "30px" }}>
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
                <br />
                <br />
                <span> $ 3.00 each</span>
                <br />
                <span style={{ color: "black" }}>(min order:20 pieces)</span>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box marginTop={"50px"}>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <Card sx={{ width: "300px", mr: "30px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="/images/wa4.jpg"
                height="250px"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="rgba(18, 39, 221, 1)"
                  component="div"
                >
                  Sausage Roll
                </Typography>
                <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                  <br />
                  <br />
                  <span> $ 3.00 each</span>
                  <br />
                  <span style={{ color: "black" }}>(min order:20 pieces)</span>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "300px", mr: "30px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250px"
                image="/images/wa.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="rgba(18, 39, 221, 1)"
                  component="div"
                >
                  Regular Banana <br /> Bread
                </Typography>
                <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                  (Big Loaf)
                  <br />
                  <span>$18 Each</span>
                  <br />
                  <span style={{ color: "black" }}>(Min Order: 3 Pieces)</span>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "300px", mr: "30px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250px"
                image="/images/wa7.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="rgba(18, 39, 221, 1)"
                  component="div"
                >
                  Regular Banana <br /> Bread
                </Typography>
                <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                  <br /> (Mini Loaf)
                  <br />
                  <span>$3.50 Each</span>
                  <br />
                  <span style={{ color: "black" }}>(Min Order: 14 Pieces)</span>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            marginTop={"50px"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Card sx={{ width: "300px", mr: "30px" }}>
              <CardMedia
                component="img"
                alt="Almond"
                height="250px"
                image="/images/wa6.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="rgba(18, 39, 221, 1)"
                  component="div"
                >
                  Almond/Raisin/Coconut
                  <br /> Chip Banana Bread
                </Typography>
                <Typography variant="body2" color="rgba(18, 39, 221, 1)">
                  (Mini Loaf)
                  <br />
                  <span>$4 Each</span>
                  <br />
                  <span style={{ color: "black" }}>(Min Order: 14 Pieces)</span>
                </Typography>
              </CardContent>
            </Card>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <Card
                sx={{ width: "400px", mr: "30px", backgroundColor: "blue" }}
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
                    <Typography>
                      <List>
                        <ListItem>
                          <ListItemText primary="welcome" />
                        </ListItem>
                      </List>
                    </Typography>
                    <span>
                      For other Pasteries Kindly place your order atleast
                      48hours Earlier
                    </span>
                    <br />
                    <span>Order now!!!</span>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
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
