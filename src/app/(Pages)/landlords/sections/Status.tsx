import { StatusCompany } from "@/constants";
import React from "react";

const Status = () => {
  return (
    <section>
      <div className="mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {StatusCompany.map(({num,title}, index) => (
          <div key={index} className="px-28 py-8 w-fit bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group">
            <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
              {num}
            </h2>
            <p className="leading-relaxed">{title}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
