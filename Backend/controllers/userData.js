const axios = require('axios')

exports.weightLoss = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData)

    const response = await axios.post("http://127.0.0.1:5000/weight_loss", formData)

    console.log("Response from server:", response.data);

    if(response) res.status(200).json({ message: 'Success' , data: response.data.suggested_food_items});
    else res.status(400).json({ message: 'Bad request' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.weightGain = async (req, res) => {
  try {
    const formData = req.body;

    const response = await axios.post("http://127.0.0.1:5000/weight_gain", formData);

    console.log("Response from server:", response.data);

    if (response) res.status(200).json({ message: 'Success', data: response.data.suggested_food_items});
    else res.status(400).json({ message: 'Bad request' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



exports.healthy = async (req, res) => {
  try {
    const formData = req.body;

const response = await axios.post("hhttp://127.0.0.1:5000/healthy", formData);

    console.log("Response from server:", response.data);

    if (response) res.status(200).json({ message: 'Success', data: response.data.suggested_food_items});
    else res.status(400).json({ message: 'Bad request' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

