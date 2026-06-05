#!/usr/bin/env bash

for text in TXT/{a,act}6*.txt; do
    BRUH="$(basename $text .txt)"
    python3 txt2lines.py $BRUH
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to reformat $BRUH"
        exit 1
    fi
    echo $BRUH
    echo "DONE"
done