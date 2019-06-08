# yox-template-loader

If you want to use the `runtime` version of yoxjs, you have to precompile the `template` at first.

This is a webpack loader for precompiling yox template file.

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