function addUser(event) {
  event.preventDefault();
  const emailInput = document.getElementById("numb");
  const passwordInput = document.getElementById("emb");
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!isValidInput(email, password)) {
    showAlert(
      "Invalid Input",
      "Please enter a valid email and password.",
      "error"
    );
    return;
  }

  const users = JSON.parse(localStorage.getItem("userData")) || [];

  const userExists = users.some(
    (user) => user.email === email && user.password === password
  );

  if (userExists) {
    showAlert("User Exists", "Welcome Back!", "success", "./home.html");
  } else {
    users.push({ email, password });
    localStorage.setItem("userData", JSON.stringify(users));
    showAlert(
      "User Added",
      "Your account has been successfully created.",
      "success",
      "./home.html"
    );
  }
}

function showAlert(title, text, icon, redirectUrl = null) {
  Swal.fire({
    title,
    text,
    icon,
    timer: 10000,
    showClass: {
      popup: "swal2-show animate__animated animate__fadeInDown",
    },
  }).then(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}

function isValidInput(email, password) {
  const passwordRegex = /^[A-Za-z]\w{7,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && passwordRegex.test(password);
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
