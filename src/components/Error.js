import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <h2>{status + ": " + statusText}</h2>
    </div>
  );
};

export default Error;
