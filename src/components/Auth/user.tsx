"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { FolderHeart, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { IUser } from "@/interfaces";
import avatarImage from "@/assets/images/avatarUser.webp";
import Link from "next/link";

const UserDropdown = () => {
  const [userData, setUserData] = useState<IUser | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setUserData(user ? JSON.parse(user) : null);
    }
  }, []);

  //   Handling
  const handlerLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {userData ? (
              <>
                <AvatarImage
                  src={avatarImage.src}
                  alt={userData.user.username}
                />
                <AvatarFallback>{userData.user.username}</AvatarFallback>
              </>
            ) : (
              <AvatarFallback>Loading...</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          {userData && (
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {userData.user.username}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userData.user.email}
              </p>
            </div>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
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
