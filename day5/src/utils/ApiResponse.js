class ApiResponse {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 300; // this line means that the success property of the ApiResponse class is set to true if the statusCode is in the range of 200 to 299 (inclusive), indicating a successful response. If the statusCode is outside this range, success will be set to false, indicating an unsuccessful response. This is a common convention in HTTP status codes, where codes in the 2xx range represent successful responses.
    }

    send(res) {
        res.status(this.statusCode).json({
            message: this.message,
            success: this.success,
            data: this.data
        });
    }
}

module.exports = ApiResponse;