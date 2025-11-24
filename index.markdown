---
layout: page
permalink: /
---

{% capture readme %}
{% include_relative README.md %}
{% endcapture %}
{{ readme | markdownify }}
