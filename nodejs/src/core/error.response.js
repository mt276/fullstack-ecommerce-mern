'use strict'

const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')

class ErrorResponse extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
        Error.captureStackTrace(this, this.constructor) // Ghi lại stack trace
    }
}

// 400 - Bad Request (Lỗi request sai cú pháp)
class BadRequestError extends ErrorResponse {
    constructor(message = ReasonPhrases.BAD_REQUEST) {
        super(message, StatusCodes.BAD_REQUEST)
    }
}

// 401 - Unauthorized (Chưa đăng nhập, token sai)
class UnauthorizedError extends ErrorResponse {
    constructor(message = ReasonPhrases.UNAUTHORIZED) {
        super(message, StatusCodes.UNAUTHORIZED)
    }
}

// 403 - Forbidden (Không có quyền)
class ForbiddenError extends ErrorResponse {
    constructor(message = ReasonPhrases.FORBIDDEN) {
        super(message, StatusCodes.FORBIDDEN)
    }
}

// 404 - Not Found (Không tìm thấy tài nguyên)
class NotFoundError extends ErrorResponse {
    constructor(message = ReasonPhrases.NOT_FOUND) {
        super(message, StatusCodes.NOT_FOUND)
    }
}

// 409 - Conflict (Xung đột dữ liệu)
class ConflictRequestError extends ErrorResponse {
    constructor(message = ReasonPhrases.CONFLICT) {
        super(message, StatusCodes.CONFLICT)
    }
}

// 500 - Internal Server Error (Lỗi hệ thống)
class InternalServerError extends ErrorResponse {
    constructor(message = ReasonStatusCode.INTERNAL_SERVER_ERROR) {
        super(message, StatusCode.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictRequestError,
    InternalServerError
}
