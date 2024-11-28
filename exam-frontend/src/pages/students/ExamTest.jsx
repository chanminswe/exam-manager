import React from 'react'
import { useParams } from 'react-router-dom'

const ExamTest = () => {

    const {examName} = useParams();
  return (
    <div>{examName}</div>
  )
}

export default ExamTest