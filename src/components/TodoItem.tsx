"use client"; //useState voor collapsible moet client zijn
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Image from "next/image";
import TodoDeleteButton from "./Btn_TodoDelete";
import TodoToggleButton from "./Btn_TodoToggle";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  let li_class = todo.completed ? "bg-muted" : "";
  let text_class = todo.completed ? "line-through text-gray-400" : "";

  return (
    <li className="w-full">
      <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
        <div
          className={cn(
            "border-accent flex items-center rounded-md border-1 p-3 text-left gap-2",
            li_class
          )}
        >
          <TodoToggleButton todo={todo} />

          <CollapsibleTrigger className="flex items-center w-full">
            <span className={cn("line-clamp-1", text_class)}>{todo.title}</span>
            <span className="ml-auto">
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </span>
          </CollapsibleTrigger>

          <TodoDeleteButton todo={todo} />
        </div>
        <CollapsibleContent>
          <Image
            src={
              "https://images.unsplash.com/photo-1519658493417-b687d62a3111?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxyYW9lYnl6T0lMUXx8ZW58MHx8fHx8"
            }
            alt={todo.title}
            width={200}
            height={200}
          />
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};
export default TodoItem;
