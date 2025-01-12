function addUser(event) {
  event.preventDefault();
  let email = document.getElementById("numb").value;
  let password = document.getElementById("emb").value;

  if (checkin(email, password)) {
    let myuser = JSON.parse(localStorage.getItem("userData")) || [];

    let userExists = myuser.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      showAlert("User Exists", "Welcome Back!", "success", "./index.html");
    } else {
      myuser.push({ email, password });
      localStorage.setItem("userData", JSON.stringify(myuser));
      showAlert(
        "User Added",
        "Your account has been successfully created.",
        "success",
        "./home.html"
      );
    }
  } else {
    showAlert("Failed", "Failed to add user. Invalid details.", "error");
  }
}
function showAlert(title, text, icon, redirectUrl = null) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    time: 10000,

    showClass: {
      popup: "swal2-show animate__animated animate__fadeInDown",
    },
  }).then(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}

function checkin(email, password) {
  let PasswordRegex = /^[A-Za-z]\w{7,14}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) && PasswordRegex.test(password)) {
    showAlert(
      "Success!",
      "You are being redirected.",
      "success",
      "./home.html"
    );
    return true;
  } else {
    showAlert(
      "Invalid Input",
      "Please enter a valid email and password.",
      "error"
    );
    return false;
  }
}

function redirect(event) {
  event.preventDefault();
  showAlert(
    "Redirecting",
    "You are being redirected to the sign-in page.",
    "info",
    "./signin.html"
  );
}
