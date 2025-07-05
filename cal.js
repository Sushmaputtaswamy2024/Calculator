let inp=document.getElementById("inp")
let one=document.getElementById("1")
one.addEventListener("click",()=>{
    inp.value += 1
})
let two=document.getElementById("2")
two.addEventListener("click",()=>{
    inp.value += 2
})
let three=document.getElementById("3")
three.addEventListener("click",()=>{
    inp.value += 3
})
let four=document.getElementById("4")
four.addEventListener("click",()=>{
    inp.value += 4
})
let five=document.getElementById("5")
five.addEventListener("click",()=>{
    inp.value += 5
})
let six=document.getElementById("6")
six.addEventListener("click",()=>{
    inp.value += 6
})
let seven=document.getElementById("7")
seven.addEventListener("click",()=>{
    inp.value += 7
})
let eight=document.getElementById("8")
eight.addEventListener("click",()=>{
    inp.value += 8
})
let nine=document.getElementById("9")
nine.addEventListener("click",()=>{
    inp.value += 9
})
let zero=document.getElementById("0")
zero.addEventListener("click",()=>{
    inp.value += 0
})
let doublezero=document.getElementById("00")
doublezero.addEventListener("click",()=>{
    inp.value += "00"
})
let ac=document.getElementById("ac")
ac.addEventListener("click",()=>{
    inp.value =""
})
let dec=document.getElementById(".")
dec.addEventListener("click",()=>{
    inp.value += "."
})
let div=document.getElementById("div")
div.addEventListener("click",()=>{
    inp.value += "/"
})
let add=document.getElementById("add")
add.addEventListener("click",()=>{
    inp.value += "+"
})
let sup=document.getElementById("sup")
sup.addEventListener("click",()=>{
    inp.value += "-"
})
let mul=document.getElementById("mul")
mul.addEventListener("click",()=>{
    inp.value += "*"
})
let equal=document.getElementById("eq")
equal.addEventListener("click",()=>{
    inp.value=eval(inp.value)
})
let del=document.getElementById("del")
del.addEventListener("click",()=>{
    inp.value=inp.value.slice(0,-1)
})