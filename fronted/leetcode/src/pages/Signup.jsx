// import React, { useState } from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit} className="min-h-screen flex flex-col justify-center items-center gap-y-3 " >
//         <input
//           type="text"
//           value={name}
//           placeholder="Enter your name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           value={email}
//           placeholder="Enter your email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           value={password}
//           placeholder="Enter your password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Signup;

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//Schema validation for sign up from
const signupSchema = z.object({
  firstName: z.string().min(3, "name should least 3 char "),
  emailId: z.string().min(3, "emailId should least 3 char "),
  password: z.string().min(3, "password should least 3 char "),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  return (
    <div className="bg-[#020617] min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="bg-[#0f172a] p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-4 border border-green-500"
      >
        <h2 className="text-2xl font-bold text-center text-green-400">
          Register
        </h2>

        <input
          {...register("firstName")}
          placeholder="Enter name"
          className="p-3 bg-[#020617] text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
        />
        {errors.firstName && (
          <span className="text-green-400 text-sm">
            {errors.firstName.message}
          </span>
        )}

        <input type="email"
          {...register("emailId")}
          placeholder="Enter email"
          className="p-3 bg-[#020617] text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
        />
        {errors.emailId && (
          <span className="text-green-400 text-sm">
            {errors.emailId.message}
          </span>
        )}

        <input
          {...register("password")}
          placeholder="Enter password"
          type="password"
          className="p-3 bg-[#020617] text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
        />
        {errors.password && (
          <span className="text-green-400 text-sm">
            {errors.password.message}
          </span>
        )}

        <button
          type="Submit"
          className="bg-green-500 hover:bg-green-600 text-black py-3 rounded-lg font-semibold transition duration-200 shadow-lg shadow-green-500/30"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

//42
export default Signup;
