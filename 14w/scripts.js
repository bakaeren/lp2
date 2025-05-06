fetch("http://localhost:3000/api/users")
  .then((res) => res.json())
  .then((users) => {
    const list = document.getElementById("userList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      list.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });
