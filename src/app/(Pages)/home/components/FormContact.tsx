"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const FormContact = () => {
  // Handler
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form-contact">
      <h2 className="section-title text-3xl text-center mb-4">Talk to Us</h2>

      {/* <!-- Name --> */}
      <div className="form-group relative">
        <label htmlFor="formName" className="block">
          <i className="icon" data-feather="user"></i>
        </label>
        <input
          type="text"
          id="formName"
          className="form-control py-2 px-10 rounded-md mb-4 bg-background !text-foreground focus:outline-none focus:ring focus:ring-primary border border-primary"
          placeholder="Name"
        />
      </div>

      {/* <!-- E-mail --> */}
      <div className="form-group position-relative">
        <label htmlFor="formEmail" className="block">
          <i className="icon" data-feather="mail"></i>
        </label>
        <input
          type="email"
          id="formEmail"
          className="form-control py-2 px-10 rounded-md mb-4 bg-background !text-foreground focus:outline-none focus:ring focus:ring-primary border border-primary"
          placeholder="E-mail"
        />
      </div>

      {/* <!-- Message --> */}
      <div className="form-group message">
        <textarea
          id="formMessage"
          className="form-control form-control-lg  py-2 px-10 rounded-md mb-2 bg-background !text-foreground focus:outline-none focus:ring focus:ring-primary border border-primary"
          rows={7}
          placeholder="Message"
        ></textarea>
      </div>

      {/* <!-- Submit btn --> */}
      <div className="text-center">
        <Button
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            handlerSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
          }}
        >
          Send message
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
