function onSubmit() {
    if (document.getElementById('pass').value == '1234') {
      window.location.href = "mainpage.html";
      if (document.getElementById('pass').value == '2345') {
        window.location.href = "admin page.html";
    } else {
      alert('Access Denied, Please try again');
    }
  }}