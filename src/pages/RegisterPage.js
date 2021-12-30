import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <Link to="/">go Home</Link>

      <form className="center" >
                    <label>
                        <p className="whiteText">Username</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <label>
                        <p className="whiteText">Password</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <label>
                        <p className="whiteText">Email</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <label>
                        <p className="whiteText">First Name</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <label>
                        <p className="whiteText">Last Name</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <label>
                        <p className="whiteText">Phone Number</p>
                        <input className="depositCopyField" type="text"  />
                    </label>
                    <div>
                        <p></p>
                        <button className="submitButton" type="submit" >Register</button>
                    </div>
                </form>
    </div>
  );
};

export default RegisterPage;
