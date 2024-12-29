import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AddListFormSchema } from "@/schemas/FormSchemas";
import { useCreateLandlordMutation } from "@/store/apis/apis";
import { IError } from "@/interfaces";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setSteps } from "@/store/features/stepsAddLidting/stepsSlice";
import { addToLandlordData } from "@/store/features/UserData/userData";

const StepOne = () => {
  const [landLordData, { isLoading, error, isSuccess }] =
    useCreateLandlordMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  // 1. Define your form.
  const form = useForm<z.infer<typeof AddListFormSchema>>({
    resolver: zodResolver(AddListFormSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
    },
  });

  // Handling
  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof AddListFormSchema>) {
    const formattedData = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      PhoneNumber: data.PhoneNumber,
    };

    try {
      const response = await landLordData(formattedData).unwrap();
      const steps = {
        stepOne: false,
        stepTwo: true,
        stepThree: false,
      };
      console.log(response);
      
      dispatch(addToLandlordData(response));
      dispatch(setSteps(steps));
    } catch (err) {
      const errorMsg =
        (err as IError)?.message || "An error occurred.";
      setErrorMessage(errorMsg);
    }
  }

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-y-4 lg:gap-y-8">
      <div className="w-fit xl:w-[50%] flex flex-col justify-center gap-3 lg:gap-6">
        <span className="text-primary text-xl lg:text-3xl">Step 1.</span>

        <DialogTitle className="text-md lg:text-lg">
          Tell Us About Yourself : Let’s Get Started
        </DialogTitle>

        <DialogDescription className="text-sm lg:text-md">
          We’d love to connect with you! Provide your contact information so we
          can offer the best proposal for your property and get the most out of
          your listing.
        </DialogDescription>
      </div>

      {/* Form */}
      <div className="w-full lg:w-[60%] xl:w-[30%]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 lg:space-y-4"
          >
            <FormField
              control={form.control}
              name="FirstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="LastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      className="p-6"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="PhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="p-6"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!isSuccess && error && (
              <p className="text-red-500">{errorMessage}</p>
            )}

            <div className="w-full flex justify-center">
              <Button
                className="w-full md:w-fit "
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex gap-x-2 items-center">
                    <Loader className="animate-spin" /> Loading...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
