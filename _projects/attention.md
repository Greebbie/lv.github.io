---
layout: page
title: Attention-driven Object Recognition
description: Investigating the role of attention mechanisms in object recognition.
img: assets/img/attention.png
importance: 5
category: Research
pdf_path: /assets/pdf/clpsattention.pdf
---
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}">

## Project Overview

This is a computational neuroscience project explores the role of attention mechanisms in object recognition, drawing inspiration from biological systems to enhance AI models. By integrating spatial attention pathways into an object recognition model with additional visual cortex layers (V1-V4, Spat1, Spat2), we demonstrate that attention improves accuracy in complex tasks, though often with increased reaction times.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <div id="pdf-container" data-pdf-src="{{ page.pdf_path | relative_url }}">
            <iframe id="pdf-viewer"></iframe>
        </div>
    </div>
</div>

<div class="caption">
    <a href="{{ page.pdf_path | relative_url }}" target="_blank">Download the PDF</a>
</div>

<script src="{{ '/assets/js/pdfresize.js' | relative_url }}"></script>

<!-- ## External Link -->

<!-- For more information, visit the [project webpage]({{ page.webpage_link }}). -->