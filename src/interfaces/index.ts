export interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export interface LoginForm {
  identifier: string;
  password: string;
}

export interface IUser {
  user: {
    id: number;
    username: string;
    email: string;
    phone?: string;
  };
}
export interface ILandlord {
  data: {
    documentId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
}

export interface IError {
  data: {
    error: {
      message: string;
    };
  };
}

export type city = [
  | "cairo"
  | "london"
  | "new york"
  | "paris"
  | "tokyo"
  | "dubai"
  | "rome"
  | "sydney"
  | "moscow"
  | "singapore"
  | "berlin"
  | "beijing"
];

export interface IProperty {
  id?: string;
  documentId?: string;
  title: string;
  description: string;
  price: number;
  locationName: string;
  locationGoogleMap: string;
  date: string;
  room: number;
  kitchen?: number;
  bathroom: number;
  NumPerson: number;
  city: city;
  info?: string[];
  image: {
    url?: string;
    formats?: {
      small?: {
        width?: 500;
        height?: 281;
        url?: string;
      };
      medium?: {
        width?: 750;
        height?: 422;
        url?: string;
      };
    };
  };
  imageGroup: [
    {
      name?: string;
      id?: string;
      url: string;
      formats?: {
        small?: {
          width: 500;
          height: 281;
          url: string;
        };
        medium?: {
          width: 750;
          height: 422;
          url: string;
        };
        large?: {
          width: 1000;
          height: 563;
          url: string;
        };
      };
    }
  ];
}

export interface IimageGroup {
  name?: string;
  id?: string;
  url?: string;
  formats?: {
    small?: {
      width: 500;
      height: 281;
      url: string;
    };
    medium?: {
      width: 750;
      height: 422;
      url: string;
    };
    large?: {
      width: 1000;
      height: 563;
      url: string;
    };
  };
}

import * as LucideIcons from "lucide-react";
type IconName = keyof typeof LucideIcons;

export interface SocialLinks {
  icon: IconName;
  link: string;
}

export interface accordion {
  id: string;
  title: string;
  list: { description: string }[];
  icon: IconName;
}

export interface BookingData {
  data: {
    userName: string;
    email: string;
    phoneNumber: string;
    property: string | undefined;
    checkIn: Date | null;
    checkOut: Date | null;
    price: number;
  };
}
