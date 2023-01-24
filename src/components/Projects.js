import React, { Suspense } from 'react'
import useFetchProjects from '@/hooks/fetchProjects'
import Link from 'next/link'

export default function Projects() {
  const { loading, error, projects, setProjects } = useFetchProjects();

  return (
    <>
      { (loading) && (<div>Loading</div>) }
      { (!loading) && (
        <div className="container mx-auto">
          <div className='project-list my-24 border border-slate-300'>
            <div className='flex'>
              <div className="w-1/4 border border-slate-300 py-1 px-2">
                <strong>Name</strong>
              </div>
              <div className="w-1/4 border border-slate-300 py-1 px-2">
                <strong>URL</strong>
              </div>
              <div className="w-1/4 border border-slate-300 py-1 px-2">
                <strong>Status</strong>
              </div>
              <div className="w-1/4 border border-slate-300 py-1 px-2">
                <strong>Actions</strong>
              </div>
            </div>
            {
              projects && projects.map((project, i) => {
                return (
                  <div className='flex' key={i}>
                    <div className="w-1/4 border border-slate-300 py-1 px-2 capitalize">
                      <a className='hover:text-blue-500' href={ project.url } target="_blank" rel='noreferrer'>{ project.name }</a>
                    </div>
                    <div className="w-1/4 border border-slate-300 py-1 px-2">
                      <a className='hover:text-blue-500' href={ project.url } target="_blank" rel='noreferrer'>{ project.url }</a>
                    </div>
                    <div className="w-1/4 border border-slate-300 py-1 px-2 capitalize">{ project.status }</div>
                    <div className="w-1/4 border border-slate-300 py-1 px-2">
                      <Link className='pr-2 text-blue-500 hover:underline hover:decoration-blue-500' href="/">Edit</Link>
                      <Link className='text-red-500 hover:underline hover:decoration-red-500' href="/">Delete</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )}
    </>
  )
}
