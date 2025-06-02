"use server";
import { revalidateTag } from "next/cache";
import { createTodoQ, deleteTodoQ, toggleTodoQ } from "./queries";
import { z } from "zod";
import { ITodoFormState } from "./types";

const bannedWords = ["hentai", "porn", "nude", "nudity", "fuck", "shit"];
const formSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(20, "Title is too long")
    .refine(
      (value) => !bannedWords.includes(value.toLowerCase()),
      "Title is not allowed"
    ),
});
export const addTodo = async (
  state: ITodoFormState,
  fd: FormData
): Promise<ITodoFormState> => {
  const title = fd.get("title") as string;
  const validation = formSchema.safeParse({ title });
  if (validation.success) {
    await createTodoQ({ title: validation.data.title, completed: false });
    revalidateTag("todos");
    return { title: "" };
  } else {
    return {
      title,
      errors: validation.error.flatten().fieldErrors,
    };
  }
};

export const deleteTodo = async (_: boolean, fd: FormData) => {
  await deleteTodoQ(+(fd.get("id") as string));
  revalidateTag("todos");
  return true;
};

export const toggleTodo = async (state: boolean, fd: FormData) => {
  const id = +(fd.get("id") as string);
  const completed = fd.get("completed") ? true : false;
  await toggleTodoQ(id, !completed);
  revalidateTag("todos");
  return !completed;
};
