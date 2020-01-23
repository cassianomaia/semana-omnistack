const axios = require('axios');
const Dev = require('../models/Dev');
const parsetStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async show(request, response) {
        const { github_username } = request.params;
        let dev = await Dev.findOne({ github_username });
        const statusCode = dev ? 200 : 404;
        return response.status(statusCode).json(dev);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(dev){
            return response.status(200).json(dev);
        }
        
        const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
            
        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = parsetStringAsArray(techs);
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });

        return response.status(201).json(dev);
    },

    async update (request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);

        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = parsetStringAsArray(techs);
            
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        let dev = await Dev.findOneAndUpdate({ github_username }, {
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
        
        let updatedDev = await Dev.findOne({ github_username });
        return response.json(updatedDev);
    },

    async destroy(request, response){
        const { github_username } = request.params;
        const dev = await Dev.findOneAndDelete({ github_username });
        const statusCode = dev ? 204 : 404;
        return response.status(statusCode).json(dev);
    }
};