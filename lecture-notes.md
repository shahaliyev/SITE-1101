---
layout: page
title: Lecture Notes
permalink: /lectures/
---

Below are all lecture notes uploaded during the semester.

{% assign items = site.lectures | sort: "order" %}
{% for lec in items %}
- [{{ lec.title }}]({{ lec.url }})
{% endfor %}
