import { useFetch } from '../../hooks/useFetch'


export default function Students()  {

  const { data, isPending, error } = useFetch('http://localhost:3600/students')
  return (
    <div>
      <h2> all Students info---1 </h2>
      <div className="schools-list">

      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

        {data && data.slice(0, 20).map(student => (
          <div key={student.id} className="card">
            <h3> {student.name}</h3>
            {/* <Link to={`/students/${student.id}`}>link</Link> */}
            {/* <Link to={`http://localhost:3600/students/${student.id}`}>link</Link> */}
            <a href={`http://localhost:3600/students/${student.id}`}>link</a>
          </div>
        ))}
      </div>
    </div>  
  )
}