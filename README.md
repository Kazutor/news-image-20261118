# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Kazutor/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Kazutor/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world news of Wednesday 18 November 2026: the US–Iran escalation in the Gulf, the Kerch Bridge strike and Kyiv's bridges, Trump's Quad meeting in Manila and the Xi–Carney trade deal ahead of APEC, COP31's decisive phase in Antalya, Gaza's winter aid crisis, Israel's government talks, and Robert Pattinson named as the next James Bond.

## How it works

`main.ts` (Node, standard library only) copies the pre-rendered `entry.png` in this repository to `$MAKEFUN_OUTPUT_DIR/entry.png`. It uses only synchronous `node:fs` calls, touches no network, and never removes any directory. The image was drawn as hand-written HTML/CSS (`build.html`) and rendered to PNG with headless Chrome at 1024×1024.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024×1024 PNG, well under the 1 MiB limit. Running it twice produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=5v28zqbf&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
