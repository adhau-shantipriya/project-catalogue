import React, { useState, useEffect, useRef } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export default function useFetchProjects() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = collection(db, 'projects')
                const docSnap = await getDocs(docRef)
                if (!docSnap.empty) {
                    const projectsList = docSnap.docs.map(doc => doc.data());
                    setProjects(projectsList)
                } else {
                    setProjects([])
                }
            } catch (err) {
                setError('Failed to load projects')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { loading, error, projects, setProjects }
}