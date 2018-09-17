(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。")]),t._v(" "),a("p",[t._v("这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。")]),t._v(" "),a("p",[t._v("关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情变糟糕时，你会得到一个有好的提示，就好像一个被精心设计过的约束系统。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("如果你想移动一个类，你可能会想要做以下事情：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("与捕获变量的类型相似，你仅仅是需要声明一个变量用来捕获到的类型：")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("在这个例子里，"),a("code",[t._v("bar")]),t._v(" 有字面量类型 "),a("code",[t._v("Hello World")]),t._v("，我们在"),a("router-link",{attrs:{to:"./literals.html"}},[t._v("字面量类型")]),t._v("章节已经深入讨论。")],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),a("p",[t._v("这允许你很容易地拥有像字符串枚举+常量这样的类型，正如上例所示。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"流动的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流动的类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 流动的类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"复制类型和值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制类型和值","aria-hidden":"true"}},[this._v("#")]),this._v(" 复制类型和值")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 不能找到名称 'Bar'")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这会得到一个错误，因为 "),a("code",[t._v("const")]),t._v(" 仅仅是复制了 "),a("code",[t._v("Foo")]),t._v(" 到一个变量声明空间，因此你无法把 "),a("code",[t._v("Bar")]),t._v(" 当作一个类型声明使用。正确的方式是使用 "),a("code",[t._v("import")]),t._v(" 关键字，请注意，如果你在使用 "),a("code",[t._v("namespace")]),t._v(" 或者 "),a("code",[t._v("modules")]),t._v("，使用 "),a("code",[t._v("import")]),t._v(" 是你唯一能用的方式：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" importing "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" importing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个 "),s("code",[this._v("import")]),this._v(" 技巧，仅适合于类型和变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"捕获变量的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获变量的类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 捕获变量的类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以通过 "),s("code",[this._v("typeof")]),this._v(" 操作符在类型注解中使用变量。这允许你告诉编译器，一个变量的类型与其他类型相同，如下所示：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 'bar' 类型与 'foo' 类型相同（在这里是： 'number'）")]),t._v("\n\nbar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("456")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\nbar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'789'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 'string' 不能分配给 'number' 类型")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"捕获类成员的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获类成员的类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 捕获类成员的类型")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 我们想要捕获的类型")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 与之前做法相同")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" _foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"捕获字符串类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获字符串类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 捕获字符串类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("许多 JavaScript 库和框架都使用原始的 JavaScript 字符串，你可以使用 "),s("code",[this._v("const")]),this._v(" 定义一个变量捕获它的类型：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 捕获字符串的类型与值")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用一个捕获的类型")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// bar 仅能被赋值 'Hello World'")]),t._v("\nbar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\nbar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'anything else'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"捕获键的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获键的名称","aria-hidden":"true"}},[this._v("#")]),this._v(" 捕获键的名称")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("keyof")]),this._v(" 操作符能让你捕获一个类型的键。例如，你可以使用它来捕获变量的键名称，在通过使用 "),s("code",[this._v("typeof")]),this._v(" 来获取类型之后：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" colors "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  red"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Colors "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyof "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" colors"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// color 的类型是 'red' | 'blue'")]),t._v("\ncolor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\ncolor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\ncolor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'anythingElse'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);