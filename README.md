<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/JacksonCohen/jacksoncohen.dev/main/public/logo.png" width="100" />
</div>
<h1 align="center">
  jacksoncohen.dev
</h1>

<img src="https://user-images.githubusercontent.com/44987667/118887537-80466880-b8c8-11eb-80b4-70df9d32d34b.gif" width="100%" />

## 🛠 Installation & Set Up

1. Install [NVM](https://github.com/nvm-sh/nvm) and use Node v14.16.0

   ```sh
   nvm install
   nvm use 14.16.0
   ```

2. Install dependencies

   ```sh
   npm i
   ```

3. Start the development server (default port 3000)

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a fully minified and optimized production build

   ```sh
   npm run build
   ```
   
2. Install `serve` to easily serve static server

   ```sh
   npm i -g serve
   ```

3. Serve the site (default port 5000)

   ```sh
   serve -s build
   ```
