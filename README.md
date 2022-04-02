# edg956.github.io
This is a small Nuxt.js project for my personal website hosted in github.

## geoffrey
A helper to install the compiled files into `gh-pages`.

### Commands
- build: builds a docker image with node:16
- start: runs `npm run dev` inside of a container started from the image build with `build`
- install: runs `npm run generate` to build the static files and moves them to the branch `gh-pages`
- ensure\_deps: runs `npm install` to install all dependencies
- shell: runs `bash` within a container started from the image built with `build`

Note: all commands except `build` mount the current directory - with is expected to be the root of the repo - to `/app` inside the container. `ensure_deps` will install all dependencies on the host machine.

