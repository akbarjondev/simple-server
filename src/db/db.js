const Pool = require('pg').Pool

const pool = new Pool({
	user: 'bcphrsyj',
	password: '0MSY18dLRcBEQzzPExOjjQ1pghg0VTdb',
	database: 'bcphrsyj',
	host: 'hansken.db.elephantsql.com',
	port: 5432
})

const fetch = async (SQL, ...params) => {

	const client = await pool.connect()
	console.log('db connected')

	try {
		
		const data = await client.query(SQL, params)
		return data.rows //[]

	} catch(e) {
		console.log(e)
	} finally {
		
		client.release()
		console.log('db disconnected...')

	}

}

module.exports = {
	fetch,
}
