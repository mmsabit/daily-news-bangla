"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = () => {
  const handleSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as Record<string, string>;

    const { data, error } = await authClient.signUp.email({
      name: user.user_name,
      email: user.user_email,
      password: user.user_pass,
      callbackURL: "/",
    });

    if(data){
      redirect("/");
    }

    if(error){
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:max-w-7xl max-w-9/10 mx-auto h-[70vh] justify-center items-center">
      <h2 className="text-3xl mb-5 font-bold">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input
            name="user_name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />

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

          <button type="submit" className="btn bg-[#DC2626] text-white mt-4">
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
