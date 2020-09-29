fetch(_config.api.invokeUrl + '/helloworld')
  .then(response => response.json())
  .then(data => {
    document.getElementById('test-div').textContent = data;
  })