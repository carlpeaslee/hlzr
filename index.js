const express = require('express')
const fs = require('fs')
const app = express()
const truisms = fs.readFileSync('truisms','utf8').split('\n\n')
function* truth(){
	var i = 0
	while (i < truisms.length)
		yield truisms[i++]
}

const tru = truth()

app.get('/', (req,res,next) => {
	res.send(tru.next().value)
})

app.listen({port: 3000})