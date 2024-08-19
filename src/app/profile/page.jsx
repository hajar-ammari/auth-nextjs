"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = new useRouter();
  const onLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <h1>Profile page</h1>
      <p>This is the profile page.</p>
      <button
        onClick={onLogOut}
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log out
      </button>
    </div>
  );
}
