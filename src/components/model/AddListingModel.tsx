import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface IProps {
  className?: string;
  variant?: "outline" | "secondary" | "ghost";
  placeHolder?: string;
}

const AddListingModel = ({ className, variant, placeHolder }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {placeHolder ? placeHolder : "Add a Listing"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80%] p-10">
        <div className="w-full flex justify-end items-center gap-x-44 mt-4 mb-10">
          <div className="flex gap-x-2">
            <span className="w-[200px] h-1 p-1 bg-primary rounded-2xl cursor-pointer"></span>
            <span className="w-[200px] h-1 p-1 bg-gray-400 rounded-2xl cursor-pointer"></span>
            <span className="w-[200px] h-1 p-1 bg-gray-400 rounded-2xl cursor-pointer"></span>
          </div>

          <Button variant={"outline"} className="">
            Speak to Us
          </Button>
        </div>

        <div className="flex justify-between">
          <div className="w-[50%]">
            <span>Step 1.</span>

            <DialogTitle>Tell Us About Yourself: Let’s Get Started</DialogTitle>

            <DialogDescription>
              We’d love to connect with you! Provide your contact information so
              we can offer the best proposal for your property and get the most
              out of your listing.
            </DialogDescription>
          </div>
          <div className="flex flex-col gap-y-2 w-[30%]">
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="p-6"
            />
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="p-6"
            />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="p-6"
            />
            <Input
              id="PhoneNumber"
              type="number"
              placeholder="Phone Number"
              className="p-6"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddListingModel;
