import Link from "next/link";
import NextImage from "./Image";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          {/* <NextImage
            src="/strapi.png"
            alt="home"
            className="logo"
            height="44"
            width="150"
          /> */}
          <Logo />
        </a>
      </Link>
      <div className="flex justify-center items-center space-x-4">
        <button className="flex items-center">
          <NextImage height="25" width="25" src="/shopping-bag.svg" alt="Cart" />{" "}
        </button>
        <div className="flex justify-center items-center space-x-4">
          {/* <div className="w-10 h-10 bg-indigo-500 rounded-full text-center leading-10 text-white font-medium">
            YL
          </div> */}
          <Link href='login'>
            <a className="font-semibold text-gray-400 hover:text-gray-500" href="">Iniciar sesion</a>
          </Link>
          <Link href='registrarse'>
            <a className="font-semibold text-indigo-600 hover:text-indigo-400"  href="">Registrarse</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//
