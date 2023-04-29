import { Link } from 'react-router-dom'

// styles
import './SchoolsList.css'

export default function SchoolsList({ data }) {

  if (data.length === 0) {
    return <div className="error">没有适合您的学校</div>
  }

  const baseUrl2 = 'http://localhost:3600';
  function MyLink({ to, children }) {
    const linkTo = to.startsWith('http') ? to : `${baseUrl2}${to}`;
    return <Link to={linkTo}>{children}</Link>;
  }

  return (
    <div className="schools-list-wrap">
      <h4>all students list---studentslist.js</h4>
      <div className="schools-list">
        {data.slice(0, 2).map(school => (
          <div key={school.id} className="card">
            <h3>{school.schoolName}</h3>
            <MyLink to={`/students/${school.id}`}>Go to student</MyLink>
          </div>
        ))}
      </div>
    </div>
  )
}
