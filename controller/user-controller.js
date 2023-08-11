const express = require('express');
const router = express.Router();
const userService = require('../service/user-service');


// routes

router.post('/user', async (req, res) => {
    console.log("test")
    console.log(req.body)
    try {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,

        };

        const userId = await userService.create(newUser);
        res.status(201).json({id: userId, message: 'Utilisateur inséré avec succès'});
    } catch (error) {
        res.status(500).json({message: 'Une erreur est survenue lors de l\'insertion de l\'utilisateur'});
    }
});

router.get('/users', async (req, res) => {
    console.log("test")
    try {
       const users = await userService.getAll()
        console.log('users',users)
        res.status(200).json({users: users, message: 'Liste des utilisateurs '});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'error'});
    }
});

router.get('/users/:id', async (req, res) => {
    console.log("test")
    try {
        const user = await userService.getById(req.params.id)
        res.status(200).json({user: user, message: 'Liste des utilisateurs '});
    } catch (error) {
        res.status(500).json({message: 'error'});
    }
});

router.post('/user/authenticate', async (req, res) => {
    console.log("re", req.query.email)
    try {
        const users = await userService.authenticate(req.query.email, req.query.password)
        res.status(201).json({users: users, message: 'authentification réussi'});
    } catch (error) {
        res.status(500).json({message: 'error'});
    }
});

module.exports = router;


