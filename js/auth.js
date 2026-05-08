// js/auth.js

const Auth = {
    // Check if user is logged in
    getCurrentUser: () => {
        return Storage.get('currentUser');
    },

    // Login user
    login: (username, password) => {
        const users = Storage.get('users') || [];
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            Storage.save('currentUser', user);
            return { success: true, role: user.role };
        }
        return { success: false, message: 'Invalid username or password' };
    },

    // Logout user
    logout: () => {
        Storage.remove('currentUser');
        window.location.href = 'index.html';
    },

    // Guard route based on role
    requireAuth: (allowedRoles = ['admin', 'employee']) => {
        const currentUser = Auth.getCurrentUser();
        
        if (!currentUser) {
            window.location.href = 'index.html';
            return false;
        }

        if (!allowedRoles.includes(currentUser.role)) {
            // Redirect to their respective dashboard
            if (currentUser.role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else if (currentUser.role === 'employee') {
                window.location.href = 'employee-dashboard.html';
            }
            return false;
        }

        return currentUser;
    },

    // Prevent logged-in users from accessing login page
    preventLoginAccess: () => {
        const currentUser = Auth.getCurrentUser();
        if (currentUser) {
            if (currentUser.role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else if (currentUser.role === 'employee') {
                window.location.href = 'employee-dashboard.html';
            }
        }
    }
};
