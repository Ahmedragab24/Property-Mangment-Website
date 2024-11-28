"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import LoginImg from "/src/public/images/home-1.jpg";
import { motion } from "framer-motion";
import { useLoginUserMutation } from "@/store/apis/apis";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { IError, IUser, LoginForm } from "@/interfaces";
import { useAppDispatch } from "@/store/hooks";
import { addToUserData } from "@/store/features/UserData/userData";
import { useRouter } from "next/navigation";

interface Iprops {
  changeToRegisterModle: () => void;
}

const Login = ({ changeToRegisterModle }: Iprops) => {
  const [loginUser, { isLoading, error, isSuccess }] = useLoginUserMutation();
  const [userData, setUserData] = useState<LoginForm>({
    identifier: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const Router = useRouter();

  // Handler to manage input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response: IUser = await loginUser(userData).unwrap();
      // Store user in cookies
      if (typeof window !== "undefined") {
        dispatch(addToUserData(response));
      }

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
      <div className="w-full xl:w-1/2 p-6 mt-2">
        <h2 className="text-foreground text-3xl text-shadow-primary">
          Login now
        </h2>
        {!isSuccess && error && (
          <p className="text-red-800 text-xl">{errorMessage}</p>
        )}
        <div className="mt-8 space-y-8">
          <Input
            name="identifier"
            type="text"
            placeholder="Enter Username or Email"
            className="bg-background h-11 shadow-xl"
            value={userData.identifier}
            onChange={handleInputChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            className="bg-background h-11 shadow-xl"
            value={userData.password}
            onChange={handleInputChange}
          />
          <div className="flex flex-col">
            <Button type="button" onClick={handleLogin} disabled={isLoading}>
              {isLoading && (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              )}
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
