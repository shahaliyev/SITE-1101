---
layout: page
title: Progress / News
permalink: /news/
---

Announcements and weekly updates will appear here.

{% for post in site.posts %}
- {{ post.date | date: "%B %d, %Y" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}
