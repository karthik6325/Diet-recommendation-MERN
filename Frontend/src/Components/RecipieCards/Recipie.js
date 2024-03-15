import { useState } from 'react';
import './Card.css';
import React from 'react'
import RecpieCard from './RecipieCard';


const Recpie = () => {
  const defaultResponse = [
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
    {
      Calories: 535.5,
      CarbohydrateContent: 47.5,
      CholesterolContent: 0,
      Cluster: 2,
      CookTime: 0,
      FatContent: 36,
      FiberContent: 8.4,
      Name: 'Mohawk Indian Corn',
      PrepTime: 10,
      ProteinContent: 19.6,
      RecipeId: 915,
      RecipeIngredientParts: 'c("whole kernel corn", "black walnuts", "butter")',
      RecipeInstructions: 'c("In a small sauce pan, add corn and a half can of water.", "Add walnuts, and black walnut flavoring.", "Heat and then serve. Add butter to melt.")',
      SaturatedFatContent: 2.3,
      SodiumContent: 728.2,
      SugarContent: 6,
      TotalTime: 10,
      image_url: 'https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2020/08/spinach-tomato-pasta-sauce-recipe-4.jpg?ssl=1'
    },
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
    {
      Calories: 535.5,
      CarbohydrateContent: 47.5,
      CholesterolContent: 0,
      Cluster: 2,
      CookTime: 0,
      FatContent: 36,
      FiberContent: 8.4,
      Name: 'Mohawk Indian Corn',
      PrepTime: 10,
      ProteinContent: 19.6,
      RecipeId: 915,
      RecipeIngredientParts: 'c("whole kernel corn", "black walnuts", "butter")',
      RecipeInstructions: 'c("In a small sauce pan, add corn and a half can of water.", "Add walnuts, and black walnut flavoring.", "Heat and then serve. Add butter to melt.")',
      SaturatedFatContent: 2.3,
      SodiumContent: 728.2,
      SugarContent: 6,
      TotalTime: 10,
      image_url: 'https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2020/08/spinach-tomato-pasta-sauce-recipe-4.jpg?ssl=1'
    },
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
    {
      Calories: 535.5,
      CarbohydrateContent: 47.5,
      CholesterolContent: 0,
      Cluster: 2,
      CookTime: 0,
      FatContent: 36,
      FiberContent: 8.4,
      Name: 'Mohawk Indian Corn',
      PrepTime: 10,
      ProteinContent: 19.6,
      RecipeId: 915,
      RecipeIngredientParts: 'c("whole kernel corn", "black walnuts", "butter")',
      RecipeInstructions: 'c("In a small sauce pan, add corn and a half can of water.", "Add walnuts, and black walnut flavoring.", "Heat and then serve. Add butter to melt.")',
      SaturatedFatContent: 2.3,
      SodiumContent: 728.2,
      SugarContent: 6,
      TotalTime: 10,
      image_url: 'https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2020/08/spinach-tomato-pasta-sauce-recipe-4.jpg?ssl=1'
    },
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
    {
      Calories: 535.5,
      CarbohydrateContent: 47.5,
      CholesterolContent: 0,
      Cluster: 2,
      CookTime: 0,
      FatContent: 36,
      FiberContent: 8.4,
      Name: 'Mohawk Indian Corn',
      PrepTime: 10,
      ProteinContent: 19.6,
      RecipeId: 915,
      RecipeIngredientParts: 'c("whole kernel corn", "black walnuts", "butter")',
      RecipeInstructions: 'c("In a small sauce pan, add corn and a half can of water.", "Add walnuts, and black walnut flavoring.", "Heat and then serve. Add butter to melt.")',
      SaturatedFatContent: 2.3,
      SodiumContent: 728.2,
      SugarContent: 6,
      TotalTime: 10,
      image_url: 'https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2020/08/spinach-tomato-pasta-sauce-recipe-4.jpg?ssl=1'
    }
    // Add more default items here if needed
  ];

  const [response, setResponse] = useState(defaultResponse);
  
  const handleHealthyRequest = async () => {
    try {
      const data = {
        "Age": 30,
        "Weight": 70.5,
        "Height": 175.0,
        "Food_Timing": 2,
        "Disease": "heart_disease",
        "Desired_Gain_Kg": 5.0,
        "Num_Days": 30,
        "Activity_Level": 3
      }
      
      

      const response = await fetch('http://localhost:3001/api/v1/weight_gain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonResponse = await response.json();
      setResponse(jsonResponse.data);
      console.log(jsonResponse.data);
    } catch (error) {
      console.error('Error making the POST request:', error.message);
    }
  };
  return (
    <div className='work-container' >
      {/* <button onClick={handleHealthyRequest}>Click me</button> */}
      <h1 className='project-heading'>Recommendations</h1>
      <div className='project-container'>
        {response!=null && response.map((val,ind)=>{
            return(
                <RecpieCard 
                key={ind} imgsrc={val.image_url}
                title={val.Name}
                text={val.RecipeId}
                view={val}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Recpie