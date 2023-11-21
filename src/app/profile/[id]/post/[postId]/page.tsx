'use client'
import { useParams } from 'next/navigation'

export default function ProfileIdPostId() {
  const params = useParams()

  return (
    <div>
      PARENT ID {params.id} ID PROFILE POSTS ID PAGE {params.postId}
    </div>
  )
}
