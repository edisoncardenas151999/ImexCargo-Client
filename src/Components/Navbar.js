import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img
          className="h-20 mr-3"
          src="https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/01/imex5-copy.png"
        />
      </Link>
      <ul>
        <li>
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/tracking">Tracking</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/services">Services</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact Us</CustomLink>
        </li>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <ul>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
