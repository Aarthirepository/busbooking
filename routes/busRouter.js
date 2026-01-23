const express = require('express')
const busRouter = require('../controller/busController')

const router = express.Router()



router.post("/add", busRouter.addBus)
router.get("/available/:seats", busRouter.retrieveAvailableSeats);
module.exports = router