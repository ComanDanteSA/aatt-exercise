exports.handler = async (event) => {
    return sendRes(200);
};

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "Automation for the People", timestamp: Math.round(Date.now()/1000)})
  };
  return response;
};