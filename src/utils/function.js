export function postMessage(url, data) {
  const response = fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => console.log("Message Send!"));
  return response;
}

export function updateMessage(url, data) {
  const response = fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => console.log("Message Send!"));
  return response;
}
