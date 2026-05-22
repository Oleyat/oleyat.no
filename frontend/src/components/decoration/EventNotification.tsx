import './EventNotification.css';


export const SuccessEvent = ({ text }: { text: string }) => {
  return (
    <>
      <div className="fixed top-25 right-100 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg fadeInOut">
        {text}
      </div>
    </>
  );
};

export const FailureEvent = ({ text }: { text: string }) => {
  return (
    <>
      <div className="fixed top-25 right-100 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg fadeInOut">
        {text}
      </div>
    </>
  );
};