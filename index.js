const express = require ('express')

console.log(process.env)

const app = express()

app.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT || 3000)