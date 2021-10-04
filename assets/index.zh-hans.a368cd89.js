export default"# Angular\n\n我们不提供开箱即用的 Angular 支持，但你可以在 Angular 中轻松使用香草版本。\n\n## 依赖安装\n\n```bash\n# install with npm\nnpm install @milkdown/core @milkdown/preset-commonmark @milkdown/theme-nord\n```\n\n## 创建一个组件\n\n创建一个组件十分简单。\n\n```html\n\x3c!-- editor.component.html --\x3e\n<div #editorRef></div>\n```\n\n```typescript\n// editor.component.ts\nimport { Component, ElementRef, ViewChild } from '@angular/core';\nimport { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';\nimport { commonmark } from '@milkdown/preset-commonmark';\nimport { nord } from '@milkdown/theme-nord';\n\n@Component({\n    templateUrl: './editor.component.html',\n})\nexport class AppComponent {\n    @ViewChild('editorRef') editorRef: ElementRef;\n\n    defaultValue = '# Milkdown x Angular';\n\n    ngAfterViewInit() {\n        Editor.make()\n            .config((ctx) => {\n                ctx.set(rootCtx, this.editorRef.nativeElement);\n                ctx.set(defaultValueCtx, this.defaultValue);\n            })\n            .use(nord)\n            .use(commonmark)\n            .create();\n    }\n}\n```\n\n### 在线示例\n\n!CodeSandBox{milkdown-angular-setup-wowuy?fontsize=14&hidenavigation=1&theme=dark&view=preview}\n";
