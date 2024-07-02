import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../../redux/asyncActions/itemsThunk';
import { likeMeal, unlikeMeal } from '../../redux/slices/mealSlice';
import { Box, Button, Card, CircularProgress, Container, Grid, IconButton, Stack, Typography, Pagination } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { getTheme } from '../Theme';

const Meals = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { meals, loading, error, favoriteMeals } = useSelector((state: any) => state.meals);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const theme = getTheme();

    useEffect(() => {
        dispatch(fetchMealsByCategory(category));
    }, [dispatch, category]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleLike = (meal: any) => {
        if (favoriteMeals.some((likedMeal: any) => likedMeal.idMeal === meal.idMeal)) {
            dispatch(unlikeMeal(meal.idMeal));
        } else {
            dispatch(likeMeal(meal));
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMeals = meals?.slice(startIndex, startIndex + itemsPerPage);

    if (error) {
        return <Typography variant="body1" color="error">{error}</Typography>;
    }

    return (
        <React.Fragment>
            {loading ? (
                <Box textAlign={"center"} my={30}>
                    <CircularProgress thickness={5} size={60} />
                </Box>
            ) : (
                <>
                    {meals?.length > 0 ? (
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Container maxWidth="md">
                                <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>Meals</Typography>
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                    <Button variant='text' sx={{ marginLeft: "auto" }} onClick={() => navigate(-1)}>Back</Button>
                                </Box>
                                <Grid container spacing={3} mt={1} mb={10} paddingX={5}>
                                    {(currentMeals || []).map((item: any) => (
                                        <Grid item xs={12} sm={12} md={12} key={item.idMeal}>
                                            <Card>
                                                <Box display={"flex"} m={2} justifyContent={"space-between"}>
                                                    <Stack direction={{ xs: "column", sm: "row" }}>
                                                        <img
                                                            src={item.strMealThumb}
                                                            alt={item.strMeal}
                                                            style={{ width: "100px", height: "100px", borderRadius: "10px" }}
                                                        />
                                                        <Typography variant="h6" ml={{ xs: 0, sm: 2 }}>
                                                            {item.strMeal}
                                                        </Typography>
                                                    </Stack>
                                                    <Box>
                                                        <IconButton onClick={() => handleLike(item)}>
                                                            {favoriteMeals.some((likedMeal: any) => likedMeal.idMeal === item.idMeal) ? (
                                                                <Favorite sx={{ fontSize: 27, color: "red" }} />
                                                            ) : (
                                                                <FavoriteBorder sx={{ fontSize: 27 }} />
                                                            )}
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Box display="flex" justifyContent="center" mt={3}>
                                    <Pagination
                                        count={Math.ceil(meals.length / itemsPerPage)}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        sx={{
                                            '& .MuiPaginationItem-root': {
                                                color: theme === 'dark' ? '#000000' : '#000',
                                                backgroundColor: theme === 'dark' ? '#ffdacc' : '#ffdacc',
                                            },
                                            '& .MuiPaginationItem-root.Mui-selected': {
                                                backgroundColor: theme === 'dark' ? '#1976d2' : '#1976d2',
                                                color: '#fff',
                                            },
                                        }}
                                    />
                                </Box>
                            </Container>
                        </Box>
                    ) : (
                        <Box display="flex" justifyContent="center" alignItems="center" my={30}>
                            <Container maxWidth="md">
                                <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
                                    No Data Found!
                                </Typography>
                            </Container>
                        </Box>
                    )}
                </>
            )}
        </React.Fragment>
    );
};

export default Meals;
