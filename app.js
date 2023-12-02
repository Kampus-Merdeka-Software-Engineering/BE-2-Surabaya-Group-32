const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

//endpoint get all customers
app.get('/customers', (req, res) => {
    res.json({
        message: 'Get list all data customers is succesfully',
        data: [
            {
               name: 'Lisa CP',
               email: 'LisaCa@gmail.com',
               role: 'pacar'
            },
            {
                name:'Rigan',
                email:'Riganalgifari@gmail.com',
                role:'pacarL'
            },
            {
                name:'Rafy Nunez',
                email:'RafyNyunyez@gmail.com',
                role:'saksi'

            }
        ]
    })

    
    // end point get detail customers
    app.get('/customer', (req, res) => {
        res.json({
            message: 'Get detail data customers is succesfully',
            data:  {
                   name: 'Lisa CP',
                   email: 'LisaCa@gmail.com',
                   role: 'pacar'
            }
       
            
        })
    })
})
// endpoint post 
app.post('/customer/:id', (req, res) => {
    res.json({
        message: 'Create data customers is succesfully',
        data: 
            {
               name: 'Lisa CP',
               email: 'Lisa.Pratiwi@gmail.com',
               role: 'pamajikan',
               created_at:'2023/2/12 20:30:00',
               updated_at:'2023/2/12 20:41:00'
            }
        
    })
})
// endpoint update
app.put('/customer/:id', (req, res) => {
    res.json({
        message: 'Update data customers is succesfully',
        data: [
            {
               name: 'Lisa CP',
               email: 'Lisa.Pratiwi@gmail.com',
               role: 'pamajikan'
            }
        ]
    })
})

app.listen(port, () =>{
    console.log(`example app listing on port http://localhost:${port}`);
})