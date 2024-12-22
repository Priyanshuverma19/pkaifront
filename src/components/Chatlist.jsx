import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

// const Chatlist = ({ onClose }) => {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["userChats"],
//     queryFn: () =>
//       fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
//         credentials: "include",
//       }).then((res) => res.json()),
//   });


//   return (
//     <div className="flex flex-col gap-4 h-[calc(100vh-44px)]">
//       <span className="text-2xl text-gray-300 font-semibold p-1">Dashboard</span>
//       <div className="flex flex-col px-2 gap-2 font-medium">
//         <Link
//           to="/dashboard"
//           className="text-md text-gray-500 hover:bg-[#2c2937] rounded-md"
//           onClick={onClose}
//         >
//           Create a new chat
//         </Link>
//         <Link
//           to="/"
//           className="text-md text-gray-500 hover:bg-[#2c2937]"
//           onClick={onClose}
//         >
//           Explore PK AI
//         </Link>
//         <Link
//           to="/"
//           className="text-md text-gray-500 hover:bg-[#2c2937]"
//           onClick={onClose}
//         >
//           Contact
//         </Link>
//       </div>
//       <hr className="h-[2px] bg-white opacity-30" />
//       <span className="text-xl text-gray-300 font-semibold p-1">Recent Chats</span>
//       <div className="flex flex-col overflow-y-auto h-2/3 gap-1.5 px-2">
//         {isPending
//           ? "Loading.."
//           : error
//           ? "Something went wrong"
//           : data?.map((chat) => (
//               <Link
//                 to={`/dashboard/chats/${chat._id}`}
//                 key={chat._id}
//                 className="hover:bg-[#2c2937] rounded-lg"
//                 onClick={onClose}
//               >
//                 {chat.title}
//               </Link>
//             ))}
//       </div>
//       <hr className="h-[2px] bg-white opacity-30" />
//       <div className="flex items-center">
//         <img src="/logo.png" alt="Logo" className="w-8 h-8 hidden" />
//         <div className="flex flex-col">
//           <span className="text-lg lg:text-sm text-white font-bold">Upgrade to Pro</span>
//           <span className="text-sm">
//             Get unlimited access to all features
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
const Chatlist = ({ onClose }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err.error || "Failed to fetch chats");
          });
        }
        return res.json();
      }),
  });

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-44px)]">
      <span className="text-2xl text-gray-300 font-semibold p-1">Dashboard</span>
      <div className="flex flex-col px-2 gap-2 font-medium">
        <Link
          to="/dashboard"
          className="text-md text-gray-500 hover:bg-[#2c2937] rounded-md"
          onClick={onClose}
        >
          Create a new chat
        </Link>
        <Link
          to="/"
          className="text-md text-gray-500 hover:bg-[#2c2937]"
          onClick={onClose}
        >
          Explore PK AI
        </Link>
        <Link
          to="/"
          className="text-md text-gray-500 hover:bg-[#2c2937]"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
      <hr className="h-[2px] bg-white opacity-30" />
      <span className="text-xl text-gray-300 font-semibold p-1">Recent Chats</span>
      <div className="flex flex-col overflow-y-auto h-2/3 gap-1.5 px-2">
        {isLoading
          ? "Loading..."
          : error
          ? error.message
          : data?.map((chat) => (
              <Link
                to={`/dashboard/chats/${chat._id}`}
                key={chat._id}
                className="hover:bg-[#2c2937] rounded-lg"
                onClick={onClose}
              >
                {chat.title}
              </Link>
            ))}
      </div>
      <hr className="h-[2px] bg-white opacity-30" />
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 hidden" />
        <div className="flex flex-col">
          <span className="text-lg lg:text-sm text-white font-bold">Upgrade to Pro</span>
          <span className="text-sm">Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};


export default Chatlist;
