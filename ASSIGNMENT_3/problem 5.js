function generateLeaderboard(students) {
  if (!Array.isArray(students) || students.length === 0)  {
    return "Invalid";
  }
  for(const student of students){
    if(typeof student.score !== "number" || (!student.name)){
      return "Invalid"
    }
  }
  let findTheHighestNumerScore = students.filter((items)=>
    items.score >= 70
  )
  let getHighestScoreName = findTheHighestNumerScore.map((items)=>
    items.name.toUpperCase()
  )
  return getHighestScoreName.slice(0, 3)
}
