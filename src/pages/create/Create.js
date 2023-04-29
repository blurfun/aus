import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import SchoolsList from '../../components/SchoolsList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// styles
import './Create.css'

export default function Create() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [domesticGoal, setDomesticGoal] = useState([])
  const [schoolGoal, setSchoolGoal] = useState([])
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [schoolGender, setSchoolGender] = useState([]);
  const [schoolScale, setSchoolScale] = useState([]);
  const [schoolCharacter, setSchoolCharacter] = useState([]);
  const [schoolBully, setSchoolBully] = useState([]);
  const [schoolTalent, setSchoolTalent] = useState([]);
  const [schoolChinese, setSchoolChinese] = useState([]);
  const [schoolAeas, setSchoolAeas] = useState([]);
  const [schoolInternational, setSchoolInternational] = useState([]);
  const [schoolBoarding, setSchoolBoarding] = useState([]);
  const [schoolFriend, setSchoolFriend] = useState([]);

  const Search = (data) => {
    return data.filter(
      (item) =>
        (schoolGender.length === 0 || schoolGender.some((goal) => item.schoolGender.includes(goal)))&&
        (schoolCharacter.length === 0 || schoolCharacter.some((goal) => item.schoolCharacter.includes(goal)))&&
        (domesticGoal.length === 0 || domesticGoal.some((goal) => item.domesticGoal.includes(goal)))&&
        (schoolGoal.length === 0 || schoolGoal.some((goal) => item.schoolGoal.includes(goal)))&&
        (schoolScale.length === 0 || schoolScale.some((goal) => item.schoolScale.includes(goal)))&&
        (schoolBully.length === 0 || schoolBully.some((goal) => item.schoolBully.includes(goal)))&&
        (schoolTalent.length === 0 || schoolTalent.some((goal) => item.schoolTalent.includes(goal)))&& 
        (schoolChinese.length === 0 || schoolChinese.some((goal) => item.schoolChinese.includes(goal)))&&
        (schoolAeas.length === 0 || schoolAeas.some((goal) => item.schoolAeas.includes(goal)))&&
        (schoolInternational.length === 0 || schoolInternational.some((goal) => item.schoolInternational.includes(goal)))&&
        (schoolBoarding.length === 0 || schoolBoarding.some((goal) => item.schoolBoarding.includes(goal)))&&
        (schoolFriend.length === 0 || schoolFriend.some((goal) => item.schoolFriend.includes(goal)))  
    )
  }

  const { data, isPending, error } = useFetch('http://localhost:3000/schools')
  const { postData } = useFetch('http://localhost:3600/students', 'POST')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ name,age,gender,email,domesticGoal,schoolGoal,schoolGender,schoolScale,schoolTalent,schoolChinese,schoolFriend,schoolBoarding,schoolInternational,schoolAeas,schoolCharacter })
    document.getElementById("all-input").classList.add("hide-all-input")
    document.getElementById("school-list").classList.remove("school-list")
  }

  const domesticGoalOptions = [
    { value: 'multicultural', label: '多元化' },
    { value: 'academic', label: '学术性' },
    { value: 'topscore', label: '精英型' },
  ]

  const handleDomesticGoal= (optionValue) => {
    if (domesticGoal.includes(optionValue)) {
      setDomesticGoal(domesticGoal.filter((o) => o !== optionValue))
    } else {
      setDomesticGoal([...domesticGoal, optionValue])
    }
  }

  const schoolGoalOptions = [
    { value: 'competitive', label: '竞争' },
    { value: 'encourage', label: '鼓励' },
    { value: 'care', label: '呵护' },
  ]

  const handleSchoolGoal= (optionValue) => {
    if (schoolGoal.includes(optionValue)) {
      setSchoolGoal(schoolGoal.filter((o) => o !== optionValue))
    } else {
      setSchoolGoal([...schoolGoal, optionValue])
    }
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


  const schoolGenderOptions = [{ value: 'girl', label: '女校' },{ value: 'boy', label: '男校' },{ value: 'co', label: '混校' },]
  const handleSchoolGender= (optionValue) => {
    if (schoolGender.includes(optionValue)) {
      setSchoolGender(schoolGender.filter((o) => o !== optionValue))
    } else {
      setSchoolGender([...schoolGender, optionValue])
    }
  }


const schoolBullyOptions = [  { value: '1', label: '少' },  { value: '2', label: '一般' }, { value: '3', label: '严重' },]
const handleSchoolBully= (optionValue) => {
  if (schoolBully.includes(optionValue)) {
    setSchoolBully(schoolBully.filter((o) => o !== optionValue))
  } else {
    setSchoolBully([...schoolBully, optionValue])
  }
}


const schoolTalentOptions = [  
  { value: 'pe', label: '体育' }, 
  { value: 'music', label: '音乐' }, 
  { value: 'speech', label: '演讲' },
  { value: 'chess', label: '棋类' },
  ]
const handleSchoolTalent= (optionValue) => {
  if (schoolTalent.includes(optionValue)) {
    setSchoolTalent(schoolTalent.filter((o) => o !== optionValue))
  } else {
    setSchoolTalent([...schoolTalent, optionValue])
  }
}


const schoolAeasOptions = [  { value: '50', label: '50' },  { value: '60', label: '60' },  { value: '68', label: '68' },  { value: '70', label: '70' },{ value: '71', label: '71' },{ value: '80', label: '80' }]
const handleSchoolAeas = (optionValue) => {
  if (schoolAeas.includes(optionValue)) {
    setSchoolAeas(schoolAeas.filter((o) => o !== optionValue))
  } else {
    setSchoolAeas([...schoolAeas, optionValue])
  }
}

const schoolChineseOptions = [  { value: 'few', label: '很少' },  { value: 'normal', label: '一般' },  { value: 'lot', label: '很多' },]
const handleSchoolChinese = (optionValue) => {
  if (schoolChinese.includes(optionValue)) {
    setSchoolChinese(schoolChinese.filter((o) => o !== optionValue))
  } else {
    setSchoolChinese([...schoolChinese, optionValue])
  }
}


const schoolInternationalOptions = [  { value: '5', label: '5年级' },  { value: '9', label: '9年级' },  { value: '10', label: '10年级' }, { value: 'all', label: '所有年级' },]
const handleSchoolInternational = (optionValue) => {
  if (schoolInternational.includes(optionValue)) {
    setSchoolInternational(schoolInternational.filter((o) => o !== optionValue))
  } else {
    setSchoolInternational([...schoolInternational, optionValue])
  }
}


const schoolBoardingOptions = [  { value: 'boarding', label: '寄宿制' },  { value: 'non-boarding', label: '走读制' }, { value: 'both', label: '都可以' }, ];
const handleSchoolBoarding = (optionValue) => {
  if (schoolBoarding.includes(optionValue)) {
    setSchoolBoarding(schoolBoarding.filter((o) => o !== optionValue));
  } else {
    setSchoolBoarding([...schoolBoarding, optionValue]);
  }
};

const schoolFriendOptions = [  { value: 'yes', label: '是' },  { value: 'no', label: '否' },];
const handleSchoolFriend = (optionValue) => {
  if (schoolFriend.includes(optionValue)) {
    setSchoolFriend(schoolFriend.filter((o) => o !== optionValue));
  } else {
    setSchoolFriend([...schoolFriend, optionValue]);
  }
};

const schoolCharacterOptions = [  { value: 'out', label: '外向型' },  { value: 'in', label: '内向型' },  { value: 'none', label: '都可以' },]
const handleSchoolCharacter = (optionValue) => {
  if (schoolCharacter.includes(optionValue)) {
    setSchoolCharacter(schoolCharacter.filter((o) => o !== optionValue))
  } else {
    setSchoolCharacter([...schoolCharacter, optionValue])
  }
}

  return (
    <div className="create">
      <div className="top"> <img src="/top.jpeg" width="480" height="150"/> </div>
      <div id="all-input">
      <h5 className="page-title">学生信息</h5>
      <form onSubmit={handleSubmit}>
        <label>
          <span>学生姓名:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>出生日期:</span>
          <input
            type="date"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            required
          />
        </label>

        <label>
          <span>性别:</span>
          <input
            type="text" 
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </label>

        <label>
          <span>邮件地址:</span>
          <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <h5 className="page-title2">择校信息</h5>
        <div className="more-options">
          <span> 学校性质 </span>
          {schoolGenderOptions.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="schoolGender"
                  value={option.value}
                  checked={schoolGender.includes(option.value)}
                  onChange={() => handleSchoolGender(option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
      </div>

    <div className="more-options">
      <span> 孩子的性格 </span>
      {schoolCharacterOptions.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              name="schoolCharacter"
              value={option.value}
              checked={schoolCharacter.includes(option.value)}
              onChange={() => handleSchoolCharacter(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>


      <div className="more-options">
          <span> 家庭培养目标 </span>
          {domesticGoalOptions.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="domesticGoal"
                  value={option.value}
                  checked={domesticGoal.includes(option.value)}
                  onChange={() => handleDomesticGoal(option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
      </div>


      <div className="more-options">
          <span> 学校培养目标 </span>
          {schoolGoalOptions.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="schoolGoal"
                  value={option.value}
                  checked={schoolGoal.includes(option.value)}
                  onChange={() => handleSchoolGoal(option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
      </div>

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

    <div className="more-options">
    <span> 学校霸凌</span>
    {schoolBullyOptions.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="checkbox"
            name="schoolBully"
            value={option.value}
            checked={schoolBully.includes(option.value)}
            onChange={() => handleSchoolBully(option.value)}
          />
          {option.label}
        </label>
      </div>
      ))}
    </div>

    <div className="more-options">
      <span> 学校特长 </span>
      {schoolTalentOptions.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              name="schoolTalent"
              value={option.value}
              checked={schoolTalent.includes(option.value)}
              onChange={() => handleSchoolTalent(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>


    <div className="more-options">
      <span> 华人人数 </span>
      {schoolChineseOptions.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              name="schoolChinese"
              value={option.value}
              checked={schoolChinese.includes(option.value)}
              onChange={() => handleSchoolChinese(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>


  <div className="more-options">
    <span> AEAS成绩 </span>
    {schoolAeasOptions.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="checkbox"
            name="schoolAeas"
            value={option.value}
            checked={schoolAeas.includes(option.value)}
            onChange={() => handleSchoolAeas(option.value)}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>


  <div className="more-options">
  <span>是否招收国际学生</span>
  {schoolInternationalOptions.map((option) => (
    <div key={option.value}>
      <label>
        <input
          type="checkbox"
          name="schoolInternational"
          value={option.value}
          checked={schoolInternational.includes(option.value)}
          onChange={() => handleSchoolInternational(option.value)}
        />
        {option.label}
      </label>
    </div>
  ))}
</div>

  <div className="more-options">
    <span> 学校是否可走读 </span>
    {schoolBoardingOptions.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="checkbox"
            name="schoolBoarding"
            value={option.value}
            checked={schoolBoarding.includes(option.value)}
            onChange={() => handleSchoolBoarding(option.value)}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>

  <div className="more-options">
    <span> 是否容易交友 </span>
    {schoolFriendOptions.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="checkbox"
            name="schoolFriend"
            value={option.value}
            checked={schoolFriend.includes(option.value)}
            onChange={() => handleSchoolFriend(option.value)}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>

      <button className="btn">submit</button>
      
      </form>
  </div>    
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      <div id="school-list" className="school-list">
      {data && <SchoolsList data={Search(data)} />}
      <h3></h3>
      </div> 
    </div>
  )
}
