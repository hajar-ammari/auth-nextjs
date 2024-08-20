"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Sign up successful", response.data);
      router.push("/profile");
    } catch (error) {
      console.error("Sign up failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      {/* <h1 className="mt-5 mb-6 text-center font-bold text-3xl text-gray-800 dark:text-gray-200">
        {loading ? "Processing" : "Sign Up"}
      </h1> */}

      {/* Username input */}
      <div className="relative mb-4" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <label
          htmlFor="username"
          className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out ${
            user.username
              ? "text-primary -translate-y-[0.9rem] scale-[0.8]"
              : "text-neutral-500"
          } dark:text-neutral-400 dark:peer-focus:text-primary`}
        >
          Username
        </label>
      </div>

      {/* Email input */}
      <div className="relative mb-4" data-twe-input-wrapper-init>
        <input
          type="email"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <label
          htmlFor="email"
          className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out ${
            user.email
              ? "text-primary -translate-y-[0.9rem] scale-[0.8]"
              : "text-neutral-500"
          } dark:text-neutral-400 dark:peer-focus:text-primary`}
        >
          Email
        </label>
      </div>

      {/* Password input */}
      <div className="relative mb-4" data-twe-input-wrapper-init>
        <input
          type="password"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <label
          htmlFor="password"
          className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out ${
            user.password
              ? "text-primary -translate-y-[0.9rem] scale-[0.8]"
              : "text-neutral-500"
          } dark:text-neutral-400 dark:peer-focus:text-primary`}
        >
          Password
        </label>
      </div>

      {/* Submit button */}
      <div className="mb-12 pb-1 pt-1 text-center">
        <button
          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{ background: "#734338" }}
          onClick={onSignUp}
          disabled={buttonDisabled}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
