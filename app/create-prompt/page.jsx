'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({ prompt: '', tag: '' })

    const createPrompt = async (e) => { 
        e.preventDefault()
        setSubmitting(true)

        try {
            console.log('Creating a prompt')
            console.log(session)
            const response = await fetch('/api/prompt/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user._id,
                    tag: post.tag
                }),
            })

            if (response.ok) {
                router.push('/')
            } else {
                throw new Error(await response.text())
            }

        } catch (error) {
            console.error(error.message)
        } 
        finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt