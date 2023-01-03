import { Button } from "reactstrap";
import Link from "next/link";

function NotFoundPage({ statusCode }) {
  return (
    <div className="misc-wrapper">
      <title>Page Not Found </title>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
          <p className="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <Link href="/">
            <Button className="btn-sm-block mb-2">Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
