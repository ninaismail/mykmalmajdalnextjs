import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div 
        className={`lg:text-xl xlg:text-l text-md nav__link ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;