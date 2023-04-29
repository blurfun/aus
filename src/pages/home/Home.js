import { useFetch } from '../../hooks/useFetch'

import Create from '../create/Create'

import {  useState } from "react";

// styles
import './Home.css'


export default function Home() {

  return (
    <div className="home">
      <Create />
    </div>
  )
}
