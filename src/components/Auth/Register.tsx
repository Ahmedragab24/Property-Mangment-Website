import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import RegisterImg from "/src/public/images/home-2.jpg";
import { motion } from "framer-motion";
import { useRegisterUserMutation } from "@/store/apis/apis";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { IError, RegisterForm } from "@/interfaces";

interface Iprops {
  changeToLoginModle?: () => void;
}

const Register = ({ changeToLoginModle }: Iprops) => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const [userData, setUserData] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser(userData).unwrap();
      toast({
        variant: "success",
        title: "Registration Successful",
        description: "User registered successfully!",
      });
      setTimeout(() => {
        changeToLoginModle?.();
      }, 2000);
    } catch (err) {
      setErrorMessage((err as IError)?.data?.error?.message);
      toast({
        variant: "destructive",
        title: (err as IError)?.data?.error?.message,
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
        <h2 className="text-foreground text-3xl text-shadow-primary">
          Register now
        </h2>
        {error && <p className="text-red-800 text-xl mt-4">{errorMessage}</p>}
        <form className="mt-6 space-y-4">
          <Input
            name="username"
            type="text"
            placeholder="UserName"
            className="bg-background h-11 shadow-xl"
            value={userData.username}
            onChange={handleInputChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-background h-11 shadow-xl"
            value={userData.email}
            onChange={handleInputChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            className="bg-background h-11 shadow-xl"
            value={userData.password}
            onChange={handleInputChange}
          />
          <div className="flex flex-col">
            <Button type="submit" onClick={handleRegister} disabled={isLoading}>
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
      </div>
    </div>
  );
};

export default Register;
