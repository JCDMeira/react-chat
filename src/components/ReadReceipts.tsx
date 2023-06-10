/* eslint-disable @typescript-eslint/no-explicit-any */
export const ReadReceipts: React.FC<any> = ({ message, isMyMessage, chat }) => {
  return (
    <div>
      {chat?.people?.map(
        (person: any, index: number) =>
          person.last_read === message.id && (
            <div
              key={`read_${index}`}
              className="read-receipt"
              style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage:
                  person.person.avatar && `url(${person.person.avatar})`,
              }}
            />
          ),
      )}
    </div>
  );
};
