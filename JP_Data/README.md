# Directory Structure

- `hsjp.json`: Pages 1 to 1072, translated by the group HSJP. Hosted on mspfa.com
- D_eadend_Z's translation: hosted on Privattr
    - `dz_act3.json`: From page 1073 to the end of Act 3
    - `dz_intermission.json`: The first Intermission, with the Felt
    - `dz_act4.json`
    - `dz_act5act1.json`
- nicenice's translation: hosted on Privatter
    - `a5a2_one.json`, `a5a2_two.json`, `a5a2_three.json`: Act 5 Act 2's translation broken into three TXT files
- Misc. things
    - `ps_extra.jsonl`: Single page of Problem Sleuth bonus material, linked to in Act 5 Act 1
    - `psleuth.json`: I started a translation of Problem Sleuth (Homestuck's predecessor) for fun. Close to zero progress on that.
    - `scratchbanner.json`: For hover text on the header images, near the end of Act 5 Act 2.
- `README.md`: This file!
- `processing/`: Where the magic happens
    - `HTML/`, `JSONL/`, `TXT/`: Directories for each filetype. I'll get into this later.
    - `scraping/`: Old directory for scraping the original MSPFA translation by HSJP
    - `scraps.md`: Whenever there's an image with lots of baked-in text, I put the text here so others can edit it.
    - `blankpages.txt`: List of pages that should have no text but don't. This usually indicates an image that needs to be translated.
    - `a52cleanup.py`: Script that cleans up and restructures nicenice's HTML files and outputs them as TXT files
    - `html2lines.py`: Script that turns raw HTML to JSONL
    - `lines2json.py`: Script that turns JSONL to JSON
    - `txt2lines.py`: Script that turns TXT to JSON

You'll probably need to add `mspa.json` to both this directory and `processing/` for things to work right. 
I haven't included that in the directory because it may be considered proprietary.

# Why is it like this?

The `scraping/` directory contains a basic scrapy thing which extracts all the text from HSJP's translation of Acts 1 to 3 on MSPFA.
This outputs all the contents into a JSONL file. JSONL is like JSON except each entry must be entirely contained in one line. And no tabs.

`MSPFA --[Scrapy]--> JSONL`

The Unofficial Homestuck Collection uses JSON to store information, so we have to reformat this to be a JSON file. Pretty simple to do.
This is where the `lines2json.py` script comes in. It also adds furigana to chumhandles.

`MSPFA --[Scrapy]--> JSONL --[lines2json]--> JSON`

Notice that if we redo any of the scrapy things or rerun `lines2json`, any changes to the final output JSON will be overwritten. So, you should
**NOT** do either of those, as they are just set-up. Editing should be done in the final output JSON. It's tedious, I know. Maybe I'll write
something that makes editing these final JSONs easier, but no promises.

That's how we implemented the translation of Acts 1 to 3. Starting with DZ's translation of Act 3, the raw Japanese translations are now 
hosted on a website called Privattr. Since the pages are so simple, I decided to download them by hand and delete any front matter or
unnecessary scripts. These raw translations are what's inside of `HTML/` in the `processing/` directory.

Since we're no longer using MSPFA as our original source, we need a new starting point. That's `HTML/`. To get that to JSONL format, we use
the `html2lines.py` script.

`HTML --[html2lines]--> JSONL --[lines2json]--> JSON`

Since we are dealing with unformatted HTML, the text is missing all the colors and furigana and such. `html2lines` adds in these missing things,
as well as doing some cleanup and formatting. Just like before, edits are done with final output JSONs, and everything before that in the chain
is only set-up. So the rest of Act 3, the Intermission, Act 4, and Act 5 Act 1 are all edited like this.

Then beginning with Act 5 Act 2, which is nicenice's translation, the raw is so inconsistent that I couldn't go from HTML straight to JSONL. 
I wrote the `a52cleanup.py` script to reformat the HTML as TXT, which is much easier to edit. I realized it would be better to edit then
format to JSON instead of formatting to JSON then editing. So far we have this:

`HTML --[a52cleanup]--> TXT`

I also realized that JSONL files are just an intermediary, so I stuck the previous two scripts together to create `txt2lines.py`, which I 
admit is a bit of a misnomer. But in fairness, it does produce a JSONL file as a side-effect. This gives us

`HTML --[a52cleanup]--> TXT --[txt2lines]--> JSON`

Unlike the previous iterations, the edits are done in the TXT files, in the `TXT/` directory. I then run the script `txt2lines` to produce the JSONs
that the Unofficial Homestuck Collection is expecting.

## TL;DR

Edits and revisions are done in the JSON files in `JP_Data/`, except for the translation of Act 5 Act 2.

## What about the website?

The website requires the translation to be reformatted again. That's handled by another script in another repo.
I'm in the middle of refactoring it, but once I'm done I'll include a section about it here.
