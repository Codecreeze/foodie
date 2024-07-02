import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack, useTheme, useMediaQuery, Button } from '@mui/material';
import menuImage from '../../Assets/stock1.jpg';
import favoriteImage from '../../Assets/Favo.jpg';
import mealGeneratorImage from '../../Assets/stck2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Grid item lg={6} textAlign={"center"}>
          <Typography variant="h4" fontWeight={"bold"}>
            Welcome to our food app!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '75vh' }}>

        <Box>
          <Stack direction={isSmallScreen ? "column" : "row"} spacing={5} mb={7}>
            <Card sx={{ height: '100%', width: isSmallScreen ? '100%' : '190px', margin: 'auto' }}>
              <CardContent sx={{ padding: 0 }}>
                <img src={menuImage} alt="Menu" style={{ width: "100%", height: "20vh" }} />
                <Box textAlign={"center"} mt={1}>
                  <Button variant='contained' onClick={() => handleNavigation("/menu")}>
                    Menu
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%', width: isSmallScreen ? '100%' : '190px', margin: 'auto' }}>
              <CardContent sx={{ padding: 0 }}>
                <img src={favoriteImage} alt="Favorite" style={{ width: "100%", height: "20vh" }} />
               
                <Box textAlign={"center"} mt={1}>
                  <Button variant='contained' onClick={() => handleNavigation("/my-favorites")}>
                    Favorite
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Stack>
          <Stack direction={"row"} gap={10}>
            <Card sx={{ height: '100%', width: isSmallScreen ? '100%' : '190px', margin: 'auto' }}>
              <CardContent sx={{ padding: 0 }}>
                <img src={mealGeneratorImage} alt="Random meal generator" style={{ width: "100%", height: "20vh" }} />
              
                <Box textAlign={"center"} mt={1}>
                  <Button variant='contained' sx={{ width: 120 }} onClick={() => handleNavigation("/meal-generator")}>
                    Random meal generator
                  </Button>
                </Box>
              </CardContent>
            </Card>

          </Stack>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
