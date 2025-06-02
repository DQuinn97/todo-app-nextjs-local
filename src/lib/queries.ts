import { ITodo, ITodoInput } from "./types";
import supabase from "@/supabase";
import { Tables, TablesInsert } from "@/supabase/types";

export const getTodosQ = async (): Promise<Tables<"Todo">[]> => {
  try {
    const { data, error } = await supabase.from("Todo").select("*");
    return data || [];
  } catch (error) {
    throw error;
  }
};
export const deleteTodoQ = async (id: Tables<"Todo">["id"]) => {
  try {
    await supabase.from("Todo").delete().eq("id", id);
  } catch (error) {
    throw error;
  }
};

export const createTodoQ = async (todo: TablesInsert<"Todo">) => {
  try {
    await supabase.from("Todo").insert(todo);
  } catch (error) {
    throw error;
  }
};

export const toggleTodoQ = async (
  id: Tables<"Todo">["id"],
  completed: boolean
) => {
  try {
    await supabase.from("Todo").update({ completed }).eq("id", id);
  } catch (error) {
    throw error;
  }
};
