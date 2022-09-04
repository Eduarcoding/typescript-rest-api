import express from 'express'
const app = express()
app.use(express.json()) //middleware that turns req.body into json

const PORT = 3000

app.get('/healthcheck', (_, res) => {
    console.log('Healthcheck hit')
    res.send('Alive')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
