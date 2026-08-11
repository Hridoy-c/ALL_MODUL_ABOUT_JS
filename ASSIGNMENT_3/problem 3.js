function countHashtags(caption) {
  let splitCaption = caption.split(" ")
  let findHeshTag = splitCaption.filter((item)=>{
    return item.startsWith("#")
  })

  let cunt = findHeshTag[0]
  

  let findTheLongestTag = findHeshTag.map((item)=>{
    if(item.length > cunt.length){
      
      cunt = item
    }
  })

  
  
  return { hashtagCount: findHeshTag.length, longestHashtag: cunt }
  
 
}
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))
console.log(countHashtags("No hashtags here"))