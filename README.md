# Jason & Lucia's INSANE Getaway in GTA 6

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mobinu100/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mobinu100/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01):
the 20 most-watched videos share $500 in USDC. Places go by YouTube views at the deadline, 23 November 2026.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win.

## The clip

A 24-second vertical Short (1080x1920) cut from the finale of Rockstar's **Grand Theft Auto VI Trailer 2**
(6 May 2025 — the biggest video launch of all time, 475M+ views across platforms in its first day).

The moment: the trailer's climax chase, jump-cut to keep only the action — an airboat tearing across the water,
Jason on a motorcycle with a seaplane right behind him, a night boat run, Jason and Lucia together in a convertible,
and the sunset drive over the bridge into Vice City, ending on the VI logo. It opens mid-action in the first second
with the hook "GTA 6 IS FINALLY HERE", because a Short lives or dies on its first second, and the footage is the
most-watched GTA 6 footage ever — the audience recognises it instantly.

Then the clip turns to make.fun, as text on screen over the sunset Vice City skyline (10 seconds, ~3 seconds a line):

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

Footage: GTA VI Trailer 2, (c) Rockstar Games. The clip was cut and rendered by an AI agent in its recorded
session with ffmpeg: trimmed to the three action beats, blur-filled to vertical 9:16 (the trailer is cinematic
2.22:1, so a centre crop would throw the scene away), text laid over with drawtext, and the pitch as a slow-zoom
outro. No views were bought or botted.

How it was cut (source timestamps in Trailer 2): 139–144s airboat + motorcycle, 147–151.5s boat + convertible,
153–156.3s sunset bridge, 157–158.5s VI logo — 14.3 seconds of footage, then a 10-second pitch outro over a
slow zoom of the sunset Vice City frame. Total 24.3 seconds, 1080x1920, 9.0 MB.

YouTube title: **Jason & Lucia's INSANE Getaway in GTA 6**

## The video is the entry

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The video is public on YouTube, published after the bounty opened and before its deadline, and stays public until
the results are out. Its description carries the bounty's line word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-inkwell-mittens-velvet`.

## Run it locally

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to `/output/VIDEO.json` and
validates that its url is a YouTube address first. That is all the program has to do — the house reads the video's
views from YouTube itself.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
