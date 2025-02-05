---
layout: page
title: scCST
description:  A Continuous Spatial-Temporal Transformer for interpolating cellular trajectories between sampled time points in single-cell sequencing data.
img: assets/img/scCST.png
importance: 3
category: Research
pdf_path: /assets/pdf/scCST.pdf
---
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}">
## Project Overview

Our research introduces scCST (single-cell Continuous Spatial-Temporal Transformer), a novel model for interpolating cellular trajectories in single-cell sequencing data. scCST outperforms conventional Transformers, providing a more detailed representation of cellular progression. Through comprehensive evaluation of various architectures, we found that combining scVAE with batch effect correction, discrete cell alignment, and a CST model without noise amplification yields the most accurate tracking of cellular development, significantly advancing single-cell temporal analysis.

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
<!-- <script src="{{ '/assets/js/pdfresize.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}"> -->

<!-- ## External Link -->

<!-- For more information, visit the [project webpage]({{ page.webpage_link }}). -->