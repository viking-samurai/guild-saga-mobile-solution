#!/bin/bash -e

# This script deploys the built HTML and CSS files to the staging server
rsync -a ./dist/ ubuntu@3.237.200.250:/var/www/guildsaga/html --exclude "*.css.map" --progress