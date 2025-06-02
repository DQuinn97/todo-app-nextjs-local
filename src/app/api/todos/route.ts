import { getTodosQ } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await getTodosQ();
  return NextResponse.json(todos);
}
