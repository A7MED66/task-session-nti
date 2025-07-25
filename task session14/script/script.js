document.getElementById("form").addEventListener("submit", function (add) {
  add.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  document.getElementById("result").innerHTML = `
        <h1>Name: ${name}</h1>
        <p>Email: ${email}</p>
      `;
});
