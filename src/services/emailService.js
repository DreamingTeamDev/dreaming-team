import axios from 'axios';

const sendEmail = async (data) => {
  try {
    const response = await axios.post('https://m-ojdg.onrender.com/api/feedback', data);
    if (response.status !== 200) {
      throw new Error('Error in sending the email');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error when sending the letter');
  }
};

export default sendEmail;
