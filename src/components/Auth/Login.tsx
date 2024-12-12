"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import LoginImg from "/src/public/images/home-1.jpg";
import { motion } from "framer-motion";
import { useLoginUserMutation } from "@/store/apis/apis";
import { toast } from "@/hooks/use-toast";
import { Loader, LoaderCircle } from "lucide-react";
import { IError, IUser } from "@/interfaces";
import { useAppDispatch } from "@/store/hooks";
import { addToUserData } from "@/store/features/UserData/userData";
import { useRouter } from "next/navigation";
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
import { UserLoginSchema } from "@/schemas/FormSchemas";
import { Label } from "@radix-ui/react-dropdown-menu";

interface Iprops {
  changeToRegisterModle: () => void;
}

const Login = ({ changeToRegisterModle }: Iprops) => {
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
  const Router = useRouter();

  // Handler 
  const onSubmit = async (values: z.infer<typeof UserLoginSchema>) => {
    try {
      const response: IUser = await loginUser(values).unwrap();
      // Store user in cookies
      if (typeof window !== "undefined" )dispatch(addToUserData(response));

      toast({
        variant: "success",
        title: "Login Successful",
        description: "User logged in successfully!",
      });

      setTimeout(() => {
        Router.refresh();
      }, 2000);
    } catch (err) {
      setErrorMessage(
        (err as IError)?.data?.error?.message || "An error occurred."
      );
      toast({
        variant: "destructive",
        title: (err as IError)?.data?.error?.message,
        description:
          (err as IError)?.data?.error?.message || "Please try again.",
      });
    }
  };

  return (
    <div className="flex justify-start items-center">
      <div className="w-full xl:w-1/2 p-6 mt-8">
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
                  <FormControl>
                    <Label>Email or UserName</Label>
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
                  <FormControl>
                    <Label>Password</Label>
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

            {error && (
              <p className="text-red-800 text-sm mt-4">{errorMessage}</p>
            )}

            <div className="flex flex-col">
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sing Up
              </Button>

              <Button
                variant={"link"}
                className="text-sm text-textColor"
              >
                Login Now
              </Button>
            </div>
          </form>
        </Form>


          {!isSuccess && error && (
            <p className="text-red-800 text-sm">{errorMessage}</p>
          )}

          <div className="flex flex-col">
            <Button type="submit"  disabled={isLoading}>
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
