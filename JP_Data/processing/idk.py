import json

with open('dz_intermission.html') as file:
    text = file.read()
    lines = text.split("<br />\n")

    lines.pop(0) # just to get rid of first ----
    while len(lines) > 1:
        page_num = lines.pop(0)
        title = lines.pop(0)
        buf = []
        while lines[0] != '----':
            upnext = lines.pop(0)
            if not upnext:
                upnext = "<br /><br />"
            buf.append(upnext)

        lines.pop(0) # to clear the ----
        buf = buf[:-3]

        # get rid of leading linebreaks
        while len(buf) > 0 and buf[0] == "<br /><br />":
            buf.pop(0)

        content = ''.join(buf)

        # get rid of santen stuff
        content = content.replace('<span class="santen">…</span>' , '...')

        # actually render greater than (and less than)
        content = content.replace('&gt;', '>').replace('&lt;', '<')

        page_id = 1900 + int(page_num)

        print(f'{{"{page_id:06}": {{"title": "{title}", "content": "{content}"}}}}')
