import React from 'react';
import { MyMessage, TheirMessage, ReadReceipts } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Messages: React.FC<any> = ({ messages, userName, chat }) => {
  const keys = Object.keys(messages);

  return keys.map((key, index) => {
    const message = messages[key];
    const lastMessageKey = index === 0 ? 0 : keys[index - 1];
    const isMyMessage = userName === message.sender.username;

    return (
      <div key={`msg_${index}`} style={{ width: '100%' }}>
        <div className="message-block">
          {isMyMessage ? (
            <MyMessage message={message} />
          ) : (
            <TheirMessage
              message={message}
              lastMessage={messages[lastMessageKey]}
            />
          )}
        </div>
        <div
          className="read-receipts"
          style={{
            marginRight: isMyMessage ? '18px' : '0px',
            marginLeft: isMyMessage ? '0px' : '68px',
          }}
        >
          <ReadReceipts
            message={message}
            isMyMessage={isMyMessage}
            chat={chat}
          />
        </div>
      </div>
    );
  });
};
