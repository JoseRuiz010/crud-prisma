
import TaskCard from '@/components/Task-card';
import React from 'react'


async function loadTasks() {
  const res = await fetch('http://127.0.0.1:3000/api/tasks', { cache: 'no-cache' })
  const data = await res.json();
  // console.log(data)
  return data
}

const HomaPage = async () => {
  const tasks = await loadTasks();
  return (
    <div className='grid grid-cols-4'>
      {
        tasks.map(t => <TaskCard task={t} key={t.id + t.title} />)
      }
    </div>
  )
}

export default HomaPage