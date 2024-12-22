import { useAuth } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Chatlist from '../components/Chatlist';

const Dashboardlayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  // State for managing the visibility of the Chatlist on small screens
  const [isChatlistOpen, setIsChatlistOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  // Function to close the Chatlist
  const handleCloseChatlist = () => {
    setIsChatlistOpen(false);
  };

  if (!isLoaded) return "Loading...";

  return (
    <div className="flex h-[calc(100%-75px)]">
      {/* Hamburger Menu for small screens */}
      <button
        className="lg:hidden relative z-50  text-white "
        onClick={() => setIsChatlistOpen((prev) => !prev)}
      >
        {isChatlistOpen ? (
          <span className="text-3xl p-2 font-bold absolute  -top-8 left-60 rounded-full">&times;</span> // Close icon
        ) : (
          <span className="text-2xl p-2 absolute top-4 left-4 bg-gray-800 rounded-full">&#9776;</span> // Hamburger icon
        )}
      </button>

      {/* Chatlist */}
      <div
        className={`fixed inset-0 z-40 lg:relative bg-gray-900 transition-transform duration-300 transform ${
          isChatlistOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-3/4 lg:w-1/5`}
      >
        <Chatlist onClose={handleCloseChatlist} />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-[#12101b]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboardlayout;
