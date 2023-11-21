'use client'
import { useParams } from 'next/navigation'

export default function ProfileId() {
  const params = useParams()

  return <div>ID PROFILE PAGE {params.id}</div>
}
