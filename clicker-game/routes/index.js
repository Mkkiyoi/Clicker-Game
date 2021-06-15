const path = require(path);
const router = require("express").Router();

// Send React app 
router.use((req, res)=> {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

modules.exports = router;