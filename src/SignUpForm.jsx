// src/SignUpForm.js
import React from 'react';
// import './styles/index.css';

const SignUpForm = () => {
  return (
    <div className="container mt-8">
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {/* Your sign-up form goes here */}
        <form>
          {/* Form fields go here */}
        </form>

        <div className="mt-4">
          <p className="text-gray-600">or sign up with:</p>
          <div className="flex mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
              Sign in with Google
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 mr-2 rounded">
              Sign in with Facebook
            </button>
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
              Sign in with Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
