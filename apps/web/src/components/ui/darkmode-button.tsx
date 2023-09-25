"use client"
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
  interface CardProps{
      title: string;
      topic: string
      content: string;
  }
  export const DarkModeButton = () => {
    const { theme, setTheme } = useTheme()
    return (
    <Switch className="mt-5" onCheckedChange={(data)=>{setTheme(theme === "dark" ? "light" : "dark")}}></Switch>
    );
  };
  