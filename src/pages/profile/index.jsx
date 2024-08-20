"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const router = new useRouter();
  const [user, setUser] = useState({});
  const onLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logged out successfully");
      router.push("/authentication");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/users/authenticated_user");
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>
      <p>This is the profile page.</p>
      {user && (
        <div>
          <p>{typeof user === "string" ? user : JSON.stringify(user)}</p>{" "}
        </div>
      )}
      <h2 className="p-1 rounded bg-green-500">
        <Link href={`/profile/${user._id}`}>{user._id}</Link>
      </h2>
      <button
        onClick={onLogOut}
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log out
      </button>
    </div>
  );
}
