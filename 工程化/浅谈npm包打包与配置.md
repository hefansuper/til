最近在弄公司的组件库，来记录下学习的进程和踩坑点  

### 1：JS中有哪些的模块化的规范，他们的特点是什么？

> [https://zhuanlan.zhihu.com/p/108217164](https://zhuanlan.zhihu.com/p/108217164)

|  | 使用场景 | 特点 |
| --- | --- | --- |
| CommonJS | node | 同步加载，仅仅适用于服务端 |
| AMD |  | 异步加载, 推崇依赖前置, 提前执行 |
| CMD |  | 通用模块定义, 推崇依赖就近, 延迟执行 |
| UMD | UMD = CommonJS + AMD | UMD = CommonJS + AMD |
| ES Module | JS的标准规范，取代 UMD，是大势所趋 |  |
<br/>
所以在开发npm包的时候，**打包的时候打成 UMD 和 ES Module 就行了。**
那知道了需要打包的生成的js模块，npm包的package.json需要怎么配置？
<br/>
<br/>
### 2：package.json的配置

#### 1：main、**module**、browser

> [https://github.com/SunshowerC/blog/issues/8](https://github.com/SunshowerC/blog/issues/8)

main、module、browser都能够设置包的入口文件，因为npm包能够在浏览器与node环境下使用，就可能会出现多种情况（仅能在browser中使用，仅能在node中使用，browser与node都能使用），所有 针对不同的场景，main、module、browser这3个参数需要配置不同。

> main： 定义了npm包的入口文件，browser环境和node环境都可以使用。
> module： 定义了npm包的ESM规范的入口，browser环境和node环境都可以使用。
> browser：定义了npm包在browser环境下的入口。

总结，对应设置的参数如下：
> 如果 npm 包导出的是 ESM 规范的包，使用 module
> 如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser。
> 如果 npm 包只在 server 端使用，使用 main
> 如果 npm 包在 web 端和 server 端都允许使用，使用 browser 和 main

在初始阶段，我们可以参照业界比较的好的库来学习下这个配置：

```javascript
// redux的package.json文件。
...
"main": "lib/redux.js",   // commonJS
"unpkg": "dist/redux.js",  // UMD
"module": "es/redux.js",  // esm
"types": "types/index.d.ts", // ts的类型
...
```

所以我们最终的配置如下：

```javascript
"browser": "es/index.js", // es的入口
"main": "lib/index.js", // commonjs
"module": "es/index.js", // es的入口
"types": "lib/index.d.ts", // commonjs下面的类型文件。
```

后续的npm包的配置完全是可以参照这个的。
<br/>
#### 2：files

制定npm包能够访问的目录文件，一般是打包后的不同版本的最终文件目录。

```javascript
"files": [
    "lib",
    "es"
 ],
```
<br/>
#### 3：peerDependencies

> 对等依赖，
> 可以来解决插件与宿主项目依赖版本不一样的问题.

详细的解释：[https://segmentfault.com/a/1190000022435060](https://segmentfault.com/a/1190000022435060)

**peerDependencies**的目的**是**提示宿主环境去安装满足插件**peerDependencies**所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都**是**引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。

项目a用了项目b，项目b有**peerDependencies**e，那么会主动安装依赖e。

比如写了一个react的插件，依赖的版本是react17，但是使用的react项目是react16，那么就会出现问题，现在在插件里面写上这样，就能解决问题：

```xml
{
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-dom": ">=16.12.0"
  }
}
```

项目中的书写，参照的是antd

```javascript
"peerDependencies": {
    "react": ">=16.9.0",
    "react-dom": ">=16.9.0"
  }
```

<br/>
<br/>
### 3：使用dumi与father-build构建组件库

> dumi： 蚂蚁的文档系统，配置比storybook简单。
> father-build：umi的打包工具，基本零配置，二次包装的gulp。

```javascript
// .fatherrc.ts   father-build的配置文件

export default {
  // 打包为commonjs，生成在全局的dist文件夹下
  cjs: { type: 'babel', lazy: true },
  // 打包为esm，生成在全局的es文件夹下
  esm: {
    type: 'babel',
  },
  lessInBabelMode: true, // babel 模式下做 less 编译
  extraBabelPlugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
  extractCSS: true, //配置是否提取 css 为单独文件。
};

```

<br/>
<br/>
### 4: 遇到的问题

#### 1：可能会出现不识别less文件的问题，但是全局的types.d.ts 又配置了less，这个是father-build的自身问题

> [https://github.com/umijs/father/issues/227#issuecomment-720928000](https://github.com/umijs/father/issues/227#issuecomment-720928000)

#### 2：打包后没有生成class类名

在father中导入less文件只能基本导入，不要使用css modules，因为css modules本身无法被覆盖，不适用于组件库的开发。

```javascript
import styles './index.less';  // 错误
import  './index.less'; // 正确
```

<br/>
<br/>
### 5： 总结

```javascript
1：打包时生成esm与commonjs即可，极端情况下直接esm都行。
2：main：cjs文件入口
     module：esm文件的入口
     browser：esm文件的入口
     type：cjs下的type文件入口。
3：files  使用npm包的时候能访问的文件夹。
4：peerDependencies 对等依赖，解决子应用与父应用有共同的依赖，当时版本不同的问题。
5： dumi与father-build一把梭，生成组件库非常的方便。
```

<br/>
参考的资料：

```javascript
1: js的模块区别，与father打包
  https://segmentfault.com/a/1190000021959316
2：father打包的配置
  https://juejin.cn/post/6904795653243994125#heading-20
3：到底需要打成什么格式的包，以及在package.json需要如何的配置。
  https://github.com/SunshowerC/blog/issues/8
```
