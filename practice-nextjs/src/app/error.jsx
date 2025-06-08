"use client";

const ErrorPage = ({error, reset}) => {
  return (
    <div className="container ">
      <div className="bg-red-200 my-7 p-5 rounded-2xl">
        <h1>Someting want wrong!!</h1>
        <h3>{error.message}</h3>
        <button onClick={reset} className="btn btn-error">Try Again</button>
      </div>
    </div>
  );
};

export default ErrorPage;
