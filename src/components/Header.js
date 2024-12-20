import React, { useState } from "react";
import SignInModal from "./SignIn";
import SignUpModal from "./SignUp";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("userId"); // Remove user from local storage
  };

  return (
    <>
      <header className="header">
        {" "}
        <Link to={"/"}>
          <div className="logo">
            <img src="/jihc-logo-v1.png" alt="JIHC Events Logo" />
          </div>
        </Link>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <button onClick={handleSignInClick} className="btn sign-in-btn">
                Sign In
              </button>
              <button onClick={handleSignUpClick} className="btn sign-up-btn">
                Sign Up
              </button>
            </>
          ) : (
            <>
              <Link to="/profile" className="btn profile-btn">
                Profile
              </Link>

              <button onClick={handleLogout} className="btn logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
        {/* Sign In Modal */}
        {isSignInOpen && (
          <SignInModal
            onClose={() => setIsSignInOpen(false)}
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
          />
        )}
        {/* Sign Up Modal */}
        {isSignUpOpen && (
          <SignUpModal
            onClose={() => setIsSignUpOpen(false)}
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
          />
        )}
      </header>
    </>
  );
};

export default Header;
