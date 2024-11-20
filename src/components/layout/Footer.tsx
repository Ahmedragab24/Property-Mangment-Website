import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-textColor body-font border-t border-secondary">
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl text-primary">Real state</span>
          </a>
          <p className="mt-2 text-sm text-textColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-foreground title-font font-medium tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-foreground title-font font-medium tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-foreground title-font font-medium tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-foreground title-font font-medium tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-textColor hover:text-primary cursor-pointer">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Real state —
            <a
              href="https://my-portfolio-tau-six-75.vercel.app/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Ahmed ragab
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-textColor hover:text-primary cursor-pointer">
              <Facebook />
            </a>

            <a className="ml-3 text-textColor hover:text-primary cursor-pointer">
              <Twitter />
            </a>

            <a className="ml-3 text-textColor hover:text-primary cursor-pointer">
              <Instagram />
            </a>

            <a className="ml-3 text-textColor hover:text-primary cursor-pointer">
              <Linkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
