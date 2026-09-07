#!/usr/bin/env python3
"""Generates the abstract cover images used by Work, Services and Insights.

Run:  python3 scripts/generate-covers.py

Note: every stroke-only shape uses stroke-opacity, never opacity. ImageMagick's
built-in SVG parser (no librsvg here) fills a fill="none" shape when a plain
opacity attribute is present, which is invisible on a dark ground and obvious
on a light one.

These are deliberately generated rather than stock photography. Stock would
either look like everyone else's site or imply things about the work that are
not true. Each composition is drawn from the brand's own geometry — the double
chevron of the mark, the accent, the warm neutral — so the cards read as one
system rather than a gallery.

Editors can still upload a real coverImage in the Studio; it takes precedence.
"""

import subprocess, pathlib, sys

OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "assets" / "covers"
W, H = 1200, 675

INK = "#0A0A0A"
ACCENT = "#CDF140"
DEEP = "#B6D62A"
WARM = "#F2F1EA"
CARD = "#FFFFFF"


def chevrons(bg, fg, dim):
    """The mark's double chevron, blown up and cropped — most on-brand of the set."""
    return f'''<rect width="{W}" height="{H}" fill="{bg}"/>
    <g stroke="{fg}" stroke-width="46" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.95">
      <path d="M330 150 L520 337 L330 525"/>
      <path d="M560 150 L750 337 L560 525"/>
    </g>
    <g stroke="{dim}" stroke-width="46" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.28">
      <path d="M790 150 L980 337 L790 525"/>
    </g>'''


def orbit(bg, fg, dim):
    """Concentric arcs around an off-centre core — value moving through a hub."""
    rings = "".join(
        f'<circle cx="600" cy="337" r="{r}" fill="none" stroke="{dim}" '
        f'stroke-width="2" stroke-dasharray="6 10" stroke-opacity="0.5"/>'
        for r in (140, 210, 280)
    )
    nodes = "".join(
        f'<circle cx="{x}" cy="{y}" r="14" fill="{fg}"/>'
        for x, y in ((600, 127), (860, 300), (760, 520), (440, 520), (340, 300))
    )
    return f'''<rect width="{W}" height="{H}" fill="{bg}"/>{rings}
    <circle cx="600" cy="337" r="74" fill="{fg}"/>{nodes}'''


def matrix(bg, fg, dim):
    """A dot grid with a few cells lit — data, and the small part that matters."""
    dots = []
    lit = {(3, 2), (4, 2), (5, 3), (8, 4), (9, 4), (12, 2), (6, 5)}
    for col in range(16):
        for row in range(9):
            x, y = 120 + col * 60, 90 + row * 60
            on = (col, row) in lit
            dots.append(
                f'<circle cx="{x}" cy="{y}" r="{13 if on else 6}" '
                f'fill="{fg if on else dim}" opacity="{1 if on else 0.35}"/>'
            )
    return f'<rect width="{W}" height="{H}" fill="{bg}"/>' + "".join(dots)


def flow(bg, fg, dim):
    """Parallel curves crossing the frame — routing, corridors, transfer."""
    paths = "".join(
        f'<path d="M-40 {160 + i * 90} C 300 {60 + i * 90}, 900 {380 + i * 90}, 1240 {180 + i * 90}" '
        f'fill="none" stroke="{fg if i == 2 else dim}" stroke-width="{10 if i == 2 else 4}" '
        f'stroke-opacity="{1 if i == 2 else 0.4}" stroke-linecap="round"/>'
        for i in range(5)
    )
    return f'<rect width="{W}" height="{H}" fill="{bg}"/>{paths}'


def strata(bg, fg, dim):
    """Stacked bars of varying width — layers, ledgers, a stack of decisions."""
    widths = [760, 520, 880, 360, 640, 460]
    bars = "".join(
        f'<rect x="150" y="{110 + i * 78}" width="{w}" height="34" rx="17" '
        f'fill="{fg if i in (0, 3) else dim}" opacity="{1 if i in (0, 3) else 0.32}"/>'
        for i, w in enumerate(widths)
    )
    return f'<rect width="{W}" height="{H}" fill="{bg}"/>{bars}'


def contour(bg, fg, dim):
    """Nested rings around a drifting centre — place, and precision that is
    drawn rather than implied. No transform attribute: ImageMagick's built-in
    SVG parser mishandles rotate(a cx cy) and renders the shapes as blobs."""
    rings = []
    for i in range(6):
        cx = 600 + i * 9
        cy = 337 - i * 6
        rings.append(
            f'<ellipse cx="{cx}" cy="{cy}" rx="{104 + i * 66}" ry="{66 + i * 42}" '
            f'fill="none" stroke="{fg if i == 0 else dim}" '
            f'stroke-width="{5 if i == 0 else 3}" stroke-opacity="{1 if i == 0 else 0.5}"/>'
        )
    return (
        f'<rect width="{W}" height="{H}" fill="{bg}"/>' + "".join(rings)
        + f'<circle cx="600" cy="337" r="11" fill="{fg}"/>'
    )


DARK = (INK, ACCENT, "#3A3A34")
LIGHT = (WARM, INK, "#C9C6BA")
LIME = (ACCENT, INK, "#8FA82E")

# slug -> (composition, palette)
COVERS = {
    # case studies
    "kuvarpay": (chevrons, DARK),
    "kuvarsend": (flow, DARK),
    "litscape": (contour, LIGHT),
    # articles
    "settle-in-local-currency": (strata, LIGHT),
    "when-the-machine-is-only-allowed-to-suggest": (contour, DARK),
    "build-or-buy": (matrix, LIGHT),
    # services
    "payments-infrastructure": (flow, DARK),
    "data-infrastructure": (matrix, DARK),
    "ai-automation": (orbit, DARK),
    "blockchain-crypto": (chevrons, DARK),
    "e-commerce": (strata, LIME),
    "product-engineering": (orbit, LIGHT),
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (fn, palette) in COVERS.items():
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
            f'viewBox="0 0 {W} {H}">{fn(*palette)}</svg>'
        )
        dest = OUT / f"{slug}.png"
        p = subprocess.run(
            ["magick", "-background", "none", "svg:-", "-strip", str(dest)],
            input=svg.encode(), capture_output=True,
        )
        if p.returncode != 0:
            print(f"FAILED {slug}: {p.stderr.decode()[:200]}", file=sys.stderr)
            sys.exit(1)
        print(f"  {dest.name}")
    print(f"{len(COVERS)} covers written to public/assets/covers/")


if __name__ == "__main__":
    main()
