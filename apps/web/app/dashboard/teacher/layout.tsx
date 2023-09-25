import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const sidebarItems = [
  {
    name: "Home",
    href: "/dashboard/teacher",
  },
  {
    name: "Question Banks",
    href: "/dashboard/teacher/topics",
  },
  {
    name: "Quizzes",
    href: "/dashboard/teacher/quizzes",
  },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between fixed w-screen h-16 border-b bg-background">
        <Sheet>
          <SheetTrigger className="block md:hidden ml-5">
            <Menu />
          </SheetTrigger>
          <SheetContent className=" w-[300px]" side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription className="flex flex-col">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex justify-stretch items-stretch"
                  >
                    <Button className="flex-1 mt-1" variant="ghost">
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="hidden md:block"></div>
        <div className=" font-sans text-2xl">FAKE KAHOOT</div>
        <Avatar className="mr-5">
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex min-h-screen">
        <div className="hidden md:block fixed mt-16 w-72 border-r bg-background">
          <ScrollArea className="h-screen">
            <div className="flex pt-5 flex-col pb-16 ">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex justify-stretch items-stretch mt-1 mb-1"
                >
                  <Button className="btn flex-1" variant="ghost">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="mt-16 md:ml-72 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
