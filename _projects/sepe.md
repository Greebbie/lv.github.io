---
layout: page
title: Semantic Enhanced Point-E
description: Enhancing 3D model generation with multimodal fusion of image and text embeddings.
img: assets/img/sepe.png
importance: 7
category: Research
pdf_path: /assets/pdf/sepe.pdf
---
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}">

## Project Overview

In this project we introduce Semantic Enhanced Point-E (SEPE), an advancement on the Point-E framework for generating 3D point clouds from text prompts. By integrating image and text embeddings through a fusion module early in the generation process, SEPE enhances the semantic fidelity and controllability of the generated 3D models. Experiments demonstrate that this multimodal approach allows for better alignment with user intentions, such as modifying object properties based on text descriptions. 

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