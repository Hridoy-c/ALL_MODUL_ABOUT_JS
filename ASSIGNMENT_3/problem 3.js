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
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))
console.log(countHashtags("No hashtags here"))