const newFormandler = async function (event) {
  event.preventDefault();

  const body = document.querySelector('input[name="post-body"]').value;

  await fetch("/api/post/:id", {
    method: "PUT",
    body: JSON.stringify({
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/dashboard");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormandler);
