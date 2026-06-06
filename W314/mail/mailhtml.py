import json
from textwrap import indent
from collections import defaultdict

MAIL_FILE = "mail.json"

CATEGORIES = [
    ("all", "All Mail"),
    ("news", "News"),
    ("updates", "Updates"),
    ("promotional", "Promotional"),
    ("spam", "Spam"),
    ("trash", "Trash"),
]


# =========================
# LOAD MAILS
# =========================

def load_mails():
    with open(MAIL_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    for i, m in enumerate(data, start=1):
        m["id"] = f"m{i}"

    return data


# =========================
# SUBCATEGORIES
# =========================

def extract_subcategories(mails):
    counts = defaultdict(int)
    order = []

    # count occurrences + preserve order
    for m in mails:
        sub = m.get("sub")
        if sub:
            safe = sub.replace(" ", "_")
            counts[safe] += 1
            if safe not in order:
                order.append(safe)

    # only keep subs that appear more than once
    subs = [s for s in order if counts[s] > 1]

    return subs


# =========================
# INPUTS
# =========================

def generate_category_inputs(subs):
    html = []

    for category, _ in CATEGORIES:
        checked = " checked" if category == "all" else ""
        html.append(f'<input type="radio" name="category" id="cat-{category}"{checked}>')

    if subs:
        for sub in subs:
            html.append(f'<input type="radio" name="category" id="sub-{sub}">')

    return "\n".join(html)


def generate_category_buttons(subs):
    html = []

    html.extend(
        f'<label for="cat-{c}">{label}</label>'
        for c, label in CATEGORIES
    )

    if subs:
        html.extend(
            f'<label class="sub-label" for="sub-{s}">{s.replace("_", " ")}</label>'
            for s in subs
        )

    return "\n".join(html)


def generate_mail_inputs(mails):
    html = ['<input type="radio" name="mail" id="none" checked>']

    for m in mails:
        html.append(f'<input type="radio" name="mail" id="{m["id"]}">')

    return "\n".join(html)


# =========================
# INBOX
# =========================

def generate_inbox(mails):
    blocks = []

    for m in mails:
        cat = m.get("category", "updates")
        sub = m.get("sub", "").replace(" ", "_")

        classes = cat
        if sub:
            classes += f" {sub}"

        blocks.append(f"""
<label class="mail {classes}" for="{m['id']}">
    <div class="mail-title">{m['title']}</div>
    <div class="mail-sub">{m['sub']}</div>
</label>
""".strip())

    return "\n\n".join(blocks)


# =========================
# VIEWER
# =========================

def generate_viewer(mails):
    panels = ["""
<div class="viewer-panel default">
    <h2>Inbox</h2>
    <p>Select a message.</p>
</div>
""".strip()]

    for m in mails:
        images_html = ""

        if m.get("images"):
            images_html = "\n".join(
                f'<img src="{img}" style="width:33%; height:auto; object-fit:cover;">'
                for img in m["images"]
            )

        panels.append(f"""
<div class="viewer-panel {m['id']}">
    <h2>{m.get("viewerTitle", m["title"])}</h2>

    <div class="mail-images">
        {images_html}
    </div>

    <div class="mail-content">
{indent(m["content"].strip(), "        ")}
    </div>
</div>
""".strip())

    return "\n\n".join(panels)


# =========================
# CSS
# =========================

def generate_css(mails, subs):
    css = []

    css.append("""
<style>
body {
    margin: 0;
    font-family: "Courier New", monospace;
    background: #3b2f2f;
    color: white;
    background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("blocks/Ender_Chest_top_block.png");
    background-size: 64px 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    overflow: hidden;
}

.mailbox {
    width: 90vw;
    height: 80vh;
    background: rgba(0,0,0,0.6);
    border: 4px solid #2e7d32;

    display: flex;
    overflow: hidden;

    align-items: stretch;
}

input[type="radio"] {
    display: none;
}

/* =======================
   CATEGORIES
   ======================= */

.categories {
    width: 180px;
    border-right: 3px solid #1b5e20;
    background: rgba(0,0,0,0.3);

    display: flex;
    flex-direction: column;

    flex-shrink: 0;

    overflow-y: auto;
    height: 100%;
}

.categories label {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #2e7d32;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.categories label:hover {
    background: rgba(46,125,50,0.4);
}

/* sub labels */
.categories label.sub-label {
    padding: 5px !important;
    padding-left: 10px;
    font-size: 13px;
    opacity: 0.9;
}

.separator {
    height: 2px;
    background: #1b5e20;
    margin: 8px 0;
}

/* =======================
   INBOX
   ======================= */

.inbox {
    width: 300px;
    border-right: 3px solid #1b5e20;

    overflow-y: auto;
    height: 100%;
    min-height: 0;
}

.mail {
    display: block;
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #2e7d32;
    background: rgba(0,0,0,0.15);
}

.mail:hover {
    background: rgba(46,125,50,0.4);
}

.mail-title {
    font-weight: bold;
}

.mail-sub {
    color: #ccc;
    font-size: 14px;
}

/* =======================
   VIEWER
   ======================= */

.viewer {
    flex: 1;
    padding: 20px;

    overflow-y: auto;
    min-height: 0;
}

.viewer-panel {
    display: none;
}

h2 {
    margin-top: 0;
    color: #ff5555;
}

/* =======================
   VIEWER SWITCHING
   ======================= */

#none:checked ~ .viewer .default {
    display: block;
}
""")

    for m in mails:
        css.append(f"""
#{m['id']}:checked ~ .viewer .{m['id']} {{
    display: block;
}}
""")

    css.append("""
/* =======================
   CATEGORY FILTERING
   ======================= */

#cat-all:checked ~ .inbox .mail {
    display: block;
}
""")

    for category, _ in CATEGORIES:
        if category == "all":
            continue

        css.append(f"""
#cat-{category}:checked ~ .inbox .mail {{
    display: none;
}}

#cat-{category}:checked ~ .inbox .mail.{category} {{
    display: block;
}}
""")

    if subs:
        css.append("""
/* =======================
   SUBCATEGORY FILTERING
   ======================= */
""")

        for sub in subs:
            css.append(f"""
#sub-{sub}:checked ~ .inbox .mail:not(.{sub}) {{
    display: none;
}}
""")

    css.append("</style>")
    return "\n".join(css)


# =========================
# BUILD HTML
# =========================

def build_html(mails):
    subs = extract_subcategories(mails)

    return f"""
{generate_css(mails, subs)}

<div class="mailbox">

{generate_category_inputs(subs)}

{generate_mail_inputs(mails)}

<div class="categories">
{indent(generate_category_buttons(subs), "    ")}
</div>

<div class="inbox">
{indent(generate_inbox(mails), "    ")}
</div>

<div class="viewer">
{indent(generate_viewer(mails), "    ")}
</div>

</div>
"""


# =========================
# MAIN
# =========================

def main():
    mails = load_mails()

    html = build_html(mails)

    with open("mail_output.html", "w", encoding="utf-8") as f:
        f.write(html)

    print(f"Generated {len(mails)} mails.")


if __name__ == "__main__":
    main()