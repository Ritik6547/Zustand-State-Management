import UserCard from "./UserCard";

const Users = ({ filteredUsers }) => {
  return (
    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 ">
      {filteredUsers.map((user) => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            website={user.website}
          />
        );
      })}
    </div>
  );
};

export default Users;
