import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t text-textColor body-font border-secondary">
      <div className="container flex flex-col flex-wrap px-5 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <span className="ml-3 text-xl text-primary">Real state</span>
          </a>
          <p className="mt-2 text-sm text-textColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-foreground title-font">
              CATEGORIES
            </h2>
            <ul className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-foreground title-font">
              CATEGORIES
            </h2>
            <ul className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-foreground title-font">
              CATEGORIES
            </h2>
            <ul className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-foreground title-font">
              CATEGORIES
            </h2>
            <ul className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-textColor hover:text-primary">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © {new Date().getFullYear()} PropEase —
            <a
              href="https://ahmed-elmadany.vercel.app/"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @Ahmed Elmadany
            </a>
          </p>

          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="cursor-pointer text-textColor hover:text-primary">
              <Facebook />
            </a>

            <a className="ml-3 cursor-pointer text-textColor hover:text-primary">
              <Twitter />
            </a>

            <a className="ml-3 cursor-pointer text-textColor hover:text-primary">
              <Instagram />
            </a>

            <a className="ml-3 cursor-pointer text-textColor hover:text-primary">
              <Linkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
