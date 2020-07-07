export function fetchFromServer(url, data, method) {
  const response = fetch(url, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => console.log("Message Send!"));
  return response;
}
