'use client'
import { useRouter } from "next/navigation"

const TaskCard = ({ task: { id, title, description, createdAt } }) => {
  const router = useRouter()
  return (
    <div className='border m-2 p-3 cursor-pointer hover:bg-slate-900'
      onClick={() => router.push('/tasks/edit/' + id)}
    >
      <div>
        <h4 className='font-bold text-xl'> {title}</h4>
        <p className='text-slate-400'>{description}</p>
        <p className='text-slate-400 text-sm'>{new Date(createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default TaskCard