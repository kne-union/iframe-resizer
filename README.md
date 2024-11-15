
# iframe-resizer


### 描述

用于自动计算内部iframe的高度


### 安装

```shell
npm i --save @kne/iframe-resizer
```


### 概述

此库可以自动调整同域和跨域 iFrame 的高度和宽度以适合其所包含的内容。它提供了一系列功能来解决使用 iFrame 时最常见的问题，其中包括：

* 将 iFrame 的高度和宽度调整为内容大小。
* 适用于多个嵌套的 iFrame。
* 跨域 iFrames 的域身份验证。
* 提供一系列的页面大小计算方法，支持复杂的CSS布局。
* 使用MutationObserver检测可能导致页面调整大小的 DOM 更改。
* 检测可能导致页面调整大小的事件（窗口大小调整、CSS 动画和过渡、方向改变和鼠标事件）。
* 通过postMessage简化 iFrame 和主机页面之间的消息传递。
* 修复 iFrame 中的页面链接并支持 iFrame 和父页面之间的链接。
* 提供自定义尺寸和滚动方法。
* 向 iFrame 公开父位置和视口大小。
* 与ViewerJS配合使用以支持 PDF 和 ODF 文档。
* 支持 IE 11


### 用法
可以使用原生JavaScript 调用它；
```javascript
import iFrameResize from '@kne/iframe-resizer';

const iframes = iFrameResize([{ options }], [css selector] || [iframe]);
```
第二个文件 ( dist/contentWindow.js ) 需要放置在 iFrame 中包含的页面中。此文件旨在作为其他人系统上的访客，因此没有依赖关系，并且在被包含页面的消息激活之前不会执行任何操作。

### 典型设置
正常配置是当浏览器窗口大小改变或 iFrame 内容改变时，iFrame 会调整大小。要进行此设置，您需要将 iFrame 的一个尺寸配置为百分比，并告诉库仅更新另一个尺寸。通常，您会将宽度设置为 100%，并让高度缩放以适应内容。
```html
<style>
  iframe {
    width: 1px;
    min-width: 100%;
  }
</style>
<iframe id="myIframe" src="http://anotherdomain.com/iframe.html"></iframe>
<script>
  iFrameResize({ log: true }, '#myIframe')
</script>
```

注意：使用min-width设置 iFrame 的宽度，可以解决 iOS 中导致 iFrame 无法正确调整大小的问题。


### 示例

#### 示例代码



### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

