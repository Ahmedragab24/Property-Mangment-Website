"use client";

import * as React from "react";
import { FolderHeart, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avatarImage from "/src/public/images/avatarUser.webp";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeUserData } from "@/store/features/UserData/userData";

const UserDropdown = () => {
  const userData = useAppSelector((state) => state.UserData.user?.user);
  const dispatch = useAppDispatch();

  //   Handling
  const handlerLogOut = () => {
    dispatch(removeUserData());
  };

  if (typeof window === "undefined" || !userData) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative h-8 w-8 rounded-full cursor-pointer duration-300 group overflow-hidden">
          <Avatar className="h-8 w-8 duration-300 group-hover:scale-110">
            <AvatarImage
              src={avatarImage.src || "/default-avatar.png"}
              alt={userData?.username || "User"}
            />
            <AvatarFallback>{userData?.username || "User "}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userData?.username || "User Name"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userData?.email || "User"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profilePage"}>
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={"/FavoritesPage"}>
            <DropdownMenuItem className="cursor-pointer">
              <FolderHeart className="mr-2 h-4 w-4" />
              <span>Favorites</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handlerLogOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
