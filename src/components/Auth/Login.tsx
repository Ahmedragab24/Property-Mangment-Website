"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import LoginImg from "/src/public/images/home-1.jpg";
import { motion } from "framer-motion";
import { useLoginUserMutation } from "@/store/apis/apis";
import { toast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { IError, UserData } from "@/interfaces";
import { useAppDispatch } from "@/store/hooks";
import { addToUserData } from "@/store/features/UserData/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserLoginSchema } from "@/schemas/FormSchemas";

interface Iprops {
  changeToRegisterModle: () => void;
  closeModel: () => void;
}

const Login = ({ changeToRegisterModle , closeModel }: Iprops) => {
  const [loginUser, { isLoading, error, isSuccess }] = useLoginUserMutation();
  const form = useForm<z.infer<typeof UserLoginSchema>>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  // Handler
  const onSubmit = async (values: z.infer<typeof UserLoginSchema>) => {
    try {
      const response: UserData = await loginUser(values).unwrap();
      console.log(response);
      
      // Store user in cookies
      if (typeof window !== "undefined") dispatch(addToUserData(response));

      toast({
        variant: "success",
        title: "Login Successful",
        description: "User logged in successfully!",
      });

      setTimeout(() => {
        closeModel();
      }, 2000);
    } catch (err) {
      setErrorMessage(
        (err as IError)?.message || "An error occurred."
      );
      toast({
        variant: "destructive",
        title: (err as IError)?.message,
        description:
          (err as IError)?.message || "Please try again.",
      });
    }
  };

  return (
    <div className="flex justify-start items-center">
      <div className="w-full xl:w-1/2 p-6">
        <h2 className="text-foreground text-xl lg:text-3xl text-shadow-primary">
          Login now
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
          >
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or UserName</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Email or UserName"
                      className="bg-background h-11 shadow-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="bg-background h-11 shadow-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!isSuccess && error && (
              <p className="text-red-800 text-sm">{errorMessage}</p>
            )}

            <div className="flex flex-col">
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>

              <Button
                variant={"link"}
                className="text-sm text-textColor"
                onClick={() => changeToRegisterModle()}
              >
                Or New Register
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden xl:block absolute top-10 -right-28 shadow-xl"
      >
        <Image
          src={LoginImg}
          alt="Login"
          width={500}
          height={500}
          loading="lazy"
          className="w-[430px] h-[350px] rounded-xl shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Login;
