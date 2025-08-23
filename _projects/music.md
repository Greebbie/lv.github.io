---
layout: page
title: Musicologist: Charting Music Space with Interpretable Diffusion Trajectories
description: A framework for interpreting diffusion-based music generators by analyzing concept emergence across trajectories.
img: assets/img/music.png
importance: 7
category: Research
pdf_path: /assets/pdf/music.pdf
---

<link rel="stylesheet" href="{{ '/assets/css/pdfresize.css' | relative_url }}">

## Project Overview

Musicologist introduces a novel framework for analyzing how musical concepts emerge during the reverse diffusion process in generative audio models. Using **Stable Audio 1.0** as a backbone, the project explores both **high-level concepts** (e.g., genre, mood) and **low-level features** (e.g., rhythmic drive, timbre) as they form across diffusion steps. 

Our methodology combines **text-guided truncated sampling** to capture evolving semantic structure with **CLAP embeddings + Concept Activation Vectors (CAVs)** to identify fine-grained auditory attributes. Results show that key musical qualities stabilize by ~40% into the diffusion trajectory, providing insights into the structured emergence of concepts in music generation.

This work advances interpretable AI in music by offering tools and datasets for analyzing the conceptual building blocks of audio generation. It contributes to the broader goal of **making generative models more transparent, controllable, and useful for AI-assisted composition**.

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
