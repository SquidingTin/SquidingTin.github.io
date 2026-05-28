import json
from textwrap import indent

MAIL_FILE = "mail.json"


def load_mails():
    with open(MAIL_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    # auto assign ids
    for i, m in enumerate(data, start=1):
        m["id"] = f"m{i}"

    return data


def generate_inputs(mails):
    return "\n".join(
        f'<input type="radio" name="mail" id="{m["id"]}">'
        for m in mails
    )


def generate_inbox(mails):
    return "\n\n".join(f"""
<label class="mail" for="{m["id"]}">
    <div class="mail-title">{m["title"]}</div>
    <div class="mail-sub">{m["sub"]}</div>
</label>
""".strip("\n") for m in mails)


def generate_viewer(mails):
    panels = ["""
<div class="viewer-panel default">
    <h2>Inbox</h2>
    <p>Select a message to view its contents.</p>
</div>
""".strip("\n")]

    for m in mails:
        images_html = ""

        if "images" in m:
            images_html = "\n".join(
                f'<img src="{img}" style="width: 33%; height: auto; object-fit: cover;">'
                for img in m["images"]
            )

        panels.append(f"""
<div class="viewer-panel {m["id"]}">
    <h2>{m.get("viewerTitle", m["title"])}</h2>

    <div class="mail-images">
        {images_html}
    </div>

    <div class="mail-content">
        {indent(m["content"].strip(), "        ")}
    </div>
</div>
""".strip("\n"))

    return "\n\n".join(panels)

    for m in mails:
        panels.append(f"""
<div class="viewer-panel {m["id"]}">
    <h2>{m.get("viewerTitle", m["title"])}</h2>
{indent(m["content"].strip(), "    ")}
</div>
""".strip("\n"))

    return "\n\n".join(panels)


def build_html(mails):
    return f"""
{generate_inputs(mails)}

<div class="inbox">
{generate_inbox(mails)}
</div>

<div class="viewer">
{generate_viewer(mails)}
</div>
"""


def main():
    mails = load_mails()

    html = build_html(mails)

    with open("mail_output.html", "w", encoding="utf-8") as f:
        f.write(html)

    print("Generated mail_output.html")


if __name__ == "__main__":
    main()