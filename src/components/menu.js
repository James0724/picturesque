import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  // const [isJourneysOpen, setIsJourneysOpen] = useState(false);
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const closeExperiencesMenu = () => {
  //   setIsExperiencesOpen(false);
  // };

  return <nav className="colorlib-nav" role="navigation"></nav>;
};
