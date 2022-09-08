const router = require('express').Router()
const httpProg = require('./programs.http')
const httpChap = require('./chapter.http')


router.route('/')
    .get(httpProg.getAllP)
    .post(httpProg.createP)

router.route('/:program_id')
    .get(httpProg.getByIdP)
    .put(httpProg.updateP)
    .delete(httpProg.deleteByIdP)

router.route('/:program_id/chapters')
    .get(httpChap.getAll)
    .post(httpChap.create)

router.route('/:program_id/chapters/:chapter_id')
.get(httpChap.getById)
.put(httpChap.update)
.delete(httpChap.deleteById)

    module.exports = {
        router
    }