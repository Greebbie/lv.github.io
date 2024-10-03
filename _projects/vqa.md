---
layout: page
title: VQA
description: An approach to Video Question Answering that enhances Vision-Language Models by utilizing multiple external vision models.
img: assets/img/vqa.jpg
importance: 1
category: Research
pdf_path: /assets/pdf/VQA.pdf
---
## Project Overview

This research project introduces a groundbreaking approach to Video Question Answering (VideoQA), addressing the limitations of traditional latent video representations. Our novel method leverages multiple external vision models to transform video content into detailed natural language descriptions, significantly enhancing the capabilities of Vision-Language Models.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <div id="pdf-container" data-pdf-src="{{ page.pdf_path | relative_url }}" style="width: 100%; height: 60vh; position: relative;">
            <iframe id="pdf-viewer" style="width: 100%; height: 100%; border: 1px solid #ddd; border-radius: 4px;">
            </iframe>
            <div id="pdf-resizer" style="width: 100%; height: 10px; background-color: #f0f0f0; position: absolute; bottom: -5px; cursor: ns-resize;"></div>
        </div>
    </div>
</div>

<!-- ## External Link -->

<!-- For more information, visit the [project webpage]({{ page.webpage_link }}). -->

<script>
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('pdf-container');
    var iframe = document.getElementById('pdf-viewer');
    var resizer = document.getElementById('pdf-resizer');
    
    if (container && iframe) {
        var pdfSrc = container.getAttribute('data-pdf-src');
        if (pdfSrc) {
            iframe.src = pdfSrc;
        }
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
</script>