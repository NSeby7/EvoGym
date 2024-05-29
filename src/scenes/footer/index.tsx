import Logo from "@/assets/Logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
 const year = new Date().getFullYear();
 const linksStyles = ` my-5 w-[35px] h-[35px] rounded-full text-center leading-9 ease-linear transition duration-500 hover:text-primary-500`;

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© {year} Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">LINKS</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
            <FaFacebookF className={linksStyles} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={linksStyles} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={linksStyles} />
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">CONTACT US</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
