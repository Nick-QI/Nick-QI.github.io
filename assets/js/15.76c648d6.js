(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{375:function(t,s,e){"use strict";e.r(s);var n=e(26),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"tsconfig-json-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json-详解"}},[t._v("#")]),t._v(" tsconfig.json 详解")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/compiler-options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方指南"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("初始化一个tsconfig.json配置文件tsc --init")]),t._v(" "),e("p",[t._v("默认的配置如下，只配置了四个关键参数，target/module/strict、esModuleInterop，其他的都注释掉了。")]),t._v(" "),e("p",[t._v("target默认是es5，如果你的代码中有一些es6的语法，如：Object.assign，编辑器可能会报错，所有可以修改为es6(es2015).")]),t._v(" "),e("p",[t._v("module默认commonjs。如果代码报错，可以改成es2015或者其他模式。")]),t._v(" "),e("p",[t._v("strict默认true，严格模式，这个应该影响最大，很多从js迁移过来的代码都不符合ts规范，所以最好关闭严格模式，等以后代码规范了在开启，在编辑的时候就发现很多错误，从而在某些方面提高开发效率。")]),t._v(" "),e("p",[t._v("esModuleInterop :不懂。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Basic Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "lib": [],                             /* Specify library files to be included in the compilation. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "allowJs": true,                       /* Allow javascript files to be compiled. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "checkJs": true,                       /* Report errors in .js files. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"jsx\": \"preserve\",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"declaration\": true,                   /* Generates corresponding '.d.ts' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"declarationMap\": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"sourceMap\": true,                     /* Generates corresponding '.map' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "outFile": "./",                       /* Concatenate and emit output to single file. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "outDir": "./",                        /* Redirect output structure to the directory. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "composite": true,                     /* Enable project compilation */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "removeComments": true,                /* Do not emit comments to output. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noEmit": true,                        /* Do not emit outputs. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"importHelpers\": true,                 /* Import emit helpers from 'tslib'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"downlevelIteration\": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"isolatedModules\": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Strict Type-Checking Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strict"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Enable all strict type-checking options. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"noImplicitAny\": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictNullChecks": true,              /* Enable strict null checks. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictFunctionTypes": true,           /* Enable strict checking of function types. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"noImplicitThis\": true,                /* Raise error on 'this' expressions with an implied 'any' type. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Additional Checks */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noUnusedLocals": true,                /* Report errors on unused locals. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noUnusedParameters": true,            /* Report errors on unused parameters. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Module Resolution Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"moduleResolution\": \"node\",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"paths\": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "typeRoots": [],                       /* List of folders to include type definitions from. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "types": [],                           /* Type declaration files to be included in compilation. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esModuleInterop"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Source Map Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"inlineSources\": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Experimental Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br")])]),e("h3",{attrs:{id:"compileroptions配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compileroptions配置说明"}},[t._v("#")]),t._v(" compilerOptions配置说明")]),t._v(" "),e("h4",{attrs:{id:"基本选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本选项"}},[t._v("#")]),t._v(" 基本选项")]),t._v(" "),e("ul",[e("li",[t._v("“target”:“es5”，/指定ECMAScript目标版本:“ES3”(默认)、“es5”、“ES2015”、“ES2016”、“ES2017”、“ES2018”或“ESNEXT”。 /")]),t._v(" "),e("li",[t._v("“module”:“commonjs”，/指定模块代码生成:“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“ESNext”。 /")]),t._v(" "),e("li",[t._v("“lib”:[]， /指定要包含在编译中的库文件。 /")]),t._v(" "),e("li",[t._v("“allowJs”:true， /允许编译javascript文件。 /")]),t._v(" "),e("li",[t._v("“checkJs”: true， /报告.js文件中的错误。 /")]),t._v(" "),e("li",[t._v("“jsx”:“preserve”，/指定jsx代码生成:“preserve”、“response -native”或“react”。 /")]),t._v(" "),e("li",[t._v("“declaration”: true， /生成对应的’.d。ts文件。 /")]),t._v(" "),e("li",[t._v('"declaration ationmap ": true， /为每个对应的’.d \'生成一个sourcemap。ts文件。 /')]),t._v(" "),e("li",[t._v("“sourceMap”: true， /生成相应的’。地图的文件。 /")]),t._v(" "),e("li",[t._v(':“outFile。/"， /连接并将输出发送到单个文件。 /')]),t._v(" "),e("li",[t._v('“outDir”:”。/"， /将输出结构重定向到目录。 /')]),t._v(" "),e("li",[t._v('“rootDir”:”。/"， /指定输入文件的根目录。用于用——outDir控制输出目录结构。 /')]),t._v(" "),e("li",[t._v("“composite”: true， /启用项目编译/")]),t._v(" "),e("li",[t._v("“removeComments”:true， /不向输出发出注释。 /")]),t._v(" "),e("li",[t._v("“noEmit”:true， /不发出输出。 /")]),t._v(" "),e("li",[t._v("“importthelpers”:true， /* Import从“tslib”中释放助手。* /")]),t._v(" "),e("li",[t._v("“downlevelIteration”:true， /当目标为“ES5”或“ES3”时，为“for-of”、“spread”和“destructuring”中的迭代提供完全支持。 /")]),t._v(" "),e("li",[t._v("“isolatedModules”:true， /将每个文件转换为一个单独的模块(类似于“ts.transpileModule”)。 /")])]),t._v(" "),e("h5",{attrs:{id:"严格的类型检查选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#严格的类型检查选项"}},[t._v("#")]),t._v(" 严格的类型检查选项")]),t._v(" "),e("ul",[e("li",[t._v("“strict”:true， /启用所有严格的类型检查选项。 /")]),t._v(" "),e("li",[t._v("“noImplicitAny”:true， /对隐含的“any”类型的表达式和声明提出错误。 /")]),t._v(" "),e("li",[t._v("“strictnullcheck”:true， /启用严格的空检查。 /")]),t._v(" "),e("li",[t._v("“strictFunctionTypes”: true， /启用对函数类型的严格检查。 /")]),t._v(" "),e("li",[t._v('" strictpropertyinitialized ": true， /在类中启用严格的属性初始化检查。 /')]),t._v(" "),e("li",[t._v("“noImplicitThis”:true， /对包含“any”类型的“this”表达式提出错误。 /")]),t._v(" "),e("li",[t._v("“always sstrict”:true， /在strict模式下解析，并为每个源文件发出“use strict”。 /")])]),t._v(" "),e("h4",{attrs:{id:"附加检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附加检查"}},[t._v("#")]),t._v(" 附加检查")]),t._v(" "),e("ul",[e("li",[t._v("“noUnusedLocals”:true， /报告未使用局部变量的错误。 /")]),t._v(" "),e("li",[t._v("“noUnusedParameters”:true， /报告未使用参数的错误。 /")]),t._v(" "),e("li",[t._v("“noImplicitReturns”:true， /当函数中并非所有代码路径都返回值时报告错误。 /")]),t._v(" "),e("li",[t._v("“noFallthroughCasesInSwitch”:true， /在switch语句中报告错误。 /\n模块解析选项")]),t._v(" "),e("li",[t._v("“moduleResolution”:“node”，/指定模块解析策略:“node”(node .js)或“classic”(TypeScript pre-1.6)。 /")]),t._v(" "),e("li",[t._v('“baseUrl”:”。/"， /基本目录来解析非绝对模块名。 /')]),t._v(" "),e("li",[t._v("“path”:{}，/一系列条目，这些条目将导入重新映射到相对于“baseUrl”的查找位置。 /")]),t._v(" "),e("li",[t._v("“rootDirs”:[]，/根文件夹列表，其组合内容表示运行时项目的结构。 /")]),t._v(" "),e("li",[t._v("“typeRoots”:[]， /包含类型定义的文件夹列表。 /")]),t._v(" "),e("li",[t._v("“types”:[]， /编译中包含的类型声明文件。 /")]),t._v(" "),e("li",[t._v("“allowSyntheticDefaultImports”:true， /允许从没有默认导出的模块进行默认导入。这并不影响代码发出，只影响类型查询。 /")]),t._v(" "),e("li",[t._v("“esModuleInterop”:true /通过为所有导入创建名称空间对象，支持CommonJS和ES模块之间的互操作性。意味着“allowSyntheticDefaultImports”。 /")]),t._v(" "),e("li",[t._v("“preserveSymlinks”:true， /不解析符号链接的实际路径。 /")])]),t._v(" "),e("h4",{attrs:{id:"源映射选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源映射选项"}},[t._v("#")]),t._v(" 源映射选项")]),t._v(" "),e("ul",[e("li",[t._v("“sourceRoot”: “”， /指定调试器应该定位TypeScript文件而不是源位置的位置。 /")]),t._v(" "),e("li",[t._v("“mapRoot”: “”， /指定调试器应该定位映射文件的位置，而不是生成的位置。 /")]),t._v(" "),e("li",[t._v("“inlineSourceMap”: true， /发出一个带有源映射的文件，而不是一个单独的文件。 /")]),t._v(" "),e("li",[t._v("“inlineSources”:true， /*在单个文件中，将源文件与源文件一起发出;需要设置’- inlineSourceMap’或’- sourceMap’ . */")])]),t._v(" "),e("h4",{attrs:{id:"实验选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验选项"}},[t._v("#")]),t._v(" 实验选项")]),t._v(" "),e("ul",[e("li",[t._v('"experimental entaldecorator ": true， /支持对ES7 decorator的实验支持。 /')]),t._v(" "),e("li",[t._v("“emitDecoratorMetadata”:true， /启用了对为decorator发出类型元数据的实验性支持。 /")])])])}),[],!1,null,null,null);s.default=a.exports}}]);