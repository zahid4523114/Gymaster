import React from "react";
import logo from "../../images/Frame.png";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "#222222" }}
        className="footer p-10 text-gray-300"
      >
        <div>
          <img src={logo} alt="" />
          <p>
            Design amazing digital experiences that <br /> create more happy in
            the world.
          </p>
          <div>
            <h1 className="flex items-center">
              <span className="text-2xl p-1 text-gray-500 mr-2 my-2 bg-white rounded-full">
                <CiLocationOn></CiLocationOn>
              </span>
              <span>3768 Stratford Court, Raleigh NC 27604</span>
            </h1>
            <h1 className="flex items-center">
              <span className="text-2xl p-1  text-gray-500 mr-2 my-2 bg-white rounded-full">
                <BsTelephone></BsTelephone>
              </span>
              <span>+1 620-263-8162</span>
            </h1>
            <h1 className="flex items-center">
              <span className="text-2xl  p-1 text-gray-500 mr-2 my-2 bg-white rounded-full">
                <CiMail></CiMail>
              </span>
              <span>info@furnimart.com</span>
            </h1>
          </div>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <Link className="link link-hover">Overview</Link>
          <Link className="link link-hover">Features</Link>
          <Link className="link link-hover">Solutions</Link>
          <Link className="link link-hover">Tutorials</Link>
          <Link className="link link-hover">Pricing</Link>
          <Link className="link link-hover">Releases</Link>
        </div>
        <div>
          <span className="footer-title">Resources</span>
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Newsletter</Link>
          <Link className="link link-hover">Events</Link>
          <Link className="link link-hover">Help Center</Link>
          <Link className="link link-hover">Tutorials</Link>
          <Link className="link link-hover">Support</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <Link className="link link-hover">Twitter</Link>
          <Link className="link link-hover">Linkedin</Link>
          <Link className="link link-hover">Facebook</Link>
          <Link className="link link-hover">GitHub</Link>
          <Link className="link link-hover">AngelList</Link>
          <Link className="link link-hover">Dribble</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer
        style={{ backgroundColor: "#222222" }}
        className="footer px-10 py-4 border-t text-gray-300 border-base-300"
      >
        <div className="items-center grid-flow-col">
          <p>© 2022 Furniture Store LLC. All rights reserved.</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
