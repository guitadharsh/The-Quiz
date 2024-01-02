const asyncHandler = (requestFunction) => {
    (req, res, next) => {
        Promise.resolve(requestFunction(req, res, next))
            .catch((err) => next(err))
    }
}

export { asyncHandler }