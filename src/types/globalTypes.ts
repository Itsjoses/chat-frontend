export type ConversationCheck = {
  startConversation: boolean;
  endConversation: boolean;
  data: Message;
};

export type Message = {
  author: string;
  message: string|undefined|null;
};

export type AllMessage = {
    allMessage: Message[];
  };

export type ProfileData = {
  room: string
}

export type allProfileData = {
  profileData: ProfileData[]
}

export type senderRoom={
  targetRoom: string,
  sourceRoom: string
}