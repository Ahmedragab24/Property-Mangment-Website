import { z } from "zod";

export const UserRegisterSchema = z.object({
  username: z.string().min(2, {
    message: "UserName must be at least 3 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be example@example.com",
    })
    .email({ message: "Invalid email format." }),
  password: z.string().min(2, {
    message: "Username must be at least 6 characters.",
  }),
});

export const UserLoginSchema = z.object({
  identifier: z.string().min(2, {
    message: "UserName must be at least 3 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 6 characters.",
  }),
});

export const AddListFormSchema = z.object({
  FirstName: z.string().min(2, {
    message: "First Name must be at least 3 characters.",
  }),
  LastName: z.string().min(2, {
    message: "Last Name must be at least 3 characters.",
  }),
  Email: z
    .string()
    .min(2, {
      message: "Email must be example@example.com",
    })
    .email({ message: "Invalid email format." }),
  PhoneNumber: z.string().min(10, {
    message: "Phone Number must be at least 10 characters.",
  }),
});

export const PropertyDataSchema = z.object({
  title: z.string().min(2, {
    message: "First Name must be at least 3 characters.",
  }),
  description: z.string().min(2, {
    message: "Last Name must be at least 3 characters.",
  }),
  image: z.string().min(2, {
    message: "Email must be example@example.com",
  }),
  date: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  room: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  kitchen: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bathroom: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  NumPerson: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.number().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  imageGroup: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  info: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  locationName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  locationGoogleMap: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

