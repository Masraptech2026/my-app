# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

```bash
node app.js
```

The server listens on port **5000**. (Note: the `console.log` in `app.js` incorrectly references port 3000 — that is a bug.)

## Architecture

This is a minimal Node.js HTTP server using only the built-in `http` module — no external dependencies, no `package.json`, no framework. All HTTP requests are handled by a single callback in `app.js` that returns a static "Hello World" response.
