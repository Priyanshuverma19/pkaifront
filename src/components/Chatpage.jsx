import React from "react";
import Newprompt from "./Newprompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const Chatpage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      });
     

      if (!res.ok) {
        throw new Error("Failed to fetch chat data");
      }

      return res.json();
    },
  });

  console.log({ isPending, error, data });

  return (
    <div className="h-[calc(100vh-44px)] flex flex-col items-center relative">
      <div className="overflow-y-auto flex w-full justify-center overflow-x-hidden">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 h-full p-4">
          {isPending && <div>Loading...</div>}
          {error && <div>Something went wrong!</div>}
          {!isPending && !error && !data && <div>No chat data found!</div>}
          {data?.history?.map((message, i) => (
            <div
              key={i}
              className={`flex w-full ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.img && (
                <IKImage
                  urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                  path={message.img}
                  height="300"
                  width="400"
                  transformation={[{ height: 300, width: 400 }]}
                  loading="lazy"
                  lqip={{ active: true, quality: 20 }}
                />
              )}

              <div
                className={`rounded-md px-4 py-2 ${
                  message.role === "user"
                    ? "bg-[#2c2937] text-white max-w-[80%] self-end"
                    : " self-start"
                }`}
              >
                <Markdown>{message.parts?.[0]?.text || "No message content"}</Markdown>
              </div>
            </div>
          ))}
          { data &&< Newprompt data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
