import { Toaster } from "@/components/ui/sonner";
import { TodoForm } from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Next Todo App",
  description: "Locally hosted todo app built with Next.js",
  keywords: ["nextjs", "react", "typescript"],
  openGraph: {
    title: "Next Todo App",
    description: "Locally hosted todo app built with Next.js",
    images: {
      url: "/favicon.ico",
      width: 600,
      height: 600,
      alt: "favicon",
    },
  },
};

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
