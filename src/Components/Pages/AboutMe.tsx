import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ABOUT_ME from "../../Assets/devme.jpg";
import FOODIE from "../../Assets/food1.jpg";


const AboutMe = () => {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2} mb={30}>
        <Container maxWidth="md">
          <Typography variant="h5" textAlign={"center"} fontWeight={"bold"} mb={4}>
            About Me
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <img
                src={ABOUT_ME}
                alt="About Me"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="body1" textAlign={"justify"}>
                Hello! I'm Pradeep Kumar, a passionate Frontend Developer with over 3+years of expertise in crafting responsive
                and interactive websites using React, TypeScript, JavaScript, and Redux toolkit.
                <br />
                <br />
                Dedicated to seamless
                frontend-backend integration to deliver exceptional user experiences.
                <br />
                <br />
                I specialize in JavaScript, React, Redux toolkit and Material UI, and I'm always eager to learn new
                technologies and improve my skills.
                <br />
                <br />
                In my free time, I enjoy exploring new places, and reading about
                the latest trends in technology.
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" textAlign={"center"} fontWeight={"bold"} mt={4}>
            About Foodie
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="body1" textAlign={"justify"}>
                Welcome to Foodie, your ultimate culinary companion!.
                <br/>
                Navigate effortlessly through Home, Menu, My Favourites, Meal Generator, and About Me 
                sections. Discover diverse meal categories on the Menu page, each featuring mouthwatering 
                dishes. 
                <br />
                <br />
                Easily manage your favourites by adding or removing meals, showcased beautifully
                on the Favorite Meals page. Enjoy a delightful surprise with our Random Meal Generator,
                perfect for adventurous foodies. 
                <br />
                <br />
                Dive deeper into the developer's journey and inspiration
                on the About Me page. Foodie is here to make your food exploration delightful
                and engaging!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <img
                src={FOODIE}
                alt="About FOODIE"
                style={{ width: '100%', height: "70%", borderRadius: '10px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default AboutMe;
