import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

type SideBarSections = {
  id: string;
  name: string;
  src?: string;
  link?: React.RefObject<HTMLDivElement | null>;
};

type NavItemsType = {
  id: string;
  name: string;
  link?: React.RefObject<HTMLDivElement | null>;
};

type SideBarProps = {
  onClose: () => void;
  navItems: NavItemsType[];
  scrollTo: (ref: React.RefObject<HTMLDivElement | null> | undefined) => void;
};

export const SideBar: React.FC<SideBarProps> = ({
  onClose,
  navItems,
  scrollTo,
}: SideBarProps) => {
  const sidebarSections: SideBarSections[] = [
    {
      id: "home",
      name: "HOME",
    },
    {
      id: "about",
      name: "ABOUT",
      link: navItems.find((item) => item.id === "about")?.link,
    },
    {
      id: "collection",
      name: "COLLECTION",
      link: navItems.find((item) => item.id === "collection")?.link,
    },
    {
      id: "shop",
      name: "SHOP",
      link: navItems.find((item) => item.id === "shop")?.link,
    },
    {
      id: "contact",
      name: "CONTACT",
      link: navItems.find((item) => item.id === "contact")?.link,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-[100dvh] w-2/3 p-5 right-0 bottom-0 sidebar-bg text-white z-50 fixed overflow-y-hidden"
    >
      <div className="h-5/6 flex flex-col justify-start">
        <div className="flex justify-end h-1/6">
          <IoMdCloseCircleOutline onClick={() => onClose()} size={30} />
        </div>
        <ul className="flex flex-col space-y-8 pt-5 h-5/6">
          {sidebarSections.map((section) => (
            <li
              className="text-sm"
              key={section.id}
              onClick={() => {
                if (section.link) {
                  scrollTo(section.link);
                }
                onClose();
              }}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
