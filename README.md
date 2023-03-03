# Webpack-Test

 測試什麼是Webpack

Step 1. 安裝 Node.js
首先，你需要在你的電腦上安裝 Node.js，可以到 Node.js 官網下載並安裝。

Step 2. 創建新的專案資料夾
在你的電腦上創建一個新的資料夾，並在其中創建一個 package.json 文件，可以使用以下命令進行創建：

```txt
mkdir my-project
cd my-project
npm init -y
```

這個命令將在 my-project 資料夾中創建一個 package.json 文件，其中 -y 表示使用默認配置。

Step 3. 安裝 Webpack 和相關的 loader
使用 npm 安裝 Webpack 和一些必要的 loader，例如 babel-loader、css-loader 和 style-loader。可以使用以下命令進行安裝：

```txt
npm install webpack webpack-cli --save-dev
npm install babel-loader @babel/core @babel/preset-env --save-dev
npm install css-loader style-loader --save-dev
```

- **`webpack`** 和 **`webpack-cli`** 是 Webpack 的核心依賴項，用於打包和執行命令。
- **`babel-loader`**、**`@babel/core`** 和 **`@babel/preset-env`** 用於處理 ES6 以上的 JavaScript 代碼，將其轉換成瀏覽器可識別的代碼。
- **`css-loader`** 和 **`style-loader`** 用於處理 CSS 和樣式等資源。

Step 4. 創建 Webpack 配置文件
在項目資料夾中創建一個 webpack.config.js 文件，這個文件用於配置 Webpack。可以使用以下程式碼進行創建：

```jsx
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

這個配置文件中定義了入口檔案、輸出檔案、loader 和插件等屬性。其中，entry 屬性定義了入口檔案，output 屬性定義了輸出檔案的位置和名稱，module 屬性定義了使用的 loader。

Step 5. 創建入口檔案和資源檔案
在 src 資料夾中創建一個 index.js 檔案，並在其中編寫 JavaScript 代碼。同時，在 src 資料夾中創建一個 styles.css 檔案，並在其中編寫 CSS 代碼，例如：

```jsx
// index.js
import './styles.css';

const element = document.createElement('div');
element.innerHTML = 'Hello, World!';
document.body.appendChild(element);
```

```css
/* styles.css */
body {
  background-color: #f0f0f0;
}

div {
  font-size: 24px;
  color: #333;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
}
```

這裡的 index.js 使用 ES6 的模組系統，引入了 styles.css 檔案，並在其中創建了一個 div 元素。

Step 6. 執行 Webpack 打包
使用以下命令執行 Webpack 打包：

```txt
npx webpack --mode development
```

這個命令將會將入口檔案和資源檔案打包到一個名為 bundle.js 的檔案中。在這個例子中，輸出的 bundle.js 檔案將會被放置到 dist 資料夾中。

這就是使用 Webpack 的基本步驟。通過配置 Webpack 配置文件，你可以將不同的資源文件進行打包，從而優化你的前端項目。