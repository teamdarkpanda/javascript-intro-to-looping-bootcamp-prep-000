function forLoop(array) {
  for(var i=0; i<25; i++){
    if(i === 1) {
      console.log("hello1")
      array.push(`I am ${i} strange loop.`)
    } else {
      console.log("hello2")
      array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
      }
  }
}