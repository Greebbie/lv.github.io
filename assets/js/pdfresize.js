// assets/js/pdf-viewer-resize.js

function loadPDF() {
    var container = document.getElementById('pdf-container');
    var iframe = document.getElementById('pdf-viewer');
    
    if (container && iframe) {
        var pdfSrc = container.getAttribute('data-pdf-src');
        if (pdfSrc) {
            console.log('Loading PDF from:', pdfSrc);
            iframe.src = pdfSrc;
        } else {
            console.error('PDF source not found');
        }
    } else {
        console.error('Container or iframe not found');
    }
}

function setupResizer() {
    var container = document.getElementById('pdf-container');
    var iframe = document.getElementById('pdf-viewer');
    var resizer = document.getElementById('pdf-resizer');

    if (!resizer && iframe) {
        resizer = document.createElement('div');
        resizer.id = 'pdf-resizer';
        resizer.className = 'resize-handle';
        iframe.parentNode.insertBefore(resizer, iframe.nextSibling);
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
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadPDF, 100); // 100ms delay for loading PDF
    setupResizer();
});