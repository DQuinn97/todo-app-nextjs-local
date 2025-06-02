"use client";
import { LoaderCircle, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useActionState } from "react";
import { deleteTodo } from "@/lib/server-actions";
import { ITodo } from "@/lib/types";

const TodoDeleteButton = ({ todo }: { todo: ITodo }) => {
  const [_, delTodo, deleting] = useActionState(deleteTodo, true);

  return (
    <>
      <form action={delTodo} className="ml-auto">
        <Input type="hidden" name="id" value={todo.id} />
        <Button variant="ghost" className="hover:cursor-pointer">
          {deleting ? (
            <LoaderCircle
              size={10}
              className="animate-spin w-8 h-8 font-bold"
            />
          ) : (
            <Trash />
          )}
        </Button>
      </form>
    </>
  );
};
export default TodoDeleteButton;
