import React from "react";

const UserCard = ({ name, username, email, website }) => {
  return (
    <div className="rounded-md shadow-md bg-white px-4 py-2 flex flex-col gap-1.5 text-lg w-[300px]">
      <p>
        <span className="font-medium">Name</span> : {name}
      </p>
      <p>
        <span className="font-medium">Username</span> : {username}
      </p>
      <p>
        <span className="font-medium">Email</span> : {email}
      </p>
      <p>
        <span className="font-medium">Website</span> : {website}
      </p>
    </div>
  );
};

export default UserCard;
