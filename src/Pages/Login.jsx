// import { useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";

// export function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in", { email, password });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-96 p-6 shadow-xl rounded-2xl bg-white">
//         <CardContent>
//           <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Password</label>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <Button className="w-full" type="submit">Login</Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from 'react'

const Login = () => {
  return (
    <div className='min-h-dvh py-32'>Login</div>
  )
}

export default Login