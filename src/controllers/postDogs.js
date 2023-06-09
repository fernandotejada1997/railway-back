const { Dog } = require('../db');

const postDog = async (req, res) => {
    try{
        const {name, image, weight, height, life_span, temperament} = req.body;
        const createDog = async (name, image, weight, height, life_span) =>{
        const newDog = await Dog.create({name, image, weight, height, life_span, temperament})
            return newDog;
        }

        const response = await createDog(name, image, weight, height, life_span, temperament)

        res.status(400).json(response)

    }catch (error){

        res.status(200).json({error: error.message});
    }
}
module.exports = {postDog};