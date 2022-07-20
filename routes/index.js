const router = require('express').Router();


router.get('/', (req, res) => {
    res.status(200).json({ error: false, message: "Server path: '/"});
});

router.get('*', (req, res) => {
    return res.status(404).json({ error: true, message: 'not found' });
});


module.exports = router;
