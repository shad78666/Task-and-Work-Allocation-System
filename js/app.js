// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // Determine the current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // === Login Page Logic ===
    if (currentPage === 'index.html' || currentPage === '') {
        // Prevent logged-in users from accessing login page
        Auth.preventLoginAccess();

        const loginForm = document.getElementById('loginForm');
        const loginError = document.getElementById('loginError');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const usernameInput = document.getElementById('username').value.trim();
                const passwordInput = document.getElementById('password').value.trim();

                const result = Auth.login(usernameInput, passwordInput);

                if (result.success) {
                    // Redirect based on role
                    if (result.role === 'admin') {
                        window.location.href = 'admin-dashboard.html';
                    } else if (result.role === 'employee') {
                        window.location.href = 'employee-dashboard.html';
                    }
                } else {
                    loginError.textContent = result.message;
                    loginError.classList.add('active');
                }
            });
        }
    }
});

// Global Logout Function
window.logoutUser = () => {
    Auth.logout();
};
