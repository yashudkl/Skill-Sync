import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const TeamDashboard: React.FC = () => {



  // state to hold user data and modal visibility


  const [users, setUsers] = useState<{ id: string; name: string; profilePicture: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  useEffect(() => {


    // simulate fetching data with mock data


    const mockUsers = [
      {
        id: "123",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150",
      },
      {
        id: "124",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150",
      },
      {
        id: "125",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150",
      },
      {
        id: "126",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150",
      },
    ];



    setTimeout(() => {
      setUsers(mockUsers);  // set the users state with mock data
      setLoading(false);  // set loading state to false after fetching data
    }, 500);
  }, []);

  // loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // handle remove user
  const handleRemove = (id: string) => {
    setUsers(users.filter((user) => user.id !== id)); // Remove user from state by filtering out the user
  };


  const disbandTeam = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };


  const confirmDisband = () => {
    setUsers([]); 
    setIsModalOpen(false);
  };


  const cancelDisband = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="flex flex-col bg-[#F8F8FD] min-h-screen">
      <div className="w-full bg-white rounded-lg p-6">
        <div className="flex items-center mb-4">
          <ArrowBackIosIcon className="text-[#066F8C]" />
          <span className="ml-2 text-xl font-medium text-[#066F8C] font-poppins">Back</span>
        </div>

        <h1 className="text-[28px] font-medium mt-4 mb-4 text-[#066F8C] font-poppins">Your Team</h1>
        <hr />




        <div className="mt-4 space-y-6">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              {/* Profile Image */}
              <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                  src={user.profilePicture || "https://via.placeholder.com/150"}
                  alt={`${user.name}'s Profile`}
                />
                <div className="ml-4">
                  <h1 className="text-lg font-bold text-gray-700">{user.name}</h1>
                  <div>
                    <Link to={`/profile/${user.id}`}>
                      <a className="text-blue-500 text-sm font-medium underline">See Profile</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Remove Button */}
              <button
                className="text-red-500 font-semibold text-sm"
                onClick={() => handleRemove(user.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <h1 className="text-[#066F8C] text-xl font-bold text-center mt-20">Congratulations!</h1>

        <div className="flex justify-center items-center mt-10 mb-20">
          {/* disband Team Button */}
          <button
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-[#066F8C]"
            onClick={disbandTeam}
          >
            Disband Team
          </button>
        </div>
      </div>

      {/* confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-[#066F8C]">Are you sure?</h2>
            <p className="text-sm text-gray-700 mt-2">This will remove all team members.</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600"
                onClick={confirmDisband}
              >
                Yes! Disband
              </button>
              <button
                className="bg-gray-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-400"
                onClick={cancelDisband}
              >
                No! Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDashboard;
