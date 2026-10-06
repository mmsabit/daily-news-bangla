"use client"

import { authClient } from "@/lib/auth-client";
import React from "react";

const SignIn = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      user_email: string;
      user_pass: string;
    };

    const { data, error } = await authClient.signIn.email({
      email: user.user_email,
      password: user.user_pass,
      callbackURL: "/",
    });
    

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:max-w-7xl max-w-9/10 mx-auto h-[70vh] justify-center items-center">
        <h2 className="text-3xl mb-5 font-bold">Log in</h2>
        <form onSubmit={handleSubmit}>
          <fieldset  className="fieldset bg-white border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input
              name="user_email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              name="user_pass"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button className="btn bg-[#DC2626] text-white mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
