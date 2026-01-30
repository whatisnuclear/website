---
layout: front
title: What is Nuclear? – Learn about nuclear power
description: >
  Learn all about nuclear power directly from nuclear engineers, from the basics
  to detailed deep dives into types of reactors, nuclear history, economics, and
  nuclear waste
image: /img/dc_cook.jpg
author: nick
byline: false
last_modified_at: 2024-02-25
---

<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
  <div class="col-md-6 p-lg-3 mx-auto my-3">
    <img
      src="/img/reactor_web.svg"
      class="img-fluid w-50"
      alt="
        An icon of
        a nuclear reactor with an atom symbol on a cooling tower and a lightning bolt on the
        reactor.
      "
      {% imagesize img/reactor_web.svg:props %}
    >
    <h1 class="display-3 fw-bold">What is Nuclear?</h1>
    <p class="fs-3 fw-normal text-muted mb-3">Learn about nuclear power</p>
  </div>
</div>

<div class="container">
  <main>
    <div class="container px-4 py-3">
      <div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
        <div class="col feature">
          <div class="card border-0">
            <a href="{% link essentials.md %}" class="stretched-link"></a>
            <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <i class="fas fa-user-graduate"></i>
            <p class="fs-2 mx-2 mb-0 text-body-emphasis">Essentials</p>
            </div>
            <p>
              Start here to learn more about nuclear power's capabilities and limitations. You'll learn about different
              types of nuclear reactors, reprocessing, thorium, fission vs. fusion, and nuclear waste.
            </p>
            <a href="{% link essentials.md %}" class="icon-link"> Start with the Essentials </a>
          </div>
        </div>
        <div class="col feature">
          <div class="card border-0">
          <a href="{% link deep-dives.html %}" class="stretched-link"></a>
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fas fa-book-open"></i>
            <p class="fs-2 mx-2 mb-0 text-body-emphasis">Deep Dives</p>
          </div>
          <p>Get nuanced by reading about nuclear power economics, thorium, the Rickover memo, and beyond</p>
          <a href="{% link deep-dives.html %}" class="icon-link">Dive deeper</a>
        </div>
        </div>
        <div class="col feature">
          <div class="card border-0">
          <a href="{% link histories.html %}" class="stretched-link"></a>
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fas fa-history"></i>
            <p class="fs-2 mx-2 mb-0 text-body-emphasis">History</p>
          </div>
          <p>Learn about the amazing things done in the first nuclear era, and how they 
          can help us proceed today.</p>
          <a href="{% link histories.html %}" class="icon-link">Take me back</a>
        </div>
        </div>
        <div class="col">
          <div class="card border-0">
          <a href="{% link reference.html %}" class="stretched-link"></a>
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="far fa-folder-open"></i>
            <p class="fs-2 mx-2 mb-0 text-body-emphasis">Reference</p>
          </div>
          <p>
            We also feature large amounts of useful reference information and calculators. 
          </p>
          <a href="{% link reference.html %}" class="icon-link">Bask in info</a>
        </div>
        </div>
        <div class="col">
          <div class="card border-0">
          <a href="{% link consulting.md %}" class="stretched-link"></a>
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fas fa-user-tie"></i>
            <p class="fs-2 mx-2 mb-0 text-body-emphasis">Consulting</p>
          </div>
          <p>
            Hire us for nuclear consulting work. We can help execute
            your reactor strategy, perform expert technical reviews, do due
            diligence, and more. 
          </p>
          <a href="{% link consulting.md  %}" class="icon-link">Hire us</a>
        </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <h2>Latest Updates</h2>

      <div id="newsCarousel" class="carousel slide">
        <div class="carousel-inner">
          {%- assign news = site.posts | sort: 'date' | reverse -%}
          {%- for post in news limit: 6 -%}
            {%- assign mod = forloop.index | modulo: 3 -%}
            {%- if mod == 1 -%}
              {% if forloop.index == 1 -%}
                <div class="carousel-item active">
              {%- else -%}
                <div class="carousel-item">
              {%- endif -%}
              <div class="row">
            {%- endif -%}
            <div class="col-md-4 col-sm-12 ">
                <div class="card h-100">
                  <a href="{{ post.url}}" class="stretched-link"></a>
                  <img src="{{ post.image }}" class="card-img-top" alt="Header image for story">
                  <div class="card-body">
                    <p class="fs-5 card-title">{{ post.title }}</p>
                    <p class="card-text">{{ post.description | truncatewords: 25 }}</p>
                    <button class="border-0">
                      <img class="m-1" width="16" height="16" alt="Reactor icon" src="img/reactor_web.svg">Read more
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">Posted on: {{ post.date | date: '%Y-%m-%d' }}</small>
                  </div>
                </div>
            </div>
            {%- if mod == 0 or forloop.last -%}
              </div>

              </div>
            {%- endif -%}
          {%- endfor -%}
        </div>
        <!-- end carousel-inner -->
        <button class="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <a href="{% link news.md %}" class="btn btn-success m-1" role="button"
      ><i class="far fa-newspaper"></i> See all news</a
    >

  </main>

  <div class="row">
    <div class="col-md-12">
      <a href="{% link essentials.md %}" class="btn btn-success m-1" role="button">Next &#10095;</a>
    </div>
  </div>

{% include page_nav.html %}
{% include footer.html %}

</div>
<!-- end container -->
