// js/storage.js

const Storage = {
    // Save data to localStorage
    save: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },

    // Get data from localStorage
    get: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    // Remove data from localStorage
    remove: (key) => {
        localStorage.removeItem(key);
    },

    // Default Initialization
    initSystem: () => {
        // Initialize users if not present
        if (!Storage.get('users')) {
            const defaultAdmin = {
                id: 'USR-001',
                username: 'admin',
                password: 'admin123', // In a real app, this should be hashed
                role: 'admin',
                name: 'System Administrator',
                department: 'Management',
                email: 'admin@system.local'
            };
            Storage.save('users', [defaultAdmin]);
        }

        // Initialize tasks if not present
        if (!Storage.get('tasks')) {
            Storage.save('tasks', []);
        }
    }
};

// Initialize system on script load
Storage.initSystem();
