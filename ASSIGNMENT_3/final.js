//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
  if(typeof student !== "object"){
    return "Invalid"
  }
  let keys = Object.keys(student)
  if(!keys.includes("name") || !keys.includes("age") || !keys.includes("course")){
    return "Invalid"
  }
  const {name, age, course} = student

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`


}

//Problem-02: Active User Filter
function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }
  for(const user of users){
    let keys = Object.keys(user)
    if(!keys.includes("isActive")){
      return "Invalid"
    }
  }
  let filterUser = users.filter((item)=>{
    return item.isActive === true
  })
  return filterUser
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
  if(typeof caption !== "string"){
    return "Invalid"
  }
  let splitCaption = caption.split(" ")
  let findHeshTag = splitCaption.filter((items)=>items.startsWith("#"))
  let countNumbar = ""
  findHeshTag.map((items)=>{
    let sliceItem = items.slice(1)
    if(sliceItem.length > countNumbar.length){
      countNumbar = sliceItem
    }
  })
  return {hashtagCount: findHeshTag.length, longestTag: countNumbar}
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }
  for(const score of scores){
    if(typeof score !== "number"){
      return "Invalid"
    }
  }
  let addBonusScore = scores.map((item)=>{
    return item += 10
  })
  let getSumAllScore = addBonusScore.reduce((acc, item)=>{
    return acc + item
  }, 0)
  return getSumAllScore
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
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

