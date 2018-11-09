(function(){
  const socket = io.connect('http://localhost:3000');
  const path = window.location.pathname;
  const endpoint = path.slice(1, path.indexOf('/requests'));

  socket.on('new_request', function(request) {
    if (request.endpoint === endpoint) {
      addNewRequest(request);
    }
  });

  function addNewRequest(request) {
    const tbody = document.querySelector('.table tbody');
    tbody.insertAdjacentHTML('afterbegin', `<tr class="added">
      <td><span>${new Date(request.created_at).toUTCString()}</span></td>
      <td><kbd>${request.method}</kbd></td>
      <td><code>${request.queryString ? request.queryString : ''}</code></td>
      <td><span>${request.cookies ? JSON.stringify(request.cookies) : ''}</span></td>
    </tr>`);
  }

})();
