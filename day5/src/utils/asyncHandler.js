const asyncHandler = (reqHandler) => {
   (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).catch(next);
    }
}

export {asyncHandler};

// higher order function : A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. In this case, asyncHandler is a higher-order function because it takes a function (fn) as an argument and returns a new function that wraps the original function with additional functionality (error handling in this case).
 
// const ansyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next);
//     }catch(err){
//         res.status(err.code||500).json({
//             success: false,
//             message: err.message || "Internal Server Error"
//         })
//         next(err);
//     }
// }
// to undersatnd this and make more standarized we can read documentation of node api errors 