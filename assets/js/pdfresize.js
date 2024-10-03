document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('pdf-viewer');
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    iframe.parentNode.insertBefore(resizeHandle, iframe.nextSibling);

    let isResizing = false;
    let lastY;

    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        lastY = e.clientY;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
        e.preventDefault();
    });

    function resize(e) {
        if (!isResizing) return;
        const delta = e.clientY - lastY;
        const newHeight = iframe.offsetHeight + delta;
        iframe.style.height = newHeight + 'px';
        lastY = e.clientY;
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }
});