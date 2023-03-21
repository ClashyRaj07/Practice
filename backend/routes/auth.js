const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { body, validationResult } = require('express-validator');


const JWT_SECRET = "Raj the Billioniare"

// ROUTE 1

// Sign Up
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    // If any error then send 400 error
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // If email already exist then show error
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        securePass = await bcrypt.hash(req.body.password, salt);
        // Create user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
        // res.json(user)
    }
    // If any internal error then catch it
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 2

// Authenticate a user using "/api/auth/login" , No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

    let success = false
    const errors = validationResult(req);
    // If any error then send 400 error
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success,authtoken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 3 

// Get loggedin user details using POST "/api/auth/getUser", Login required

// router.post('/getuser', fetchuser, async (req, res) => {

//     try {
//         let userId = req.user.id;
//         const user = await User.findById(userId).select("-password")
//         res.send(user);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal server error");
//     }
// })



module.exports = router