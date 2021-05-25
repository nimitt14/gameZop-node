const express = require('express')
const port = process.env.PORT;

function init(todoPsqlRepo){
    const app = express()
    app.get('/todo',async function (req, res) {
        try{
            const data = await todoPsqlRepo.getAll()
            return res.json({data})
        }
        catch (err){
            return res.status(500).json({err});
          }
        })    


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })
}


module.exports = init;