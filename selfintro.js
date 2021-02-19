const myfav = document.getElementById("myfav")
const ttl1 = document.getElementById("ttl1")
const txt1 = document.getElementById("txt1")
const ttl2 = document.getElementById("ttl2")
const ttl0 = document.getElementById("ttl0")

//マウスオーバー時のカラーチェンジ　もっと完結に書きたいけど//
ttl1.onmouseover = function() {
  ttl1.style.backgroundColor = "#558"
}
ttl1.onmouseout = function() {
  ttl1.style.backgroundColor = "#fff"
}

ttl0.onmouseover = function() {
  ttl0.style.backgroundColor = "#558"
}
ttl0.onmouseout = function() {
  ttl0.style.backgroundColor = "#fff"
}

ttl2.onmouseover = function() {
  ttl2.style.backgroundColor = "#558"
}
ttl2.onmouseout = function() {
  ttl2.style.backgroundColor = "#fff"
}
