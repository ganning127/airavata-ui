# Airavata UI

*Ganning Xu*, GSoC 2024 Project

## Running this project

### Setup
1. Clone this repository (`git clone https://github.com/ganning127/airavata-ui.git`)
2. Navigate to the project directory (`cd airavata-ui`)
3. Install dependencies (`npm i`)

### Running the ElectronJS application
> **Make sure you have correct URL in `proxy/novnc_proxy`, line 53**

1. Run the proxy between TCP and WebSocket server (`npm run proxy`) --- do this in a separate terminal, because it will "hang" the terminal
2. Run the ElectronJS application (`npm run dev`)
3. The application should open automatically