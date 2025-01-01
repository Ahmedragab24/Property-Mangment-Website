"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Phone } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import StepThree from "./StepThree";
import { setSteps } from "@/store/features/stepsAddLidting/stepsSlice";

interface IProps {
  className?: string;
  variant?: "outline" | "secondary" | "ghost";
  placeHolder?: string;
}

const AddListingModel = ({ className, variant, placeHolder }: IProps) => {
  const { stepOne, stepTwo, stepThree } = useAppSelector(
    (state) => state.steps
  );
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // Handler for Back button
  const HandlerBack = () => {
    if (stepTwo)
      dispatch(setSteps({ stepOne: true, stepTwo: false, stepThree: false }));
    else if (stepThree)
      dispatch(setSteps({ stepOne: false, stepTwo: true, stepThree: false }));
  };

  useEffect(() => {
    // Close the dialog when all steps are false
    if (!stepOne && !stepTwo && !stepThree) {
      setIsOpen(false);
      setTimeout(() => {
        dispatch(setSteps({ stepOne: true, stepTwo: false, stepThree: false }));
      }, 2000);
    }
  }, [stepOne, stepTwo, stepThree, dispatch]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {placeHolder ? placeHolder : "Add a Listing"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80%] p-7 xl:p-11">
        <DialogHeader>
          <div className="flex items-center justify-between w-full mt-2 mb-4 xl:justify-center xl:gap-x-44 xl:mt-5 xl:mb-10">
            <div className="flex gap-2">
              <span
                className={`w-[40px] md:w-[100px] xl:w-[200px] h-1 p-1 rounded-2xl cursor-pointer ${
                  stepOne ? "bg-primary" : "bg-gray-400"
                }`}
              ></span>
              <span
                className={`w-[40px] md:w-[100px] xl:w-[200px] h-1 p-1 rounded-2xl cursor-pointer ${
                  stepTwo ? "bg-primary" : "bg-gray-400"
                }`}
              ></span>
              <span
                className={`w-[40px] md:w-[100px] xl:w-[200px] h-1 p-1 rounded-2xl cursor-pointer ${
                  stepThree ? "bg-primary" : "bg-gray-400"
                }`}
              ></span>
            </div>

            <Link href="tel:123456789">
              <Button
                variant={"outline"}
                size={"sm"}
                className="flex items-center gap-x-2"
              >
                Speak to Us <Phone size={15} />
              </Button>
            </Link>
          </div>
        </DialogHeader>
        {stepOne && <StepOne />}
        {stepTwo && <StepTwo />}
        {stepThree && <StepThree />}
        <DialogFooter>
          <Button
            variant={"outline"}
            disabled={stepOne}
            onClick={HandlerBack}
            className="w-fit"
          >
            Back
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddListingModel;
