module Jekyll
    class Scholar
      module Utilities
        alias_method :original_reference_tag, :reference_tag
        def reference_tag(entry, index = nil)
          original = original_reference_tag(entry, index)
          if entry[:url]
            original.sub(entry[:url], "<a href=\"#{entry[:url]}\">#{entry[:url]}</a>")
          elsif entry[:doi]
            original.sub(entry[:doi], "<a href=\"#{entry[:doi]}\">#{entry[:doi]}</a>")
          else
            original
          end
        end
      end
    end
  end