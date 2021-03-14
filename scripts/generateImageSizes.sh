#!/usr/bin/env nix-shell
#!nix-shell -p imagemagick -i bash
#shellcheck shell=bash

set -e
echo "converting $1 to jpeg"
convert "$1.$2" "$1_large.jpeg"

echo "converting $1.$2 to 50% size"
convert -resize 50% "$1.$2" "$1_medium.jpeg"

echo "converting $1.$2 to 25% size"
convert -resize 10% "$1.$2" "$1_small.jpeg"
