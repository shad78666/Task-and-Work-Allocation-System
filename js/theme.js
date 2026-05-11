// js/theme.js

// Run immediately to avoid flash of wrong theme
const initTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', initTheme);

document.addEventListener('DOMContentLoaded', () => {
    // Create floating toggle button
    const btn = document.createElement('button');
    btn.id = 'themeToggleBtn';
    btn.className = 'theme-toggle-fixed';
    btn.title = "Toggle Light/Dark Mode";
    
    // Restore position if saved
    const savedX = localStorage.getItem('themeBtnX');
    const savedY = localStorage.getItem('themeBtnY');
    if (savedX && savedY) {
        btn.style.left = savedX;
        btn.style.top = savedY;
        btn.style.bottom = 'auto';
        btn.style.right = 'auto';
    }

    document.body.appendChild(btn);
    updateToggleButton(initTheme);
    makeDraggable(btn);
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateToggleButton(newTheme);
}

function updateToggleButton(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Drag functionality
function makeDraggable(el) {
    let dragOffsetX = 0, dragOffsetY = 0;
    let isDragging = false;

    el.onmousedown = dragMouseDown;
    el.ontouchstart = dragTouchStart;

    // Intercept click to prevent toggling if dragging
    el.onclick = function(e) {
        if (isDragging) {
            e.preventDefault();
            isDragging = false;
        } else {
            toggleTheme();
        }
    };

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calculate offset of the cursor relative to the button
        const rect = el.getBoundingClientRect();
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        isDragging = false;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        isDragging = true;
        
        el.style.left = (e.clientX - dragOffsetX) + "px";
        el.style.top = (e.clientY - dragOffsetY) + "px";
        el.style.bottom = 'auto';
        el.style.right = 'auto';
    }

    function dragTouchStart(e) {
        const rect = el.getBoundingClientRect();
        dragOffsetX = e.touches[0].clientX - rect.left;
        dragOffsetY = e.touches[0].clientY - rect.top;
        
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDragTouch;
        isDragging = false;
    }

    function elementDragTouch(e) {
        isDragging = true;
        el.style.left = (e.touches[0].clientX - dragOffsetX) + "px";
        el.style.top = (e.touches[0].clientY - dragOffsetY) + "px";
        el.style.bottom = 'auto';
        el.style.right = 'auto';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
        
        if (isDragging) {
            localStorage.setItem('themeBtnX', el.style.left);
            localStorage.setItem('themeBtnY', el.style.top);
            // Delay resetting isDragging so the click handler knows it was a drag
            setTimeout(() => { isDragging = false; }, 50);
        }
    }
}
