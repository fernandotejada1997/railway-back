const axios = require("axios");
const { Dog } = require('../db');
const { Op } = require("sequelize");

const getDogs = async (req, res)=>{
    try{
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        const apiResponse = response.data;
        const dbResponse = await Dog.findAll()
        res.status(200).json([...dbResponse, ...apiResponse]);
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

const dogsById = async (req, res) => {
    const {id} = req.params;
    try{
        if(id.includes("-")){
            const dbResponse = await Dog.findByPk(id);
            res.status(200).json(dbResponse)
        }else{
        const apiResponse = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        const response = apiResponse.data;
        const dogid = response.find((dog)=> (dog.id == id))
        res.status(200).json(dogid)
            }    
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

const dogsByName = async (req, res)=>{
    const {name} = req.query
    const namelowercase = name.toLowerCase()
    console.log(name)
    try{
        const apiResponse = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        const response = apiResponse.data;
        const apidog = response.find((dog) => ((dog.name).toLowerCase()) == namelowercase)
    
        const dbdog = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: name, // op.iLke = insensible a mayúsculas y minúsculas (case-insensitive)
                    },
            },
        })
        res.status(200).json({...apidog, ...dbdog})
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {getDogs, dogsById, dogsByName};