---
layout: page
title: Enhancing Shape Bias in CNNs
description: Combining depth density estimation with image classification to enhance shape bias in CNNs.
img: assets/img/loc.png
importance: 3
category: Research
pdf_path: /assets/pdf/loc.pdf
---
## Project Overview

LOCNet explores enhancing shape bias in CNNs by jointly optimizing depth estimation and classification tasks. Using a ResNet50-based encoder-decoder architecture trained on a novel ImageNet-derived dataset, our model outperforms classification-only models on out-of-distribution datasets, particularly in sketch and texture-based filters. This approach shows promise in bridging the gap between human and machine vision, improving robustness in image classification tasks.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <div id="pdf-container" data-pdf-src="{{ page.pdf_path }}">
            <iframe id="pdf-viewer"></iframe>
        </div>
    </div>
</div>

<div class="caption">
    View the full project documentation above or <a href="{{ page.pdf_path }}" target="_blank">download the PDF</a>. 
</div>

<script src="{{ '/assets/js/pdfresize.js'}}"></script>
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css'}}">
<!-- ## External Link -->

<!-- For more information, visit the [project webpage]({{ page.webpage_link }}). -->