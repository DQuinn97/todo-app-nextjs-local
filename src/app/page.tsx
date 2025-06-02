import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
import { TodoForm } from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[5px] items-center sm:items-start w-full max-w-[600px]">
        <TodoForm />
        <TodoList />
      </main>
      <Toaster />
    </div>
  );
}
