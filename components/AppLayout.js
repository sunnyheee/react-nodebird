import PropsTypes from "prop-types";
import Link from "next/Link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>NODEBIRD</a>
        </Link>
        <Link href="/profile">
          <a>PROFILE</a>
        </Link>
        <Link href="/signup">
          <a>SIGNUP</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.PropsTypes = {
  children: PropsTypes.node.isRequired,
};
export default AppLayout;
