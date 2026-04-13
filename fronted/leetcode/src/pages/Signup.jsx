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

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName")} placeholder="enter name" />
        <input {...register("email")} placeholder="enter email" />
        <input {...register("password")} placeholder="enter password"  type="password"  />
        <button type="Submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
