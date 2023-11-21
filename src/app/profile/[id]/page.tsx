'use client'
import { useParams, useRouter } from 'next/navigation'

export default function ProfileID() {
  const params = useParams()
  const router = useRouter()

  return (
    <div>
      <h1>PROFILE PAGE ID: {params.id}</h1>
      <h2 onClick={() => router.push('/profile')}>Back to main page</h2>
    </div>
  )
}
