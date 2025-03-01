---
layout: front
title: What is Nuclear? – Nuclear expertise for everyone
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
    <h3 class="fw-normal text-muted mb-3">Nuclear expertise for everyone</h3>
  </div>
</div>

<div class="container">
  <main>
    <div class="container px-4 py-3">
      <div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <a href="{% link essentials.md %}">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h3 class="fs-2 text-body-emphasis">Nuclear Essentials</h3>
            <p>
              Start here to learn more about nuclear power's capabilities and limitations. You'll learn about different
              types of nuclear reactors, reprocessing, thorium, fission vs. fusion, and nuclear waste.
            </p>
            <a href="{% link essentials.md %}" class="icon-link"> Start with the Essentials </a>
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fas fa-book-open"></i>
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#people-circle"/>
            </svg>
          </div>
          <h3 class="fs-2 text-body-emphasis">Nuclear Deep Dives</h3>
          <p>Sharpen up on nuclear power economics, the history of nuclear reactor development, and more</p>
          <a href="{% link reactor-history.md %}" class="icon-link"> Read some early reactor development history </a>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="far fa-folder-open"></i>
          </div>
          <h3 class="fs-2 text-body-emphasis">Reference</h3>
          <p>
            We also feature large amounts of reference information such as
            <a href="{% link calcs.md %}">Calculations</a> and more.
          </p>
          <a href="{% link nuclear-reading-list.md %}" class="icon-link"> See the Nuclear Reading List </a>
        </div>
      </div>
    </div>

    <div class="col-12">
      <h2>Latest Updates</h2>

      <div id="newsCarousel" class="carousel slide">
        <div class="carousel-inner">
          {%- assign news = site.news | sort: 'date' | reverse -%}
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
              <a href="{{ post.url }}" style="text-decoration: none;">
                <div class="card h-100">
                  <img src="{{ post.image }}" class="card-img-top" alt="Header image for story">
                  <div class="card-body">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.description | truncatewords: 25 }}</p>
                    <button class="border-0">
                      <img class="m-1" width="16" height="16" alt="Reactor icon" src="img/reactor_web.svg">Read more
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">Posted on: {{ post.date | date: '%Y-%m-%d' }}</small>
                  </div>
                </div>
              </a>
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
