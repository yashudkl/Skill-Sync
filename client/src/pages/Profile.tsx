import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="text-center">
          <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-700">John Doe</h1>
          <p className="text-gray-500">Software Engineer</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-600">About Me</h2>
          <p className="text-gray-600 mt-2">
            Hello! I'm a software engineer passionate about building intuitive and dynamic web applications. I enjoy solving complex problems and learning new technologies.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-600">Contact Information</h2>
          <ul className="mt-2 text-gray-600">
            <li>Email: johndoe@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Location: New York, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;