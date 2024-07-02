import React from 'react';
import { Box, Button, Card, Container, Grid, CircularProgress, Typography, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRandomMeal } from '../../redux/asyncActions/itemsThunk';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { likeMeal, unlikeMeal } from '../../redux/slices/mealSlice';

const MealGenerator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { randomMeals, isError, isLoading, favoriteMeals } = useSelector((state: any) => state.meals);

  const generateRandomMeal = () => {
    dispatch(fetchRandomMeal());
  };

  const handleLike = (meal: any) => {
    if (favoriteMeals.some((likedMeal: any) => likedMeal.idMeal === meal.idMeal)) {
      dispatch(unlikeMeal(meal.idMeal));
    } else {
      dispatch(likeMeal(meal));
    }
  };

  if (isError) {
    return <Typography variant="body1" color="error">{isError}</Typography>;
  }

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Container maxWidth="md">
          <Typography variant="h5" textAlign={"center"} fontWeight={"bold"} mt={2}>Random Meal Generator</Typography>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button variant='text' sx={{ marginLeft: "auto" }} onClick={() => navigate(-1)}>Back</Button>
          </Box>
          <Typography variant="body2" textAlign={"center"} mt={2}>
            Let's generate a random delicious meal for you
          </Typography>
          <Grid container spacing={3} mb={Object.keys(randomMeals).length > 0 ? 0 : 30} paddingX={5} textAlign={"center"} mt={2} justifyContent={"center"}>
            <Grid item xs={12}>
              <Button variant='contained' onClick={generateRandomMeal}>Generate</Button>
            </Grid>
            {isLoading ? (
              <Grid item xs={12} mt={3} mb={20}>
                <CircularProgress />
              </Grid>
            ) : (
              randomMeals && Object.keys(randomMeals).length > 0 && (
                <Grid item xs={12} md={4} mt={3}>
                  <Card>
                    <Box>
                      <Box mt={1}>
                        <img
                          src={randomMeals.strMealThumb}
                          alt={randomMeals.strMeal}
                          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
                        />
                        <Typography variant="h6" mt={2}>
                          {randomMeals.strMeal}
                        </Typography>
                      </Box>
                      <Box display={"flex"} justifyContent={"flex-end"}>
                        <IconButton onClick={() => handleLike(randomMeals)}>
                          {favoriteMeals.some((likedMeal: any) => likedMeal.idMeal === randomMeals.idMeal) ? (
                            <Favorite sx={{ fontSize: 27, color: "red" }} />
                          ) : (
                            <FavoriteBorder sx={{ fontSize: 27 }} />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default MealGenerator;
