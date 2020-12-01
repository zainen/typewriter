const sentence = "hello there from lighthouse labs";
let x = 0
let finish = sentence.length * 50
for (let char of sentence) {
  x += 50
  setTimeout(() => {
    process.stdout.write(char)
  }, x)
}
setTimeout(() => {
  console.log()
}, finish)
setTimeout(() => {
  console.log(x)
}, finish)