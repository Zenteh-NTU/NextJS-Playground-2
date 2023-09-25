import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps{
    title: string;
    topic: string
    content: string;
}
export const CustomCard: React.FC<CardProps> = ({title, topic, content}) => {
  return (
    <Card className=" w-80">
      <CardHeader>
        <CardTitle className="font-serif font-light">{title}</CardTitle>
        <CardDescription>{topic}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Button>View</Button>
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Remove</Button>
      </CardFooter>
    </Card>
  );
};
