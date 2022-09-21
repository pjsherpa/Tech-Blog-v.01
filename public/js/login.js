const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-login");
  const passwordEl = document.querySelector("#password-input-login");
  if (usernameEl && passwordEl) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("FIND THIS", usernameEl.value, passwordEl.value);
    if (response.ok) {
      console.log("response", response);
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login");
    }
  }
};
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
