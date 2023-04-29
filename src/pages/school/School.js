import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './School.css'

export default function School() {
  const { id } = useParams()
  const url = 'http://localhost:3000/schools/' + id
  const { error, isPending, data: school } = useFetch(url)

  return (
    <div className="school">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {school && (
        <>
          <h2 className="page-title">{school.schoolName}</h2>
          <p className="method">学校性质：{school.schoolGender}</p>
        </>
      )}
    </div>
  )
}