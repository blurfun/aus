import { Link } from 'react-router-dom'

// styles
import './SchoolsList.css'

export default function SchoolsList({ data }) {

  if (data.length === 0) {
    return <div className="error">抱歉，没有适合您的学校，您可尝试放宽条件再次搜索</div>
  }

  return (
<div className="schools-list-wrap">
  {data.length > 2 ? (
    <div>
      <h4>共为您找到{data.length}个学校，如下是其中的2个，更多结果请添加我们的微信:</h4>
      <img src="/qr-code.png" width="120px" height="120px"/>
      <div className="schools-list">
        {data.slice(0, 2).map(school => (
          <div key={school.id} className="card">
            <h3>{school.schoolName}</h3>
            {/* <div>{school.schoolGender.substring(0, 100)}...</div> */}
            {/* <Link to={`/schools/${school.id}`}>查看详情</Link> */}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>抱歉，符合您条件的学校少于2个，欢迎添加我们的微信，为您寻找更多合适的学校。
    <img src="http://13.211.41.165/wp-content/uploads/2021/09/qr-code-1a.png" width="120px" height="120px"/>
    </p>
    
  )}
</div>
  )
}
