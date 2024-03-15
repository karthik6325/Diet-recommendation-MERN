import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './elements/home';
import About from './elements/about';
import Contact from './elements/contact';
import Diet from './Components/Diet';
import Login from './Components/login/login';
import Register from './Components/register/register';
import Recpie from './Components/RecipieCards/Recipie';
import RecipieDetails from './Components/RecipieCards/RecipieDetails';
import { useLogin } from './Context/LoginContext';
import Profile from './elements/myProfile';
import Recommend from './elements/recommendation';

function Main() {
  const { userToken } = useLogin(); // Access the user value from the context
  useEffect(() => {
    console.log(userToken);
  }, [userToken]);
  const recipiedetailsample = [
    {
      Calories: 505.8,
      CarbohydrateContent: 3,
      CholesterolContent: 199.9,
      Cluster: 2,
      CookTime: 0,
      FatContent: 18.9,
      FiberContent: 0,
      Name: "Caputo's Halibut With Mint and Balsamic Vinegar",
      PrepTime: 10,
      ProteinContent: 75.8,
      RecipeId: 105,
      RecipeIngredientParts: 'c("halibut steaks", "extra virgin olive oil", "mint leaves", "garlic clove")',
      RecipeInstructions: 'c("Brush both sides of the fish with some of the olive oil and place on hot grill, barbecue or hot skillet.", "Cook 2 to 3 minutes on each side or until  fish is done.", "In another pan, heat the remaining oil, balsamic vinegar and the mint until just warm.", "Just before serving, add the garlic to the sauce and spoon over the fish.")',
      SaturatedFatContent: 3.1,
      SodiumContent: 281.5,
      SugarContent: 2.4,
      TotalTime: 10,
      image_url: 'https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2020/08/spinach-tomato-pasta-sauce-recipe-4.jpg?ssl=1'
    },
  ];

  return (
    <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={userToken ? <Recommend /> : <Login />} />
          <Route path="/recipie-details" element={userToken ? <RecipieDetails recipieDetail={recipiedetailsample[0]} /> : <Login />} />
          <Route path="/diet" element={userToken ? <Diet /> : <Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default Main;
