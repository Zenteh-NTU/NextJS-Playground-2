"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function Page(): JSX.Element {
  const { theme, setTheme } = useTheme()
  return (

    <div className="flex flex-col justify-center items-center h-screen">
      <div>
      <Link href="/dashboard/teacher"><Button>Redirect to Teacher page</Button></Link>
      </div>
      <Switch className="mt-5" onCheckedChange={(data)=>{setTheme(theme === "dark" ? "light" : "dark")}}></Switch>
    </div>
  )
}
