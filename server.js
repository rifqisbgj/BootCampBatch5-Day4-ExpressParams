const express = require('express')
const app = express()
const port = 3000

// "{root: __dirname}" client akan ngebaca berdasarkan lokasi file pada server
app.get('/', (req, res) => {
    res.sendFile('./index.html', {
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {
        root: __dirname
    })
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {
        root: __dirname
    })
})

// menampilkan data berdasarkan product ID dan category ID
app.get('/product/:productId/category/:categoryId', (req, res) => {
    res.send(`Product ID: ${req.params.productId} | Category ID: ${req.params.categoryId}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})