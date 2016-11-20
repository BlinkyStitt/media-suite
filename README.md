# Media Suite

**UNDER CONSTRUCTION**

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

This will take a while to download everything. Once it finishes, you will have a lot of containers running.

```bash
$ ~/media-suite/bin/compose ps
           Name                       Command                       State                        Ports
-----------------------------------------------------------------------------------------------------------------
mediasuite_beets_1           /init                        Up                           0.0.0.0:8337->8337/tcp
mediasuite_booksonic_1       catalina.sh run              Up                           0.0.0.0:8081->8080/tcp
mediasuite_deluge_1          /init                        Up                           0.0.0.0:58846->58846/tcp,
                                                                                       0.0.0.0:58946->58946/tcp,
                                                                                       0.0.0.0:58946->58946/udp,
                                                                                       0.0.0.0:8112->8112/tcp
mediasuite_headphones_1      /init                        Up                           0.0.0.0:8181->8181/tcp
mediasuite_hydra_1           /init                        Up                           0.0.0.0:5075->5075/tcp
mediasuite_jackett_1         /init                        Up                           9117/tcp,
                                                                                       0.0.0.0:9117->9177/tcp
mediasuite_lazylibrarian_1   /init                        Up                           0.0.0.0:5299->5299/tcp
mediasuite_mylar_1           /init                        Up                           0.0.0.0:8090->8090/tcp
mediasuite_plex_1            /init                        Up                           1900/udp,
                                                                                       0.0.0.0:32400->32400/tcp,
                                                                                       0.0.0.0:32400->32400/udp,
                                                                                       0.0.0.0:32469->32469/tcp,
                                                                                       0.0.0.0:32469->32469/udp,
                                                                                       5353/udp
mediasuite_plexpy_1          /init                        Up                           0.0.0.0:8182->8181/tcp
mediasuite_sabnzbd_1         /init                        Up                           0.0.0.0:8082->8080/tcp,
                                                                                       0.0.0.0:9090->9090/tcp
mediasuite_sonarr_1          /init                        Up                           0.0.0.0:8989->8989/tcp
mediasuite_tor_1             /usr/bin/tor -f              Up                           9050/tcp
                             /etc/tor/torrc
```

Going to each port individually works for now, but I plan to put them all behind nginx.


# Developing

```bash
docker pull bwstitt/library-composable:latest \
&& docker build . -t bwstitt/media-suite \
&& docker run \
    --rm -it \
    -e "TARGET=$MEDIA_SUITE_HOME" \
    -v "$MEDIA_SUITE_HOME:$MEDIA_SUITE_HOME" \
    bwstitt/media-suite:latest \
&& $MEDIA_SUITE_HOME/bin/run
```

# TODO

* [ ] Inject `<base href="/base_url">` with nginx? http://stackoverflow.com/questions/19700871/how-to-inject-custom-content-via-nginx should mean less messing with configs