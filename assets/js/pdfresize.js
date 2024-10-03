document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('pdf-viewer');
    let isResizing = false;
    let lastDownY = 0;

    iframe.style.resize = 'vertical';
    iframe.style.overflow = 'auto';

    iframe.addEventListener('mousedown', function(e) {
        // Check if the click is on the bottom edge (within 10px)
        if (iframe.offsetHeight - e.clientY + iframe.offsetTop < 10) {
            isResizing = true;
            lastDownY = e.clientY;
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        const delta = e.clientY - lastDownY;
        const newHeight = iframe.offsetHeight + delta;
        iframe.style.height = newHeight + 'px';
        lastDownY = e.clientY;
    });

    document.addEventListener('mouseup', function() {
        isResizing = false;
    });
});