// const globalErrorHandler = (err, _req, res, _next) => {
//   // format error
//   res.status(err.status || 500).json({
//     message: err.message,
//     errors: err.errors,
//   });
// };

// module.exports = globalErrorHandler;

const globalErrorHandler = (err, _req, res, _next) => {
  console.error("Error:", err.message);

  // Render the error.ejs template and pass error data to it
  res.status(err.status || 500).render("error", {
    errorMessage: err.message,
    statusCode: err.status || 500,
    stackTrace: process.env.NODE_ENV === "development" ? err.stack : null, // Show stack trace only in development mode
  });
};

module.exports = globalErrorHandler;
