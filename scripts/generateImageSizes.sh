#!/usr/bin/env nix-shell
#!nix-shell -p imagemagick -i bash
#shellcheck shell=bash

set -e
echo "converting $1.png to webp"
convert "$1.png" "$1_large.webp"

echo "converting $1.png to 50% size"
convert -resize 50% "$1.png" "$1_medium.webp"

echo "converting $1.png to 25% size"
convert -resize 10% "$1.png" "$1_small.png"
