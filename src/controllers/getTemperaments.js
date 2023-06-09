const axios = require("axios")
const {Dog, Temperaments} = require("../db.js")

const getTemperaments = async (req,res)=>{
    try{
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);

        const dbResponse = await Dog.findAll()
        const apiResponse = response.data;
        const allResponse = [...dbResponse, ...apiResponse]
        const temperaments = await allResponse.map((dog)=>dog.temperament)

        const allWords = temperaments.map(temp => temp? temp.split(',').map(word => word.trim()):undefined)
        const allWordsflat = allWords.flat()        

        const uniqueArr = [...new Set(allWordsflat)]

        uniqueArr.forEach(temp => {
            if (temp) {
                Temperaments.findOrCreate({
                    where: { name: temp }
                });
            }
        });

        res.status(200).json(uniqueArr)
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

module.exports = getTemperaments;