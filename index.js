const express = require('express')
const { fetch } = require('./src/db/db.js')

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/users', async (_, res) => {
	
	const users = await fetch(`
		select
			username,
			age,
			is_student
		from 
			users
	`)

	res.send(users)

})

app.listen(PORT, () => console.log(`ready at http://localhost:${PORT}`))
