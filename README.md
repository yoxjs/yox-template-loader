# yox-loader
```html
<!-- a.html -->
<div class="example">
  {{ msg }}
</div>
```
> npm i yox-template-loader

```js
// webpack.config.js
rules: [
  {
    test: /\/src\/.*?\.html$/,
    use: [ {
      loader: 'yox-template-loader'
    }]
  }
]
```