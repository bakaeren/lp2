document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        dob: document.getElementById('dob').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
    };

    // Simulate AJAX POST to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect
    window.location.href = 'users.html';
});
