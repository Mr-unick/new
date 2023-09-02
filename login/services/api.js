import axios from 'axios';

const URL='http://localhost:3001'

//sendmail api

export const Sendmail=async(email)=>{
try{
    return await axios.post(`${URL}/sendmail`,email)
}catch(error){
    console.log('something went wrong ',error)
}
}

export const Verification = async (otp,email) => {
    try {
      const response = await axios.post(`${URL}/verify`, { otp, email });

      if (response.data.success) {
        setMessage('Email verified successfully!');
      } else {
        setMessage('Email verification failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred during email verification.');
    }
  };