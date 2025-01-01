"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { setSteps } from "@/store/features/stepsAddLidting/stepsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ScrollText } from "lucide-react";
import { useState } from "react";

const StepTwo = () => {
  const { landlord } = useAppSelector((state) => state.UserData);
  const dispatch = useAppDispatch();
  const [IsCheckbox, setIsCheckbox] = useState({
    terms: false,
    commission: false,
    company: false,
  });
  const [isAgree, setIsAgree] = useState(false);

  // Update the state when a checkbox is checked or unchecked
  const handleCheckboxChange = (key: "terms" | "commission" | "company") => {
    setIsCheckbox((prevState) => {
      const updatedState = {
        ...prevState,
        [key]: !prevState[key], // Toggle the checkbox value
      };

      // Check if all checkboxes are checked
      const allChecked = Object.values(updatedState).every((value) => value);
      setIsAgree(allChecked); // Set isAgree state based on all checkboxes

      return updatedState;
    });
  };

  const HandelSubmit = () => {
    if (isAgree) {
      dispatch(setSteps({ stepOne: false, stepTwo: false, stepThree: true }));
    } else {
      alert("Please agree to the terms and conditions");
    }
  };

  return (
    <ScrollArea className="h-[500px] lg:h-[400px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-between gap-y-10 gap-x-4 md:flex-row">
          <div className="flex flex-col gap-8 md:max-w-[50%]">
            <span className="text-3xl text-primary">Step 2</span>
            <p className="text-sm text-textColor">
              This is a general declaration to preserve any differences or
              violations to guarantee your rights in renting the property and to
              guarantee your money and also to guarantee the rights of the
              company.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={IsCheckbox.terms}
                  onCheckedChange={() => handleCheckboxChange("terms")}
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={IsCheckbox.commission}
                  onCheckedChange={() => handleCheckboxChange("commission")}
                  id="commission"
                />
                <label
                  htmlFor="commission"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept that the commission charged on the total price is 10%
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={IsCheckbox.company}
                  onCheckedChange={() => handleCheckboxChange("company")}
                  id="company"
                />
                <label
                  htmlFor="company"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree that the company will handle all matters and mediate
                  with the client.
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 p-10 rounded-lg bg-secondary md:w-[50%] text-center">
            <h1 className="text-xl md:text-2xl text-primary">
              Real state company
            </h1>
            <p className="-mt-4">Acknowledgement</p>
            <h1 className="text-2xl text-primary">
              {landlord?.FirstName} {landlord?.LastName}
            </h1>
            <hr />
            <p className="mb-4 text-sm text-textColor">
              I agree to all terms and policies and agree to the commission
              imposed by the company, which is 10% of the total price. This
              company is an intermediary between me, the property owner, and the
              tenant.
            </p>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <h4>Ahmed Rashed</h4>
                <p>CEO</p>
              </div>
              <ScrollText size={35} className="text-primary" />
              <div className="text-sm">
                <h4>Hazem Ali</h4>
                <p>General Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button onClick={HandelSubmit} disabled={!isAgree}>
            Next step
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default StepTwo;
