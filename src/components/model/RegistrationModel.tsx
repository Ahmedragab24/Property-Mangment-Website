import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import dynamic from "next/dynamic";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { Button } from "../ui/button";

const MotionUp = dynamic(() => import("@/components/animations/MotionUp"), {
  ssr: false,
});

interface IProps {
  children?: ReactNode;
}

type TypeModle = "login" | "register";

const RegistrationModel = ({ children }: IProps) => {
  const [typeModel, setTypeModel] = useState<TypeModle>("login");
  const [checkLogin, setcheckLogin] = useState(true);
  const [checkRegister, setcheckRegister] = useState(false);

  // Handling
  const changeToRegisterModle = () => {
    setTypeModel("register");
    setcheckLogin(false);
    setcheckRegister(true);
  };

  const changeToLoginModle = () => {
    setTypeModel("login");
    setcheckLogin(true);
    setcheckRegister(false);
  };

  if (typeModel === "login") {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="p-14 sm:max-w-[60%] xl:py-16 xl:px-20">
          <DialogTitle>
            <VisuallyHidden>Modal Title</VisuallyHidden>
          </DialogTitle>

          <DialogDescription>
            <VisuallyHidden>Modal description</VisuallyHidden>
          </DialogDescription>
          <MotionUp className="h-auto xl:h-[450px] bg-secondary rounded-xl shadow-xl relative xl:mr-24 duration-500">
            <div className="flex xl:justify-start gap-4 px-6 pt-4">
              <Button
                variant={`${checkLogin ? "default" : "secondary"}`}
                size={"lg"}
                onClick={changeToLoginModle}
              >
                Login
              </Button>
              <Button
                variant={`${checkRegister ? "default" : "secondary"}`}
                size={"lg"}
                onClick={changeToRegisterModle}
              >
                Register
              </Button>
            </div>

            <Login changeToRegisterModle={changeToRegisterModle} />
          </MotionUp>
        </DialogContent>
      </Dialog>
    );
  }
  // Registrations
  else if (typeModel === "register") {
    return (
      <Dialog>
        {children ? (
          <DialogTrigger asChild>{children}</DialogTrigger>
        ) : (
          <DialogTrigger>open</DialogTrigger>
        )}
        <DialogContent className="p-14 sm:max-w-[60%] xl:py-16 xl:px-20">
          <DialogTitle>
            <VisuallyHidden>Modal Title</VisuallyHidden>
          </DialogTitle>
          <DialogDescription>
            <VisuallyHidden>Modal description</VisuallyHidden>
          </DialogDescription>
          <MotionUp className="h-auto xl:h-[450px] bg-secondary rounded-xl shadow-xl relative xl:ml-24 duration-500">
            <div className="flex xl:justify-end gap-4 px-6 pt-4">
              <Button
                variant={`${checkLogin ? "default" : "secondary"}`}
                size={"lg"}
                onClick={changeToLoginModle}
              >
                Login
              </Button>
              <Button
                variant={`${checkRegister ? "default" : "secondary"}`}
                size={"lg"}
                onClick={changeToRegisterModle}
              >
                Register
              </Button>
            </div>

            <Register changeToLoginModle={changeToLoginModle} />
          </MotionUp>
        </DialogContent>
      </Dialog>
    );
  }
};

export default RegistrationModel;
