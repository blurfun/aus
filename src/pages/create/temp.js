import { useState, useEffect } from 'react'
import SchoolsList from '../../components/SchoolsList'

// styles
import './Create.css'


export default function Create() {
  const [name, setName] = useState('')
  const [schoolScale, setSchoolScale] = useState([]);


  const Search = (data) => {
    return data.filter(
      (item) =>
        (schoolScale.length === 0 || schoolScale.some((goal) => item.schoolScale.includes(goal)))   
    )
  }

  const { data, isPending, error } = useFetch('http://localhost:3000/schools')
  const { postData } = useFetch('http://localhost:3600/recipes', 'POST')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ name,schoolScale })
  }
  
  const schoolScaleOptions = [
    { value: 'small', label: '小学校' },
    { value: 'medium', label: '中等学校' },
    { value: 'large', label: '大学校' },
  ]
  const handleSchoolScale= (optionValue) => {
    if (schoolScale.includes(optionValue)) {
      setSchoolScale(schoolScale.filter((o) => o !== optionValue))
    } else {
      setSchoolScale([...schoolScale, optionValue])
    }
  }


  return (
    <div className="create">
      <h2 className="page-title">学生信息</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>学生姓名（name）:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        

      <div className="more-options">
          <span> 学校规模 </span>
          {schoolScaleOptions.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="schoolScale"
                  value={option.value}
                  checked={schoolScale.includes(option.value)}
                  onChange={() => handleSchoolScale(option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
      </div>



      <button className="btn">submit</button>
      </form>

      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <SchoolsList data={Search(data)} />}
      
       
    </div>
  )
}
