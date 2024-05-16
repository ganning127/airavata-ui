# Airavata UI

*Ganning Xu*, GSoC 2024 Project

## Running this project

### Setup
1. Clone this repository (`git clone https://github.com/ganning127/airavata-ui.git`)
2. Navigate to the project directory (`cd airavata-ui`)
3. Install dependencies (`npm i`)

### Running the ElectronJS application
| **Make sure you have correct URL in `proxy/novnc_proxy`, line 53**

1. Run the proxy between TCP and WebSocket server (`npm run proxy`) --- do this in a separate terminal, because it will "hang" the terminal
2. Run the ElectronJS application (`npm run dev`)



```
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```
