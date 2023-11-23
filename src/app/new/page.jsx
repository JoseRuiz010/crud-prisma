'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
const NewPage = ({ params: { id } }) => {
  const router = useRouter()
  const [task, settask] = useState({
    title: "",
    description: ""
  })
  useEffect(() => {
    if (id) {
      fetch('/api/tasks/' + id)
        .then(res => res.json())
        .then(data => settask(data))
    }

  }, [id])

  const eliminarTarea = async () => {
    const res = await fetch('/api/tasks/' + task?.id, {
      method: 'DELETE'
    })
    const data = await res.json();
    return data;
  }
  const eliminar = () => {
    Swal.fire({
      title: "Esta seguro que deseas eliminarlo?",
      text: "No podras revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await eliminarTarea();
        if (data.id) {
          Swal.fire({
            title: `La tarea ${data.title} fue eliminada`,
            text: "La area fue eliminada correcamente",
            icon: "success"
          }).then(async (result) => {
            router.push("/")
            router.refresh()
          })
        }
      }
    });

  }
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('Submirt')

    if (task?.id) {
      const res = await fetch('/api/tasks/' + task?.id, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json()
      router.push("/")
      router.refresh()
      console.log(data)
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json()
      router.push("/")
      router.refresh()
      console.log(data)
    }

  }
  return (
    <div className='  flex justify-center items-center p-2'>
      <form onSubmit={onSubmit} className='bg-slate-800 p-10 max-w-xl'>
        <label htmlFor="title">Titulo</label>
        <input value={task?.title} onChange={(e) => settask({ ...task, title: e.target.value })} type="text" name="" id="title" placeholder='Titulo' className='text-black border-gray-400 border p-2 mb-4 w-full' />
        <label htmlFor="description">Descripcion de la tarea</label>
        <textarea value={task?.description} onChange={(e) => settask({ ...task, description: e.target.value })} name="" id="description" rows="3" placeholder='Describe tu tarea' className='text-black border-gray-400 border p-2 mb-4 w-full' />
        <div className='flex justify-around'>
          <button type='submit' className='bg-blue-500  hover:bg-blue-700 font-bold py-2 px-4 rounded' >{task?.id ? 'Editar' : 'Crear'}</button>
          {id && <button className="bg-red-500 py-2 px-4 rounded"
            onClick={eliminar}
            type='button'
          >
            Eliminar
          </button>}
        </div>
      </form>
    </div>
  )
}

export default NewPage