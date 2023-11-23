
import TaskCard from '@/components/Task-card';
import { prisma } from '@/libs/prisma';
import React from 'react'


async function loadTasks() {
  // const res = await fetch('http://127.0.0.1:3000/api/tasks', { cache: 'no-cache' })
  const tasks = await prisma.task.findMany()
  // console.log(data)
  return tasks
}

const HomaPage = async () => {
  const tasks = await loadTasks();
  return (
    <div className='grid grid-cols-4'>
      {
        tasks.map((t, i) => <TaskCard task={t} key={t.id + i} />)
      }
    </div>
  )
}

export default HomaPage