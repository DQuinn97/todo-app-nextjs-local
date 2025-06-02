"use client";
import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useActionState } from "react";
import { toggleTodo } from "@/lib/server-actions";
import { cn } from "@/lib/utils";

const TodoToggleButton = ({ todo }: { todo: ITodo }) => {
  const [completed, toggle, toggling] = useActionState(
    toggleTodo,
    todo.completed
  );
  let transparent = toggling ? "opacity-0" : "";

  return (
    <>
      <form action={toggle} className="flex relative p-0 items-center">
        <Input type="hidden" name="id" value={todo.id} />

        <input
          type="checkbox"
          defaultChecked={completed}
          className={cn("w-6 h-6", transparent)}
          name="completed"
        />
        <Button
          variant="ghost"
          className="hover:cursor-pointer absolute hover:bg-transparent left-0 w-6 h-6 p-0"
        >
          {toggling && (
            <LoaderCircle
              size={45}
              className="animate-spin w-8 h-8 font-bold"
            />
          )}
        </Button>
      </form>
    </>
  );
};
export default TodoToggleButton;
