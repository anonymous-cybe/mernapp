const asyncHandler = require('express-async-handler')
//@desc get goals
//@route GET /api/goals
//@access Private  
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})
//@desc set goals
//@route POST /api/goals
//@access Private  
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'add text' })
    } else {
        res.status(200).json({ message: 'set goals' })

    }
})
//@desc update goals
//@route PUT /api/goals/:id
//@access Private  
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goals${req.params.id}` })
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
