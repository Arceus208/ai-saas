"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Sidebar } from "./sidebar";

type MobileSidebarProps = {
  apiLimitCount: number;
  isPro: boolean;
};

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] =
    useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
        >
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0"
      >
        <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        ></Sidebar>
      </SheetContent>
    </Sheet>
  );
};
