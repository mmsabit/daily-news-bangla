import React from "react";

const SingUp = () => {
  return (
    <div className="flex flex-col lg:max-w-7xl max-w-9/10 mx-auto h-[70vh] justify-center items-center">
      <h2 className="text-3xl mb-5 font-bold">Sign in</h2>
      <form>
        <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="user_name" type="text" className="input" placeholder="Name" required/>

          <label className="label">Email</label>
          <input name="user_email" type="email" className="input" placeholder="Email" required/>

          <label className="label">Password</label>
          <input name="user_pass" type="password" className="input" placeholder="Password" required/>

          <button className="btn bg-[#DC2626] text-white mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SingUp;
