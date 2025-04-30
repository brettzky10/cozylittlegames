import { FC } from "react";

interface NavbarItemProps {
  label: string;
  link: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, link }) => {
  return (
    <a className="cursor-pointer text-white transition hover:text-gray-300" href={link}>
      {label}
    </a>
  );
};

export default NavbarItem;
