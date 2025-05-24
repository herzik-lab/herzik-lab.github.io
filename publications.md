---
title: Publications | Herzik Lab
layout: default
---

<div class="container">
    <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
            <h1 class="page-title">Publications</h1>
        </div>
        <div class="col-md-2">
        </div>
    </div>
</div>

{% for publication in site.data.publications | sort: date %}

<hr style="padding-top: 1em;">

<div class="container publication">
    <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
            {% if publication.image %}
                <img src="{{ publication.image }}" class="img-responsive"><br>
            {% endif %}
            <div class="paper-title">
                <h4><strong><em>{{ publication.title }}</em></strong></h4><br>
            </div>
            <div class="journal-title">
                <em>{{ publication.journal }}</em>
                    {{ publication.date }}
            </div>
            <div class="citation-spacing">{{ publication.authors }}<br>
                {% if publication.equal_contribution %}
                    <div style="font-size: .8em; color: gray;">
                        {{ publication.equal_contribution }}
                    </div>
                {% endif %} 
            </div>
            {% if publication.abstract %}
               <strong>Abstract</strong><br>
               <div class="abstract-text"> 
                   {{ publication.abstract }}
               </div>
            {% endif %}
        </div>
        <div class="col-md-2">
        </div>
    </div>
    <div class="row" style="padding-top: 2em;">
        <div class="col-md-2">
        </div>
        <div class="col-md-4">
            <p><strong>Access the Paper</strong></p>
                <ul style="color: gray;">
                    {% if publication.pmid %}
                      <li>PMID: <a href="http://www.ncbi.nlm.nih.gov/pubmed/{{publication.pmid}}" alt = "pubmed link: {{publication.pmid}}"> {{publication.pmid}}</a></li>
                        {% else %}
                          <li>PMID: Submitted</li> 
                    {% endif %} 
                    {% if publication.pmcid %}
                      <li>PMCID: <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/{{publication.pmcid}}" alt = "pubmed central link: {{publication.pmcid}}"> {{publication.pmcid}}</a></li>  
                        {% else %}
                          <li>PMCID: Submitted</li>
                    {% endif %}
                    {% if publication.biorxiv_preprint %}
                      <li>Biorxiv Preprint: <a href="http://dx.doi.org/10.1101/{{publication.biorxiv_preprint}}" alt = "biorxiv preprint link: {{publication.biorxiv_preprint}}"> {{publication.biorxiv_preprint}}</a></li>
                    {% endif %}
                </ul>
        </div>
        <div class="col-md-4">
            <p><strong>Additional Links</strong></p>
                <ul style="color: gray">
                    {% if publication.pdb %}
                        {if publication.pdb != "none"}
                        <li>PDB: <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb}}">{{publication.pdb}}</a></li>
                        {% endif %}
                    {% else %}
                        <li>PDBs: <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb1}}">{{publication.pdb1}}</a> <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb2}}">{{publication.pdb2}}</a> <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb3}}">{{publication.pdb3}}</a> <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb4}}">{{publication.pdb4}}</a> <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb5}}">{{publication.pdb5}}</a> <a href="http://www.rcsb.org/pdb/explore/explore.do?structureId={{publication.pdb6}}">{{publication.pdb6}}</a></li>
                    {% endif %}
                    {% if publication.emd %}
                        {if publication.emd != "none"}
                        <li>EMDB: <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb}}">{{publication.emdb}}</a></li>
                        {% endif %}
                    {% else %}
                        <li>EMDBs: <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb1}}">{{publication.emdb1}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb2}}">{{publication.emdb2}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb3}}">{{publication.emdb3}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb4}}">{{publication.emdb4}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb5}}">{{publication.emdb5}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb6}}">{{publication.emdb6}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb7}}">{{publication.emdb7}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb8}}">{{publication.emdb8}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb9}}">{{publication.emdb9}}</a> <a href="http://www.ebi.ac.uk/pdbe/entry/emdb/{{publication.emdb10}}">{{publication.emdb10}}</a></li>
                    {% endif %}
                    {% if publication.raw_data %}
                        {if publication.raw_data != "none"}
                        <li>Raw Data: <a href="https://www.ebi.ac.uk/pdbe/emdb/empiar/entry/{{publication.raw_data}}">EMPIAR-{{publication.raw_data1}}</a></li>
                        {% endif %}
                    {% else %}
                        <li>Raw Data: <a href="https://www.ebi.ac.uk/pdbe/emdb/empiar/entry/{{publication.raw_data1}}">EMPIAR-{{publication.raw_data1}}</a>, <a href="https://www.ebi.ac.uk/pdbe/emdb/empiar/entry/{{publication.raw_data2}}">EMPIAR-{{publication.raw_data2}}</a>, <a href="https://www.ebi.ac.uk/pdbe/emdb/empiar/entry/{{publication.raw_data3}}">EMPIAR-{{publication.raw_data3}}</a></li>
                    {% endif %}
                    {% if publication.lab %}
                        <li><a href="{{ publication.lab_link }}">{{ publication.lab }}</a></li>
                    {% endif %}
                    {% if publication.second_lab %}
                        <li><a href="{{ publication.second_lab_link }}">{{ publication.second_lab }}</a></li>
                    {% endif %}
                    {% if publication.third_lab %}
                        <li><a href="{{ publication.third_lab_link }}">{{ publication.third_lab }}</a></li>
                    {% endif %}
                </ul>
        </div>
        <div class="col-md-2">
       </div>
    </div>
  </div>
{% endfor %}
