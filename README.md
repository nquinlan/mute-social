# [MuteSocial.com](http://mutesocial.com/)
_Mute Filters for Events and Common Tweets_

This repository controls SocialMute.com, a list of social mute filters. Currently, focused mostly on Twitter/Tweetbot, but with potential to expand into the future.

## Site Structure
The site uses [Jekyll](http://jekyllrb.com/) so it may render on [GitHub pages](http://pages.github.com/). All filters are kept in the directory `_posts/`.

### Filter Frontmatter
All filters have some required [YAML frontmatter](http://jekyllrb.com/docs/frontmatter/), as seen below:

```yml
layout: post # this should remain post
title:  "Facebook Acquisition of Oculus VR" # the title of the post
short: "Oculus Acquisition" # a shorter title (will be included in copied filter)
date:   2014-03-25 15:34:32 # the date
filter: (?i)(occ?ulus|facebook.+(buy|purchase|acqui)) # your filter, can be a regex or string
regex: true # whether or not your filter is a regex
```

## Contributing

If you wish to add your regular expression, simply make a pull request to the repository.