exports.handler = async (event) => {
    return sendRes(200);
};

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "Automate all the things!", timestamp: Math.round(Date.now()/1000)})
  };
  return response;
};