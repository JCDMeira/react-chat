// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MyMessage: React.FC<any> = (props) => {
  const message = props?.message ?? [];
  const doesImage = !!message?.attachments && message?.attachments?.length > 0;

  return (
    <>
      {doesImage ? (
        <img
          src={message.attachments[0].file}
          alt="props?.message-attachment"
          className="props?.message-image"
          style={{ float: 'right', maxWidth: '200px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: 'right',
            marginRight: '18px',
            color: 'white',
            backgroundColor: '#3B2A50',
          }}
        >
          {message.text}
        </div>
      )}
    </>
  );
};
