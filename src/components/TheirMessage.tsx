// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TheirMessage: React.FC<any> = (props) => {
  const lastMessage = props?.lastMessage;
  const message = props?.message;

  const isFirstMessageByUser =
    !lastMessage || lastMessage?.sender?.username !== message?.sender?.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
            maxWidth: '200px',
          }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};
