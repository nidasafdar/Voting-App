const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { jwtAuthMiddleware } = require('../jwt');
const Candidate = require('../models/candidate');

// Check if the user has an 'admin' role
const checkAdminRole = async (userID) => {
    try {
        const user = await User.findById(userID);
        if (!user) {
            return false; // If user is not found, return false
        }
        return user.role === 'admin';
    } catch (err) {
        console.log(err);
        return false;
    }
};

// POST route to add a candidate (admin only)
router.post('/', jwtAuthMiddleware, async (req, res) => {
    try {
        // Check if the user has admin privileges
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }

        // Get candidate data from request body
        const data = req.body;
        const newCandidate = new Candidate(data);

        // Save the new candidate to the database
        const response = await newCandidate.save();
        console.log('Data saved');
        return res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT route to update a candidate (admin only)
router.put('/:candidateID', jwtAuthMiddleware, async (req, res) => {
    try {
        // Check if the user has admin privileges
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }

        const candidateID = req.params.candidateID;
        const updatedCandidateData = req.body;

        // Update the candidate in the database
        const response = await Candidate.findByIdAndUpdate(candidateID, updatedCandidateData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        console.log('Candidate data updated');
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE route to remove a candidate (admin only)
router.delete('/:candidateID', jwtAuthMiddleware, async (req, res) => {
    try {
        // Check if the user has admin privileges
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }

        const candidateID = req.params.candidateID;

        // Delete the candidate from the database
        const response = await Candidate.findByIdAndDelete(candidateID);

        if (!response) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        console.log('Candidate deleted');
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Vote route for candidates (user can vote only once)
router.get('/vote/:candidateID', jwtAuthMiddleware, async (req, res) => {
    const candidateID = req.params.candidateID;
    const userId = req.user.id;

    try {
        const candidate = await Candidate.findById(candidateID);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Prevent admins from voting
        if (user.role === 'admin') {
            return res.status(403).json({ message: 'Admin is not allowed to vote' });
        }

        // Prevent users who have already voted from voting again
        if (user.isVoted) {
            return res.status(400).json({ message: 'You have already voted' });
        }

        // Record the vote
        candidate.votes.push({ user: userId });
        candidate.voteCount++;
        await candidate.save();

        // Mark the user as having voted
        user.isVoted = true;
        await user.save();

        return res.status(200).json({ message: 'Vote recorded successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get vote count for candidates
// Get vote count for candidates
router.get('/vote/count', async (req, res) => {
    try {
        const candidates = await Candidate.find().sort({ voteCount: 'desc' });
        const voteRecord = candidates.map((data) => ({
            party: data.party,
            count: data.voteCount,
        }));
        return res.status(200).json(voteRecord);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get list of all candidates with name and party
router.get('/', async (req, res) => {
    try {
        const candidates = await Candidate.find({}, 'name party -_id');
        return res.status(200).json(candidates);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
