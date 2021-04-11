let father = document.getElementById("father")
let child1 = document.getElementById("child1")
let child2 = document.getElementById("child2")
let child3 = document.createElement('div')
child3.innerHTML = 'child3'
father.insertBefore(child3, child2)
father.removeChild(child2)