const router = require('express').Router()
const httpProg = require('./chapter.http')





router.route('/api/v1/programs//program_id/chapters')
    .get(httpProg.getAll)
    .post(httpProg.create)

router.route('/api/v1/programs/program_id/chapters/chapter_id')
    .get(httpProg.getById)
    .put(httpProg.update)
    .delete(httpProg.deleteById)    

    module.exports = {
        router
    }