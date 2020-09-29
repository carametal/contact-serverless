fetch(window._config.api.invokeUrl + '/helloWorld')
  .then(response => response.json())
  .then(data => {
    document.getElementById('test-div').textContent = data;
  })