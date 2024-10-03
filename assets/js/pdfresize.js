document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.pdf-container');
    const iframe = document.getElementById('pdf-viewer');
    const resizeHandle = document.querySelector('.resize-handle');
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (isResizing) {
            const containerRect = container.getBoundingClientRect();
            const newHeight = e.clientY - containerRect.top;
            iframe.style.height = newHeight + 'px';
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
    }
});