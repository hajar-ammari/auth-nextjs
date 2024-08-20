"use client";
import React, { useState } from "react";

import "../../app/globals.css";
import Image from "next/image";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="gradient-form min-h-screen bg-custom-light-green dark:bg-neutral-700 flex items-center justify-center">
      <div className="container p-10">
        <div className="flex h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* Left column container */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  {/* Logo */}
                  <div className="text-center">
                    <Image
                      className="mx-auto w-48"
                      src="/assets/images/Her-logo.png"
                      alt="logo"
                      width={200}
                      height={100}
                    />
                  </div>
                  {isLogin ? <Login /> : <SignUp />}
                  {/* Toggle button */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 me-2">
                      {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    </p>
                    <button
                      className="inline-block rounded border-2 border-custom-dark-green px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-custom-dark-green transition duration-150 ease-in-out hover:border-custom-dark-green hover:bg-custom-dark-green hover:text-white focus:border-custom-dark-green focus:bg-custom-dark-green/50 focus:text-white focus:outline-none focus:ring-0 active:border-custom-dark-green active:text-white dark:hover:bg-custom-dark-green dark:focus:bg-custom-dark-green"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? "Sign Up" : "Login"}
                    </button>
                  </div>
                </div>
              </div>
              {/* Right column container with background and description */}
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                style={{
                  backgroundImage: "url('/assets/images/Her.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="px-4 py-6 text-custom-dark-green md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    Finibus Bonorum et Malorum{" "}
                  </h4>
                  <p className="text-sm">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
