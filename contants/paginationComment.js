const commentModel = require('../models/comment.model')

/* Pagination. */
const paginationComment = async (req, res, next) => {
    let page = Number(req.params.page)

    /* Lấy 2 phần tử mỗi trang */

    const PAGE_SIZE = 2
    const NEXT = (page - 1) * PAGE_SIZE

    try {
        const docs = await commentModel.find({ idCourses: req.params.courses })
            .skip(NEXT)
            .limit(PAGE_SIZE)
        return res.status(200).json(docs)

    } catch (error) {
        return res.status(400).json(error);

    }
}


module.exports = { paginationComment }
