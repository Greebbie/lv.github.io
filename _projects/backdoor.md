---
layout: page
title: TSBRD
description:  A Trigger Simulation Backdoor Removal Defense for improving LLM robustness against backdoor attacks.
img: assets/img/TSBRD.png
importance: 2
category: Research
pdf_path: /assets/pdf/TSBRD.pdf
---
<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}">
## Project Overview

Our research presents TSBRD (Trigger Simulation Backdoor Removal Defense), an approach to improving the robustness of LLMs against backdoor attacks. Unlike conventional methods that rely on retraining with clean data, TSBRD utilizes virtual prompt embeddings to simulate and neutralize backdoor triggers directly within the model’s embedding space. This method enables targeted backdoor mitigation without requiring access to an untainted model. Experimental evaluations on adversarial benchmarks confirm that TSBRD effectively reduces backdoor vulnerabilities while preserving LLMs’ original capabilities, ensuring safer and more reliable model performance.


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