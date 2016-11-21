#!/bin/sh

set -e

# run from inside the web app's root directory
cd "$(cd "$(dirname "$0")" && pwd -P)"

docker build . -t bwstitt/media-suite-web:latest

docker run \
    --rm \
    -it \
    -v $(pwd)/dist:/usr/src/app/dist \
    bwstitt/media-suite-web:latest \
    npm run build.prod

rsync -avh --delete "dist/prod/" "../app/web/"

echo "Success!"
