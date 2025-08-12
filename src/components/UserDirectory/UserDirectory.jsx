import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
import Users from "./Users";
import { useShallow } from "zustand/shallow";

const UserDirectory = () => {
  const [query, setQuery] = useState("");
  const { users, fetchUsers, loading } = useUserStore(
    useShallow((state) => ({
      users: state.users,
      fetchUsers: state.fetchUsers,
      loading: state.loading,
    }))
  );

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      user.username.toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  useEffect(() => {
    fetchUsers("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div className="p-10 bg-[#E7E7E7] min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-5">User Directory</h1>
      <input
        className="border bg-white rounded-md px-4 py-2 text-xl w-full"
        type="text"
        placeholder="Search User By Name or Username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <h2 className="mt-8 text-2xl font-semibold bg-white px-8 py-4 rounded-md">
          Fetching Data...
        </h2>
      ) : (
        <Users filteredUsers={filteredUsers} />
      )}
    </div>
  );
};

export default UserDirectory;
