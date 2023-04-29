import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

export const Student = () => {
    const {id} =useParams()
    const url= "http://localhost:3600/students/" + id
    const {error,isPending,data:student} = useFetch(url)
  return (
    <div className="studnet-single">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {student && student.name}
    </div>
  )
}
