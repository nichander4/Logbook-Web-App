import { Button } from "reactstrap";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="misc-wrapper">
      <title>Maintenance</title>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Under Maintenance 🕵🏻‍♀️</h2>
          <p className="mb-2">
            Oops! 😖 The requested URL under maintenance on this server.
          </p>
          <Link href="/">
            <Button className="btn-sm-block mb-2">Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
