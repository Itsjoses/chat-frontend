import { ConversationCheck } from "@/types/globalTypes";
import React from "react";

export default function OtherBubbleChat({
  startConversation,
  endConversation,
  data,
}: ConversationCheck) {
  return (
    <div className={`py-0.5${startConversation ? " mt-4" : ""}`}>
      <div className="flex items-center w-4/5">
        <div className="profile-container pr-2">
          <div
            className={`left rounded-full bg-black w-6 h-6 profile ${
              endConversation ? "inherit" : "opacity-0"
            }`}
          ></div>
        </div>
        <span
          className={`py-2 px-3 text-black bg-gray-300 rounded-br-roundedAll break-words rounded-tr-roundedAll 2xl:max-w-4xl xl:max-w-2xl lg:max-w-sm md:max-w-xs sm:max-w-sm ${
            startConversation ? " rounded-tl-roundedAll " : " rounded-tl-roundedBubble "
          } ${endConversation ? " rounded-bl-roundedAll" : " rounded-bl-roundedBubble"}`}
        >
          {data.message}
        </span>
      </div>
    </div>
  );
}
