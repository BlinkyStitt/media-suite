# Media Suite

Run all the search tools, downloaders, managers, and players you could ever need with one command.

```bash
export MEDIA_SUITE_HOME=$HOME/media-suite

docker pull bwstitt/media-suite:latest \
&& docker run \
    --rm -it \
    -e "TARGET=$MEDIA_SUITE_HOME" \
    -v "$MEDIA_SUITE_HOME:$MEDIA_SUITE_HOME" \
    bwstitt/media-suite:latest \
&& $MEDIA_SUITE_HOME/bin/run
```

This will take a while to download everything.