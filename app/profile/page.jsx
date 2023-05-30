"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [posts, setPosts] = useState([])

    const handleEdit = (post) => { 
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = () => {

    }

    useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${session?.user._id}/posts`)
			const data = await response.json()

            console.log({data})

			setPosts(data)
		}

        console.log(session)

		if (session?.user._id) fetchPosts()
	}, [session])

    useEffect(() => { 
        console.log({posts})
    }, [posts])

    return (
        <div>
            <Profile
                name="My"
                desc="Welcome to your personalized profile!"
                data={posts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default MyProfile