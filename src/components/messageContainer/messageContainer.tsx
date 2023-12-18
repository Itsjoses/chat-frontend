"use client";
import React, {
  FormEvent,
  ReactNode,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";
import Conversation from "../profile/profile";
import MineBubbleChat from "../bubbleChat/mineBubbleChat";
import OtherBubbleChat from "../bubbleChat/otherBubbleChat";
import MessageList from "../messageList/messageList";
import { Message } from "@/types/globalTypes";

export default function MessageContainer() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const x: boolean = true;
  const y: boolean = true;

  const [message, setMessage] = useState<Message[]>([
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      },
    {
      author: "orange",
      message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
  ]);

  const onSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage((prev) => [...prev, { author: "apple", message: inputMessage }]);
    setInputMessage("");
  };
  return (
    <div className="block h-screen w-full">
      <div className="flex flex-col h-full">
        {/* <div className="p-4">
          <div className="profile-container pr-2">
            <div className={`left rounded-full bg-black w-6 h-6 profile`}></div>
          </div>
        </div> */}
        <MessageList allMessage={message} />
        <div className="p-4">
          <form action="" onSubmit={onSubmitMessage}>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-full outline-none border border-slate-300"
              placeholder="Message..."
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
