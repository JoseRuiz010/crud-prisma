import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(task)
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const task = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data: {
      ...data
    }
  })
  return NextResponse.json((task))
}
export async function DELETE(request, { params }) {
  console.log('====================================');
  console.log('eliminando.....');
  try {
    const task = await prisma.task.delete({ where: { id: Number(params.id) } })
    console.log(task);
    console.log('====================================');
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}