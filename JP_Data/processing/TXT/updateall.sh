#!/usr/bin/env bash

for text in TXT/*.txt; do
    BRUH="$(basename $text .txt)"
    python3 txt2lines.py $BRUH
    echo $BRUH
    echo "DONE"
done
