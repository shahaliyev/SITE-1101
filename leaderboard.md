---
layout: page
title: 🏆 Project 1
permalink: /leaderboard/
---

<style>
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }

  .project-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

 
  .rank-1 { border: 2px solid #FFD700; }
  .rank-1::after { content: '🥇 1st Place'; background: #FFD700; color: #000; }

  .rank-2 { border: 2px solid #C0C0C0; }
  .rank-2::after { content: '🥈 2nd Place'; background: #C0C0C0; color: #000; }

  .rank-3 { border: 2px solid #CD7F32; }
  .rank-3::after { content: '🥉 3rd Place'; background: #CD7F32; color: #fff; }

  .rank-1::after, .rank-2::after, .rank-3::after {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.85rem;
    z-index: 5;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    pointer-events: none;
  }

  .rank-other::after {
    content: '#' attr(data-rank); /* Shows #4, #5, etc. */
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.6);
    color: white;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    z-index: 5;
  }

  .video-placeholder {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    background-color: #000;
    cursor: pointer;
    overflow: hidden;
  }

  .video-placeholder img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .video-placeholder:hover img {
    opacity: 1;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 40px;
    background-color: #ff0000;
    border-radius: 10px;
    z-index: 2;
    transition: all 0.2s;
  }
  .play-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent white;
  }
  .video-placeholder:hover .play-button {
    background-color: #cc0000;
  }

  .video-placeholder iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .card-content {
    padding: 1.2rem;
    text-align: left;
  }
  .team-name {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #222;
  }
  .project-desc {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
  }
</style>

<div class="intro">
  <p>Below are the best projects submitted by our student teams this semester.</p>
</div>

<div class="showcase-grid">
  {% for project in site.data.showcase %}
    {% assign rank_class = "rank-other" %}
    {% if project.rank == 1 %}{% assign rank_class = "rank-1" %}
    {% elsif project.rank == 2 %}{% assign rank_class = "rank-2" %}
    {% elsif project.rank == 3 %}{% assign rank_class = "rank-3" %}
    {% endif %}

    <div class="project-card {{ rank_class }}" data-rank="{{ project.rank }}">
      
      <div class="video-placeholder" data-id="{{ project.video_id }}">
        <img src="https://img.youtube.com/vi/{{ project.video_id }}/maxresdefault.jpg" alt="Video Thumbnail">
        <div class="play-button"></div>
      </div>

      <div class="card-content">
        <div class="team-name">{{ project.team }}</div>
        <div class="project-desc">{{ project.desc }}</div>
      </div>
    
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var videos = document.querySelectorAll(".video-placeholder");

  videos.forEach(function(vid) {
    vid.addEventListener("click", function() {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.getAttribute("data-id") + "?autoplay=1&rel=0");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "true");
      
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  });
});
</script>