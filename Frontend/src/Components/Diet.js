import React, { useState } from "react";
import axios from "axios";

import "./Diet.css";

const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);

const Select = ({ label, id, children, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...rest}>
      {children}
    </select>
  </div>
);

const Diet = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [user, setUser] = useState({
    Age: "",
    Weight: "",
    Height: "",
    Diet_Type: "weight_loss",
    Food_Timing: "1",
    Disease: "None",
    Diet_preference: "Both",
    WeightGainField: "",
    WeightGainGoal: "",
    Activity_level: "",
    WeightLossField: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const print = async (e) => {
    e.preventDefault();

    const formData = {
      ...user,
    };

    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/${user.Diet_Type}`,
        formData
      );

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <h1>Personal Information</h1>
            <form onChange={handleChange}>
              <Field label="Age" id="Age" name="Age" />
              <Field label="Weight" id="Weight" name="Weight" />
              <Field label="Height" id="Height" name="Height" />
              <button type="button" onClick={nextPage}>
                Next
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Additional Information</h1>
            <form onChange={handleChange}>
              <Select label="Food Timing" id="Food_Timing" name="Food_Timing">
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
              </Select>
              <Select label="Disease" id="Disease" name="Disease">
                <option value="">None</option>
                {/* ... Other disease options */}
              </Select>
              <button type="button" onClick={prevPage}>
                Previous
              </button>
              <button type="button" onClick={nextPage}>
                Next
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Diet preferences</h1>
            <form onChange={handleChange}>
              <Select label="Diet type" id="Diet_type" name="Diet_type">
                <option value="weight_gain">Weight_gain</option>
                <option value="weight_loss">Weight_loss</option>
                <option value="healthy">Healthy</option>
              </Select>
              <button type="button" onClick={prevPage}>
                Previous
              </button>
              <button type="button" onClick={nextPage}>
                Next
              </button>
            </form>
          </div>
        );
      case 4:
        // Render additional details based on diet type preference
        const dietType = user.Diet_type;
        return (
          <div>
            <h1>Additional Details for {dietType}</h1>
            <form onChange={handleChange}>
              {/* Additional fields based on diet type */}
              {dietType === "weight_gain" && (
                <div>
                  <Field
                    label="Desired weight gain"
                    id="WeightGainField"
                    name="WeightGainField"
                  />
                  <Field
                    label="Days to achieve your goal"
                    id="WeightGainGoal"
                    name="WeightGainGoal"
                  />
                  <Select
                    label="Current activity level"
                    id="Activity_level"
                    name="Activity_level"
                  >
                    <option value="1">Sedentary (Little or no exercise)</option>
                    <option value="2">Lightly active (Light exercise/sports 3-5 days a week)</option>
                    <option value="3">Moderately active (Moderate exercise/sports 3-5 days a week)</option>
                    <option value="4">Very active (Hard exercise/sports 6-7 days a week)</option>
                    <option value="5">Extra active (Hard exercise/sports 6-7 days a week, plus physical job)</option>
                  </Select>
                </div>
              )}
              {dietType === "weight_loss" && (
                <div>
                  <Field
                    label="Desired weight loss"
                    id="WeightLossField"
                    name="WeightLossField"
                  />
                  <Field
                    label="Days to achieve your goal"
                    id="WeightGainGoal"
                    name="WeightGainGoal"
                  />
                  <Select
                    label="Current activity level"
                    id="Activity_level"
                    name="Activity_level"
                  >
                    <option value="1">Sedentary (Little or no exercise)</option>
                    <option value="2">Lightly active (Light exercise/sports 3-5 days a week)</option>
                    <option value="3">Moderately active (Moderate exercise/sports 3-5 days a week)</option>
                    <option value="4">Very active (Hard exercise/sports 6-7 days a week)</option>
                    <option value="5">Extra active (Hard exercise/sports 6-7 days a week, plus physical job)</option>
                  </Select>
                </div>
              )}
              {/* Common fields */}
              <button type="button" onClick={prevPage}>
                Previous
              </button>
              <button type="button" onClick={nextPage}>
                Next
              </button>
            </form>
          </div>
        );
      case 5:
        // Confirmation page
        const estimatedTime = user.EstimatedTime || "2 months";
        return (
          <div>
            <h1>Confirmation</h1>
            <p>Personal Information:</p>
            <p>Age: {user.Age}</p>
            <p>Weight: {user.Weight}</p>
            <p>Height: {user.Height}</p>
            <p>Additional Information:</p>
            <p>Food Timing: {user.Food_Timing}</p>
            <p>Disease: {user.Disease}</p>
            <p>Diet Preference: {user.Diet_preference}</p>
            <p>Diet Type: {user.Diet_Type}</p>
            {user.Diet_Type === "weight_gain" && (
              <div>
                <p>Desired Weight Gain: {user.WeightGainField}</p>
                <p>Days to Achieve Goal: {user.WeightGainGoal}</p>
                <p>Activity Level: {user.Activity_level}</p>
              </div>
            )}
            {user.Diet_Type === "weight_loss" && (
              <div>
                <p>Desired Weight Loss: {user.WeightLossField}</p>
                <p>Days to Achieve Goal: {user.WeightGainGoal}</p>
                <p>Activity Level: {user.Activity_level}</p>
              </div>
            )}
            <p>Estimated Time to Achieve Goal: {estimatedTime}</p>
            <button type="button" onClick={prevPage}>
              Previous
            </button>
            <button type="submit" onClick={print}>
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="container">{renderPage()}</div>;
};

export default Diet;
