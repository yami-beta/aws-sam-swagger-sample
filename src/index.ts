const createResponse = (statusCode: number, bodyObj: any) => {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyObj)
  };
};

const hello = (event, context, callback) => {
  const { pathParameters } = event;
  if (
    !(
      pathParameters &&
      pathParameters.userName &&
      pathParameters.userName !== ""
    )
  ) {
    return callback(
      null,
      createResponse(400, {
        error: {
          message: "Bad request. userName must be set."
        }
      })
    );
  }

  callback(
    null,
    createResponse(200, {
      message: `Hello ${pathParameters.userName}`
    })
  );
};

export { hello };
