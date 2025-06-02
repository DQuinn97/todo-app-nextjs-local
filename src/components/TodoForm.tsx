"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";

import { LoaderCircle } from "lucide-react";
import { addTodo } from "@/lib/server-actions";
import { cn } from "@/lib/utils";

export function TodoForm() {
  const [state, action, pending] = useActionState(addTodo, {});
  const inputClass = cn(
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-r-0 rounded-r-full",
    state.errors?.title ? "border-red-500 focus-visible:ring-red-500" : ""
  );

  return (
    <>
      <form
        action={action}
        className="space-y-6 p-4 w-full relative flex items-center justify-center"
      >
        <div className="grid gap-2 w-full border-r-0">
          <label htmlFor="title" className="font-bold text-lg">
            Add New Todo:
          </label>
          <input
            type="text"
            name="title"
            placeholder="New todo..."
            defaultValue={state.title}
            className={inputClass}
          />
          {state.errors?.title && (
            <p className="text-red-500">{state.errors.title[0]}</p>
          )}
        </div>
        <Button
          type="submit"
          className="absolute right-4 top-13 rounded-full aspect-square w-9 h-9 p-0"
        >
          {pending ? (
            <LoaderCircle
              size={8}
              color="#fff"
              className="animate-spin w-8 h-8 font-bold p-0 m-0"
            />
          ) : (
            "+"
          )}
        </Button>
      </form>
    </>
  );
}
