'use strict'

const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')

class SuccessResponse {
    constructor({ message, statusCode = StatusCodes.OK, reasonStatusCode = ReasonPhrases.OK, metadata = {} }) {
        this.message = !message ? reasonStatusCode : message
        this.status = statusCode
        this.metadata = metadata
    }

    send(res, headers = {}) {
        return res.status(this.status).json(this)
    }
}

// 200 - Success (Thành công chung)
class OK extends SuccessResponse {
    constructor({ message, metadata = {} }) {
        super({ message, metadata })
    }
}

// 201 - Created (Tạo tài nguyên thành công)
class Created extends SuccessResponse {
    constructor({ options = {}, message, statusCode = StatusCodes.CREATED, reasonStatusCode = ReasonPhrases.CREATED, metadata }) {
        super({ message, statusCode, reasonStatusCode, metadata })
        this.options = options
    }
}

// 202 - Accepted (Request đã nhận nhưng chưa xử lý xong)
class Accepted extends SuccessResponse {
    constructor({ message, statusCode = StatusCodes.ACCEPTED, reasonStatusCode = ReasonPhrases.ACCEPTED, metadata }) {
        super({ message, statusCode, reasonStatusCode, metadata })
    }
}

// 204 - No Content (Không có dữ liệu trả về)
class NoContent {
    send(res) {
        return res.status(StatusCodes.NO_CONTENT).send()
    }
}

module.exports = {
    SuccessResponse,
    OK,
    Created,
    Accepted,
    NoContent
}
