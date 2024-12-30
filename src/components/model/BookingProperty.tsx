import React, { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookingData, IError } from "@/interfaces";
import { useCreateBookingMutation } from "@/store/apis/apis";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { CheckCheck, LoaderCircle, PhoneCall } from "lucide-react";
import { DatePicker } from "@/app/(Pages)/property/components/DatePicker";
import { useAppSelector } from "@/store/hooks";
import RegistrationModel from "./RegistrationModel";
import Link from "next/link";

interface Iprops {
  children: ReactNode;
  propertyID: string;
  price: number;
}

const BookingProperty = ({ children, propertyID, price }: Iprops) => {
  const [bookingData, { isLoading, error, isSuccess }] =
    useCreateBookingMutation();
  const userData = useAppSelector((state) => state.UserData?.user);
  const [errorMessage, setErrorMessage] = useState("");
  const [DateDays, setDateDays] = useState<{
    CheckIN: Date | null;
    CheckOut: Date | null;
  }>({ CheckIN: null, CheckOut: null });
  const [Price, setPrice] = useState<number>(price);
  const [BookingDataState, setBookingDataState] = useState<BookingData>({
    userName: "",
    email: "",
    phoneNumber: "",
    properties: propertyID,
    checkIn: null,
    checkOut: null,
    price: Price,
  });

  useEffect(() => {
    if (DateDays.CheckIN && DateDays.CheckOut) {
      const checkInDate = new Date(DateDays.CheckIN);
      const checkOutDate = new Date(DateDays.CheckOut);

      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const calculatedDays = timeDiff / (1000 * 60 * 60 * 24);

      setPrice(price * (calculatedDays > 0 ? calculatedDays : 0));
    }
  }, [DateDays, price]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingDataState((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSendData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await bookingData(BookingDataState).unwrap();
      toast({
        variant: "success",
        title: "Send Data Successful",
        description:
          "Your data has been sent successfully. You will be contacted within two hours.",
      });
    } catch (err) {
      const errorMsg = (err as IError)?.message || "An error occurred.";
      setErrorMessage(errorMsg);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMsg,
      });
    }
  };

  return (
    <div className="relative">
      {userData ? (
        <Dialog>
          <DialogTrigger>{children}</DialogTrigger>
          {!isSuccess ? (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Register your data now</DialogTitle>
                <DialogDescription>
                  After registering the data, you will be contacted within 4
                  hours to complete the application and receive your rented
                  apartment.
                </DialogDescription>
              </DialogHeader>
              <Input
                name="userName"
                type="text"
                placeholder="Enter Username"
                className="bg-background h-11 shadow-xl"
                value={BookingDataState.userName}
                onChange={handleInputChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-background h-11 shadow-xl"
                value={BookingDataState.email}
                onChange={handleInputChange}
              />
              <Input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                className="bg-background h-11 shadow-xl"
                value={BookingDataState.phoneNumber}
                onChange={handleInputChange}
              />
              <div className="grid md:grid-cols-2 gap-3">
                <DatePicker
                  placeHolder="Check In"
                  onChange={(date) => {
                    setBookingDataState((data) => ({
                      ...data,
                      checkIn: date,
                    }));
                    setDateDays((prev) => ({ ...prev, CheckIN: date }));
                  }}
                />
                <DatePicker
                  placeHolder="Check Out"
                  onChange={(date) => {
                    setBookingDataState((data) => ({
                      ...data,
                      checkOut: date,
                    }));
                    setDateDays((prev) => ({ ...prev, CheckOut: date }));
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
                <h1 className="text-xl">This is the</h1>
                <div className="px-6 py-2 bg-secondary text-2xl text-primary border border-primary rounded-full shadow-lg">
                  ${Price.toFixed(2)}
                </div>
                <h2 className="text-xl">total price</h2>
              </div>
              {!isSuccess && error && (
                <p className="text-red-500">{errorMessage}</p>
              )}
              <Button type="submit" onClick={handleSendData}>
                {isLoading ? (
                  <div className="flex gap-x-2">
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    <h2>Loading...</h2>
                  </div>
                ) : (
                  "Send Data"
                )}
              </Button>
            </DialogContent>
          ) : (
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-x-2">
                  <CheckCheck /> Your data has been sent successfully.
                </DialogTitle>
                <DialogDescription>
                  We will contact you within 4 hours. For urgent matters, call:
                </DialogDescription>
              </DialogHeader>
              <DialogTitle className="flex items-center gap-x-2 cursor-pointer text-primary hover:underline">
                <PhoneCall /> <Link href="tel:123456789">+(123) 456 789</Link>
              </DialogTitle>
            </DialogContent>
          )}
        </Dialog>
      ) : (
        <RegistrationModel>
          <Button className="rounded-full" variant={"outline"}>
            Book now
          </Button>
        </RegistrationModel>
      )}
    </div>
  );
};

export default BookingProperty;
