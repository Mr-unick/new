import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState([]);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const URL='https://server-iota-beryl.vercel.app'

//sendmail api

const Sendmail=async()=>{
  console.log(email);
try{
    return await axios.post(`${URL}/sendmail`,{Email:email})
}catch(error){
    console.log('something went wrong ',error)
}
}

const Verification = async () => {
    try {
       await axios.post(`${URL}/verify`, { otp, email });
    } catch (error) {
      console.log('something went wrong ',error)
    }
    setMessage("Otp Sent ")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-red p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <button onClick={Sendmail} className="w-full bg-blue-500 text-white p-2 rounded-md mb-9">
          Send OTP Email
        </button>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <button onClick={Verification} className="w-full bg-blue-500 text-white p-2 rounded-md mb-2">
          Verify Email
        </button>
        <p className="text-red-500 font-semibold mb-8">{message}</p>
        {console.log(message,"hshshshshshshsh")}
      </div>
    </div>
  );
}

export default App;
