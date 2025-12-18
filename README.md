<div align="center">
  <h1>Messenger Store PWA Enabler</h1>
  <p>A lightweight Tampermonkey userscript that force-enables full PWA mode for Messenger on Microsoft Edge.</p>
</div>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
</p>

## Overview

When running Facebook Messenger installed through the Microsoft Store on Windows via Microsoft Edge, the application appends `__pwa=1` to the URL. This parameter can limit standard PWA functionality or force degraded web wrappers.

This userscript intercepts navigation at document start, resets `__pwa` to `0`, and restores the full progressive web application interface.

## Features

- Fast execution: Runs at `document-start` before DOM construction to avoid visual flickers or delayed redirects.
- Universal domain matching: Intercepts all subdomains under `messenger.com`.
- Minimal footprint: Pure native JavaScript with zero external libraries.

## Requirements

A compatible userscript manager extension installed in Microsoft Edge or Chromium:
- [Tampermonkey](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

## Installation

1. Install a userscript manager in your browser.
2. Open [`messenger-store-pwa-enabler.user.js`](https://raw.githubusercontent.com/NightMean/Messenger-Store-PWA-Enabler/main/messenger-store-pwa-enabler.user.js) in your browser.
3. Confirm the installation in your userscript manager prompt.

## Usage

1. Launch your installed Messenger PWA application or navigate to `https://www.messenger.com/`.
2. The userscript automatically detects and clears the `__pwa=1` query parameter from the URL.

## Donations

If you find this project useful, you can support its maintenance:

- [GitHub Sponsors](https://github.com/sponsors/NightMean)
- [Buy Me a Coffee](https://buymeacoffee.com/nightmean)
- [Ko-fi](https://ko-fi.com/nightmean)

## License

This project is licensed under the [MIT License](LICENSE).
