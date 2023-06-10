/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MessageForm, Messages } from '.';

export const ChatFeed: React.FC<any> = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  return (
    <>
      {!chat ? (
        <div />
      ) : (
        <div className="chat-feed">
          <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
              {chat.people.map((person: any) => ` ${person.person.username}`)}
            </div>
          </div>
          <Messages userName={userName} messages={messages} chat={chat} />
          <div style={{ height: '100px' }} />
          <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat} />
          </div>
        </div>
      )}
    </>
  );
};
