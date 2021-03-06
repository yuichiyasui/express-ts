/******************************************************************************
 *                          Fetch and display users
 ******************************************************************************/

displayUsers();

function displayUsers() {
  httpGet('/api/users/all')
    .then((response) => response.json())
    .then((response) => {
      var allUsers = response.users;
      console.log(allUsers);
    });
}

function httpGet(path) {
  return fetch(path, getOptions('GET'));
}

function httpPost(path, data) {
  return fetch(path, getOptions('POST', data));
}

function httpPut(path, data) {
  return fetch(path, getOptions('PUT', data));
}

function httpDelete(path) {
  return fetch(path, getOptions('DELETE'));
}

function getOptions(verb, data) {
  var options = {
    dataType: 'json',
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
