# yox-template-loader

Webpack loader for yox template file.

# Install

NPM

```
npm i yox-template-loader
```

YARN

```
yarn add yox-template-loader
```

# Usage

xx.html

```html
<div class="example">
  {{msg}}
</div>
```

webpack.config.js

```js
rules: [
  {
    test: /\/src\/.*?\.html$/,
    use: [{
      loader: 'yox-template-loader'
    }]
  }
]
```