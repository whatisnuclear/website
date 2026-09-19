# Loads .srt subtitle files from _data/transcripts/ into site.data.transcripts,
# keyed by filename, so a transcript can be dropped in exactly as exported with
# no conversion step. Name the file after the film's id in _data/videos.yml and
# the film.liquid include picks it up automatically.
module Jekyll
  class SrtTranscriptGenerator < Generator
    safe true
    priority :high

    TRANSCRIPT_DIR = File.join("_data", "transcripts").freeze
    # 00:01:02,500 --> 00:01:05,000  (SRT commas and WebVTT periods both allowed)
    CUE = /^(\d+):(\d{2}):(\d{2})[,.]\d+\s+-->\s+(\d+):(\d{2}):(\d{2})[,.]\d+/

    def generate(site)
      dir = site.in_source_dir(TRANSCRIPT_DIR)
      return unless File.directory?(dir)

      transcripts = site.data["transcripts"] ||= {}
      Dir.glob(File.join(dir, "*.srt")).sort.each do |path|
        name = File.basename(path, ".srt")
        transcripts[name] = parse(File.read(path, :encoding => "bom|utf-8"))
        Jekyll.logger.debug "Transcripts:", "loaded #{name} (#{transcripts[name].size} cues)"
      end
    end

    private

    # Turn SRT text into the list of {start, end, seconds, text} hashes that
    # _includes/transcript.html renders.
    def parse(text)
      text.gsub("\r\n", "\n").split(/\n{2,}/).filter_map do |block|
        lines = block.strip.split("\n")
        index = lines.index { |line| line =~ CUE }
        next if index.nil?

        cue = CUE.match(lines[index])
        {
          "start"   => timestamp(cue[1], cue[2], cue[3]),
          "end"     => timestamp(cue[4], cue[5], cue[6]),
          "seconds" => cue[1].to_i * 3600 + cue[2].to_i * 60 + cue[3].to_i,
          "text"    => lines[(index + 1)..].join(" ").strip,
        }
      end
    end

    def timestamp(hours, minutes, seconds)
      format("%02d:%s:%s", hours.to_i, minutes, seconds)
    end
  end
end
