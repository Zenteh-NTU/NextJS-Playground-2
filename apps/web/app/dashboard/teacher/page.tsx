import { CustomCard } from "@/components/ui/customcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
export default async function DashboardRoot() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-row h-12 w-full fixed border-b pr-0 md:pr-72 bg-background ">
        <div className="flex items-center ml-2">
        <SearchIcon/>
        <Input type="text" placeholder="Search" className="w-72 ml-2"></Input>
        </div>
        <Button className="mr-2">Create New Topic</Button>
      </div>
      <div className="flex flex-col bg-background" >
        <div className="self-center pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          <CustomCard title="Physics Quiz 1" topic="Phyiscs" content=""/>
          <CustomCard title="Geography Revision" topic="Geography" content=""/>
          <CustomCard title="Computational Thinking Revision" topic="Computer Science" content=""/>
          <CustomCard title="Discrete Mathematics Quiz" topic="Mathematics" content=""/>
          <CustomCard title="Calculus 1 Revision" topic="Mathematics" content=""/>
          <CustomCard title="Networking Revision" topic="Computer Science" content=""/>
        </div>
      </div>
    </div>
  );
}
