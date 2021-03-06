---
title: "javascript 原型模式"
sidebar_label: 原型模式
---


原型模式是创建型模式的一种，其特点在于通过「复制」一个已经存在的实例来返回新的实例,而不是新建实例。被复制的实例就是我们所称的「原型」，这个原型是可定制的。原型模式多用于创建复杂的或者耗时的实例，因为这种情况下，复制一个已经存在的实例使程序运行更高效；或者创建值相等，只是命名不一样的同类数据。

```javascript
Object.create(prototype)
```

对比js中的原型prototype: js里的prototype是es6 class的一种底层实现，是面向对象的基础，而不是某个模式。多年后，es6全面普及后，js 里的 prototype 可以被改变，但是Object.create()会保留，因为它是原型设计模式的基础。

原型模式在前端用的不多。
