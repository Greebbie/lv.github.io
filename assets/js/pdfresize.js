// assets/js/pdfresize.js

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('pdf-container');
    var iframe = document.getElementById('pdf-viewer');
    var resizer = document.createElement('div');
    resizer.id = 'pdf-resizer';
    resizer.className = 'resize-handle';
    
    if (container && iframe) {
        var pdfSrc = container.getAttribute('data-pdf-src');
        if (pdfSrc) {
            // Use the relative path directly
            iframe.src = pdfSrc;
        }
        container.appendChild(resizer);
    }

    if (resizer && container) {
        var startY, startHeight;

        function initDrag(e) {
            startY = e.clientY;
            startHeight = parseInt(document.defaultView.getComputedStyle(container).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            var newHeight = (startHeight + e.clientY - startY) / window.innerHeight * 100;
            newHeight = Math.max(20, Math.min(newHeight, 90)); // Limit between 20% and 90%
            container.style.height = newHeight + 'vh';
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }

        resizer.addEventListener('mousedown', initDrag, false);
    }
});