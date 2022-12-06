# PTH Inventaire

Premiers pas pour une app de gestion d'inventaire

La chose est deployée https://pth-inventaire.onrender.com.


## Deploy

Click the button below to deploy this app on Render.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)


## Local install

* Big cleanup if you want to start from scratch
   * remove `node_modules` directory
   * remove `package-lock.json` file
   * remove `.next` directory
   * remove cache `~\AppData\Roaming\npm-cache\_cacache`

* based on `package.json` it will download stuff :
   * `npm install --loglevel silly react`
   * `npm install --loglevel silly react-dom`
   * `npm install --loglevel silly next`
   * `npm install --loglevel silly googleapis`

* weird tries
   * npm install xxx
   * npm install next@latest
   * npm upgrade react@latest react-dom@latest
   * npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -S