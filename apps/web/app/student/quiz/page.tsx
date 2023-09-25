import { Button } from "@/components/ui/button";
export default async function QuizPage() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-96 sm:w-[500px] md:w-[640px] h-screen p-5 ">
        <h1 className="font-bold text-2xl mt-5">Quiz</h1>
        <p className="text-xl">
          What is the outermost layer of the Earth called?
        </p>

        <div className="flex flex-col mt-auto">
          <Button className="mt-2 h-[75px] sm:h-[50px] text-xl sm:text-lg">Option 1</Button>
          <Button className="mt-2 h-[75px] sm:h-[50px] text-xl sm:text-lg">Option 2</Button>
          <Button className="mt-2 h-[75px] sm:h-[50px] text-xl sm:text-lg">Option 3</Button>
          <Button className="mt-2 h-[75px] sm:h-[50px] text-xl sm:text-lg">Option 4</Button>
        </div>
      </div>
    </div>
  );
}
