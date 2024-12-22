
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboardpage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn:  (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userchats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };
  return (
    <div className='flex flex-col  h-[calc(100vh-44px)]'>
      <div  className='flex flex-col items-center justify-center gap-4 h-[90%] lg:flex-row  '>
      <div className="flex flex-col items-center border border-gray-700 rounded-xl p-2 lg:p-4 hover:shadow-lg transition">
    <img src="/chat.png" alt="Chat Icon" className="w-16 h-16 mb-2" />
    <span className="text-gray-300 text-sm font-medium">Create a new chat</span>
  </div>
  <div className="flex flex-col items-center border border-gray-700 rounded-xl p-4 hover:shadow-lg transition">
    <img src="/image.png" alt="Image Icon" className="w-16 h-16 mb-2" />
    <span className="text-gray-300 text-sm font-medium">Analyze Image</span>
  </div>
  <div className="flex flex-col items-center border border-gray-700 rounded-xl p-2 lg:p-4 hover:shadow-lg transition">
    <img src="/code.png" alt="Code Icon" className="w-16 h-16 mb-2" />
    <span className="text-gray-300 text-sm font-medium">Help me with my code</span>
  </div>
      </div>
      <div className='flex items-center justify-center '>
        <div className='w-[90%] lg:w-[50%] '>
        <form
        onSubmit={handleSubmit}
     
        className=" w-[90%] lg:w-[50%] absolute bottom-0 bg-[#2c2937] rounded-full flex gap-4 py-1.5 lg:py-4 px-2"
      >
        
       
        <input
          type="text"
          name="text"
          placeholder="Ask anything..."
          className="rounded-full bg-transparent flex-1 border-none outline-none px-2 lg:px-4"
        />
        <button className="rounded-full bg-[#605e68] border-none p-2 flex">
          <img src="/arrow.png" alt="" className="w-6 h-6" />
        </button>
      </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboardpage