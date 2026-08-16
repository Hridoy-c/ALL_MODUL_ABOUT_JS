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