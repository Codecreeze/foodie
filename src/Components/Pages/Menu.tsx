import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, Typography, CircularProgress, Container, Box, Button } from '@mui/material';
import { fetchCategories } from '../../redux/asyncActions/itemsThunk';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, loading, error } = useSelector((state: any) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleMealNavigation = (e: any, category: string) => {
    navigate(`/menu/${category}`);
  };
  
  if (error) {
    return <Typography variant="body1" color="error">{error}</Typography>;
  }


  return (
    <React.Fragment>
      {loading ? <Box textAlign={"center"} my={30}>
        <CircularProgress thickness={5} size={60} />
      </Box> :
        (<>{categories?.length > 0 ?
          <Box display="flex" justifyContent="center" alignItems="center">
            <Container maxWidth="md">
              <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>Menu</Typography>
              <Grid container spacing={3} mt={1} mb={20} justifyContent={"center"}>
                {categories?.map((category: any) => (
                  <Grid item xs={10} sm={6} md={4} key={category.idCategory}>
                    <Card sx={{ height: 260, pb: 3 }}>
                      <Box textAlign={"center"}>
                        <img
                          src={category?.strCategoryThumb}
                          alt={category?.strCategory}
                          style={{ width: "130px", height: "130px" }}
                        />
                      </Box>
                      <CardContent>
                        <Box height={90}>
                          <Typography variant="h5" component="div">
                            {category?.strCategory}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {category?.strCategoryDescription.slice(0, 80)}...
                          </Typography>
                        </Box>
                        <Box textAlign={"center"}>
                          <Button variant='contained' onClick={(e) => handleMealNavigation(e, category.strCategory)}>
                            View Meals
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
          : (<>
            <Box display="flex" justifyContent="center" alignItems="center" my={30}>
              <Container maxWidth="md">
                <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
                  No Data Found!
                </Typography>
              </Container>
            </Box>
          </>)}
        </>)
      }
    </React.Fragment>
  );
}

export default Menu;
