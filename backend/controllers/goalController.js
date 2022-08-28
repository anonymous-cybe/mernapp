const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
//@desc get goals
//@route GET /api/goals
//@access Private  
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({ message: goals })
})
//@desc set goals
//@route POST /api/goals
//@access Private  
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'add text' })
    } else {
        const goal = await Goal.create({
            text: req.body.text
        })
        res.status(200).json(goal)

    }
})
//@desc update goals
//@route PUT /api/goals/:id
//@access Private  
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
    }
    const updatedgoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json(updatedgoal)
})
//@desc delete goals
//@route DELETE /api/goals/:id
//@access Private  
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goals${req.params.id}` })
})
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}
