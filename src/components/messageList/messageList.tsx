"use client"
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import MineBubbleChat from '../bubbleChat/mineBubbleChat';
import OtherBubbleChat from '../bubbleChat/otherBubbleChat';
import { AllMessage, Message } from '@/types/globalTypes';

export default function MessageList( {allMessage}: AllMessage) {
  const [tempMessage,setTempMessage] = useState<ReactNode[]>([]);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderMessage();
    scrollToBottom();
  }, [allMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [tempMessage]);

  function scrollToBottom() {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }
  function renderMessage() {
    let i = 0;
    let messageCount = allMessage.length;
    let tempMessageList: ReactNode[] = []
    while (i < messageCount) {
      let previousMessage = allMessage[i - 1];
      let currentMessage = allMessage[i];
      let nextMessage = allMessage[i + 1]; // Fixed index for nextMessage
      let whoMessage = currentMessage.author === 'apple';
      let prevAuthorMessage = false;
      let nextAuthorMessage = false;
      let startMessage = true;
      let endMessage = true;

      if (previousMessage) {
        prevAuthorMessage = previousMessage.author === currentMessage.author;
        if (prevAuthorMessage) {
          startMessage = false;
        }
      }

      if (nextMessage) {
        nextAuthorMessage = nextMessage.author === currentMessage.author;
        if (nextAuthorMessage) {
          endMessage = false;
        }
      }

      if (whoMessage) {
        tempMessageList.push(<MineBubbleChat
            key={i} // Added key prop for React list rendering
            startConversation={startMessage}
            endConversation={endMessage}
            data={currentMessage}
          />)
      } else {
        tempMessageList.push(
          <OtherBubbleChat
            key={i} // Added key prop for React list rendering
            startConversation={startMessage}
            endConversation={endMessage}
            data={currentMessage}
          />)
      }
      i++;
    }
    setTempMessage(tempMessageList)
  }

  return  <div className=" h-full overflow-y-auto" ref={messageContainerRef}>
  <div className="px-4">
  <div >{tempMessage.map(e => e)}</div>
  </div>
</div>
}
