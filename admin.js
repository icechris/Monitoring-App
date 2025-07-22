// Elements
const addUserBtn = document.getElementById('addUserBtn');
const addUserModal = document.getElementById('addUserModal');
const editUserModal = document.getElementById('editUserModal');
const notificationIcon = document.getElementById('notificationIcon');
const notificationDrawer = document.getElementById('notificationDrawer');
const addPostBtn = document.getElementById('addPostBtn');
const addPostModal = document.getElementById('addPostModal'); // Ensure modal exists in HTML

// Open Add User Modal
if (addUserBtn && addUserModal) {
    addUserBtn.addEventListener('click', () => {
        addUserModal.classList.remove('hidden');
    });
}

// Open Add Post Modal
if (addPostBtn && addPostModal) {
    addPostBtn.addEventListener('click', () => {
        addPostModal.classList.remove('hidden');
    });
}

// Close Modals (Add, Edit, Post)
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modalId = closeBtn.getAttribute('data-close');
        document.getElementById(modalId).classList.add('hidden');
    });
});

// Toggle Notification Drawer
notificationIcon.addEventListener('click', () => {
    notificationDrawer.classList.toggle('visible');
});

// Close Notification Drawer on outside click or ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && notificationDrawer.classList.contains('visible')) {
        notificationDrawer.classList.remove('visible');
    }
});

// Optional close button inside the drawer
document.querySelectorAll('.close-notification-drawer').forEach(btn => {
    btn.addEventListener('click', () => {
        notificationDrawer.classList.remove('visible');
    });
});

// Edit buttons open Edit Modal
document.querySelectorAll('.edit-btn').forEach(editBtn => {
    editBtn.addEventListener('click', () => {
        editUserModal.classList.remove('hidden');
    });
});

// Delete with confirmation
document.querySelectorAll('.delete-btn').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this personnel?')) {
            alert('Personnel deleted.');
            // Add Firebase delete logic here
        }
    });
});

// Generate codes
function generateCode(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

document.querySelectorAll('.generate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.value = generateCode();
    });
});

// Add User Form
const addUserForm = document.getElementById('addUserForm');
if (addUserForm) {
    addUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('User added successfully.');
        addUserModal.classList.add('hidden');
        // Firebase add logic here
    });
}

// Edit User Form
const editUserForm = document.getElementById('editUserForm');
if (editUserForm) {
    editUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('User updated successfully.');
        editUserModal.classList.add('hidden');
        // Firebase update logic here
    });
}

// Add Post Form
const addPostForm = document.getElementById('addPostForm');
if (addPostForm) {
    addPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Post added successfully.');
        addPostModal.classList.add('hidden');
        // Firebase add post logic here
    });
}
// Handle outpost delete buttons
document.querySelectorAll('.remove-outpost-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this outpost?')) {
            btn.closest('.outpost-card').remove();
            // TODO: Add Firebase deletion logic here if needed
            alert('Outpost removed.');
        }
    });
});
