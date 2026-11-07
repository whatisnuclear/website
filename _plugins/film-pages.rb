# Gives every catalog film that has a transcript but no announcement post a page
# of its own at /films/<id>.html, so the transcript has somewhere to live. The
# page is just film.liquid (video, catalog description, transcript), so dropping
# _data/transcripts/<id>.srt in place is all it takes to publish one. Films that
# a post lists in its `films:` front matter are skipped: the post already shows
# the transcript, and the catalog table links there instead.
require "set"

module Jekyll
  class FilmPage < PageWithoutAFile
    def initialize(site, film)
      super(site, site.source, "films", "#{film["id"]}.html")
      data.merge!(
        "layout"       => "default",
        "title"        => film["title"],
        "subtitle"     => [film["date"], "film, with transcript"].compact.join(" "),
        "description"  => film["description"].to_s.strip,
        "image"        => thumbnail(film),
        "film_id"      => film["id"],
        "reading_time" => false,
        "about_author" => false
      )
      self.content = "{% include film.liquid id=page.film_id %}"
    end

    private

    def thumbnail(film)
      Array(film["links"]).each do |link|
        id = link["url"].to_s[%r{(?:youtube\.com/watch\?v=|youtu\.be/)([\w-]{11})}, 1]
        return "https://i.ytimg.com/vi/#{id}/hqdefault.jpg" if id
      end
      nil
    end
  end

  class FilmPageGenerator < Generator
    safe true
    priority :normal # after SrtTranscriptGenerator (:high) has loaded the transcripts

    def generate(site)
      transcripts = site.data["transcripts"] || {}
      announced = site.posts.docs.flat_map { |post| Array(post.data["films"]) }.to_set

      Array(site.data["videos"]).each do |film|
        next unless transcripts.key?(film["id"]) && !announced.include?(film["id"])

        site.pages << FilmPage.new(site, film)
      end
    end
  end
end
