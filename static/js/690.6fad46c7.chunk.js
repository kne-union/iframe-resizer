"use strict";(self.webpackChunk_kne_components_iframe_resizer=self.webpackChunk_kne_components_iframe_resizer||[]).push([[690],{5690:(e,i,r)=>{r.r(i),r.d(i,{default:()=>n,manifest:()=>a});const n={IframeResizer:{name:"iframe-resizer",summary:'<p>\u6b64\u5e93\u53ef\u4ee5\u81ea\u52a8\u8c03\u6574\u540c\u57df\u548c\u8de8\u57df iFrame \u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u4ee5\u9002\u5408\u5176\u6240\u5305\u542b\u7684\u5185\u5bb9\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u529f\u80fd\u6765\u89e3\u51b3\u4f7f\u7528 iFrame \u65f6\u6700\u5e38\u89c1\u7684\u95ee\u9898\uff0c\u5176\u4e2d\u5305\u62ec\uff1a</p>\n<ul>\n<li>\u5c06 iFrame \u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u8c03\u6574\u4e3a\u5185\u5bb9\u5927\u5c0f\u3002</li>\n<li>\u9002\u7528\u4e8e\u591a\u4e2a\u5d4c\u5957\u7684 iFrame\u3002</li>\n<li>\u8de8\u57df iFrames \u7684\u57df\u8eab\u4efd\u9a8c\u8bc1\u3002</li>\n<li>\u63d0\u4f9b\u4e00\u7cfb\u5217\u7684\u9875\u9762\u5927\u5c0f\u8ba1\u7b97\u65b9\u6cd5\uff0c\u652f\u6301\u590d\u6742\u7684CSS\u5e03\u5c40\u3002</li>\n<li>\u4f7f\u7528MutationObserver\u68c0\u6d4b\u53ef\u80fd\u5bfc\u81f4\u9875\u9762\u8c03\u6574\u5927\u5c0f\u7684 DOM \u66f4\u6539\u3002</li>\n<li>\u68c0\u6d4b\u53ef\u80fd\u5bfc\u81f4\u9875\u9762\u8c03\u6574\u5927\u5c0f\u7684\u4e8b\u4ef6\uff08\u7a97\u53e3\u5927\u5c0f\u8c03\u6574\u3001CSS \u52a8\u753b\u548c\u8fc7\u6e21\u3001\u65b9\u5411\u6539\u53d8\u548c\u9f20\u6807\u4e8b\u4ef6\uff09\u3002</li>\n<li>\u901a\u8fc7postMessage\u7b80\u5316 iFrame \u548c\u4e3b\u673a\u9875\u9762\u4e4b\u95f4\u7684\u6d88\u606f\u4f20\u9012\u3002</li>\n<li>\u4fee\u590d iFrame \u4e2d\u7684\u9875\u9762\u94fe\u63a5\u5e76\u652f\u6301 iFrame \u548c\u7236\u9875\u9762\u4e4b\u95f4\u7684\u94fe\u63a5\u3002</li>\n<li>\u63d0\u4f9b\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u548c\u6eda\u52a8\u65b9\u6cd5\u3002</li>\n<li>\u5411 iFrame \u516c\u5f00\u7236\u4f4d\u7f6e\u548c\u89c6\u53e3\u5927\u5c0f\u3002</li>\n<li>\u4e0eViewerJS\u914d\u5408\u4f7f\u7528\u4ee5\u652f\u6301 PDF \u548c ODF \u6587\u6863\u3002</li>\n<li>\u652f\u6301 IE 11</li>\n</ul>\n<h3>\u7528\u6cd5</h3>\n<p>\u53ef\u4ee5\u4f7f\u7528\u539f\u751fJavaScript \u8c03\u7528\u5b83\uff1b</p>\n<pre><code class="language-javascript">import iFrameResize from \'@kne/iframe-resizer\';\n\nconst iframes = iFrameResize([{ options }], [css selector] || [iframe]);\n</code></pre>\n<p>\u7b2c\u4e8c\u4e2a\u6587\u4ef6 ( dist/contentWindow.js ) \u9700\u8981\u653e\u7f6e\u5728 iFrame \u4e2d\u5305\u542b\u7684\u9875\u9762\u4e2d\u3002\u6b64\u6587\u4ef6\u65e8\u5728\u4f5c\u4e3a\u5176\u4ed6\u4eba\u7cfb\u7edf\u4e0a\u7684\u8bbf\u5ba2\uff0c\u56e0\u6b64\u6ca1\u6709\u4f9d\u8d56\u5173\u7cfb\uff0c\u5e76\u4e14\u5728\u88ab\u5305\u542b\u9875\u9762\u7684\u6d88\u606f\u6fc0\u6d3b\u4e4b\u524d\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002</p>\n<h3>\u5178\u578b\u8bbe\u7f6e</h3>\n<p>\u6b63\u5e38\u914d\u7f6e\u662f\u5f53\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6539\u53d8\u6216 iFrame \u5185\u5bb9\u6539\u53d8\u65f6\uff0ciFrame \u4f1a\u8c03\u6574\u5927\u5c0f\u3002\u8981\u8fdb\u884c\u6b64\u8bbe\u7f6e\uff0c\u60a8\u9700\u8981\u5c06 iFrame \u7684\u4e00\u4e2a\u5c3a\u5bf8\u914d\u7f6e\u4e3a\u767e\u5206\u6bd4\uff0c\u5e76\u544a\u8bc9\u5e93\u4ec5\u66f4\u65b0\u53e6\u4e00\u4e2a\u5c3a\u5bf8\u3002\u901a\u5e38\uff0c\u60a8\u4f1a\u5c06\u5bbd\u5ea6\u8bbe\u7f6e\u4e3a 100%\uff0c\u5e76\u8ba9\u9ad8\u5ea6\u7f29\u653e\u4ee5\u9002\u5e94\u5185\u5bb9\u3002</p>\n<pre><code class="language-html">&lt;style&gt;\n  iframe {\n    width: 1px;\n    min-width: 100%;\n  }\n&lt;/style&gt;\n&lt;iframe id="myIframe" src="http://anotherdomain.com/iframe.html"&gt;&lt;/iframe&gt;\n&lt;script&gt;\n  iFrameResize({ log: true }, \'#myIframe\')\n&lt;/script&gt;\n</code></pre>\n<p>\u6ce8\u610f\uff1a\u4f7f\u7528min-width\u8bbe\u7f6e iFrame \u7684\u5bbd\u5ea6\uff0c\u53ef\u4ee5\u89e3\u51b3 iOS \u4e2d\u5bfc\u81f4 iFrame \u65e0\u6cd5\u6b63\u786e\u8c03\u6574\u5927\u5c0f\u7684\u95ee\u9898\u3002</p>',description:"\u7528\u4e8e\u81ea\u52a8\u8ba1\u7b97\u5185\u90e8iframe\u7684\u9ad8\u5ea6.",packageName:"@kne/iframe-resizer",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"iframe_resizer_184e5",style:"",list:[]}}},a={name:"iframe-resizer",version:"0.1.0","open-version":!0,"public-url":"/iframe-resizer",modules:[{name:"iframe-resizer",baseDir:"/home/runner/work/iframe-resizer/iframe-resizer",description:"\u7528\u4e8e\u81ea\u52a8\u8ba1\u7b97\u5185\u90e8iframe\u7684\u9ad8\u5ea6.",packageName:"@kne/iframe-resizer"}]}}}]);
//# sourceMappingURL=690.6fad46c7.chunk.js.map