import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
export async function GET() {
  const tasks = await prisma.task.findMany()
  // console.log("--------------")
  // console.log(tasks)
  // console.log("--------------")
  return NextResponse.json(tasks)
}
export async function POST(request) {
  const data = await request.json();
  const newTasks = await prisma.task.create({
    data: {
      ...data
    }
  })
  return NextResponse.json("creando tareas " + JSON.stringify(newTasks))
}