import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import RegisterImg from "/src/public/images/home-2.jpg";
import { motion } from "framer-motion";
import { useRegisterUserMutation } from "@/store/apis/apis";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { IError, UserData } from "@/interfaces";
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
import { UserRegisterSchema } from "@/schemas/FormSchemas";

interface Iprops {
  changeToLoginModle?: () => void;
}

const Register = ({ changeToLoginModle }: Iprops) => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const form = useForm<z.infer<typeof UserRegisterSchema>>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handler
  const onSubmit = async (values: z.infer<typeof UserRegisterSchema>) => {
    try {
      const respons: UserData = await registerUser(values).unwrap();
      toast({
        variant: "success",
        title: `Congratulations, ${respons.name} Registration Successful`,
        description: "User registered successfully!",
      });
      setTimeout(() => {
        changeToLoginModle?.();
      }, 2000);
    } catch (err) {
      setErrorMessage((err as IError)?.message);
      toast({
        variant: "destructive",
        title: (err as IError)?.message,
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-end">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden xl:block absolute top-10 -left-28 shadow-xl"
      >
        <Image
          src={RegisterImg}
          alt="Login"
          width={500}
          height={500}
          loading="lazy"
          className="w-[430px] h-[350px] rounded-xl shadow-xl"
        />
      </motion.div>
      <div className="w-full xl:w-1/2 p-6">
        <h2 className="text-foreground text-xl lg:text-3xl text-shadow-primary">
          Register now
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="UserName"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
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
                onClick={() => changeToLoginModle?.()}
              >
                Login Now
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
