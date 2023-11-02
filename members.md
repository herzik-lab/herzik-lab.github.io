---
title: Members | Herzik Lab
layout: default
---

<div class="container">
  <div class="row">
    <div class="col-md-2">
    </div>
    <div class="col-md-8">
      <h1 class="page-title">Herzik Lab Members</h1>
      <p>The Herzik lab welcomes people of any race, religion, national origin, gender identity, caregiver and family commitments, political affiliation, sexual orientation, and eligible age or ability.</p>
    </div>
    <div class="col-md-2">
    </div>
  </div>
</div>



{% for person in site.data.member %}
<hr style="padding-top: 1em;">
<div class="container member-profile" style="padding-bottom: 2em;">
  <div class="row">
    <div class="col-md-2">
    </div>
    <div class="col-md-4" style="background-color: ;">
      {% if person.image %}
        <img src="{{ person.image }}" class="img-responsive">
      {% endif %}
    </div>
    <div class="col-md-6">
    <strong>{{ person.name }}</strong><br>
      {{ person.position }}<br>
      {% if person.program %}
        {{ person.program}}<br>
      {% endif %}
      {% if person.department %}
        {{ person.department }}<br>
      {% endif %}
      {% if person.funding %}
        {{ person.funding }}<br>
      {% endif %}
      <em>{{ person.email }}</em><br>
      {% if person.orcid %}
        <a href="{{person.orcid}}"> {{person.orcid}}</a> <br>
      {% endif %}
      {% if person.pubmed %}
        <a href="{{ person.pubmed }}">PubMed Citations</a><br>
      {% endif %}
      {% if person.twitter %}
        <a href="{{person.twitter}}"> {{person.twitter}}</a> <br>
      {% endif %}
      {% if person.website %}
        <a href="{{person.website}}"> 
          {{ person.website | replace: 'http://', '' | replace: 'https://', '' }}
        </a> 
      {% endif %}
      <br>
      <br>
      {% if person.description %}
        {{ person.description }}
      {% endif %}
    </div>
    <div class="col-md-2">
    </div>
  </div>
</div>
{% endfor %}
