(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{877:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return o}));n(16),n(4),n(3),n(1),n(12),n(11),n(22);var a=n(57),r=n(63);n(36);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/architecture-overview.md"}});var s={_frontmatter:p},i=r.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"architecture-overview"},"Architecture Overview"),Object(a.b)("hr",null),Object(a.b)("p",null,"In this overview we will talk mostly about the Core of Hegel. It should help you to get a high-level understanding of the Hegel architecture."),Object(a.b)("p",null,"Core is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core"}),"@hegel/core")," and contains the main logic of type checking and type inference.\nThe main logic of Core: take ",Object(a.b)("a",c({parentName:"p"},{href:""}),"Abstract Syntax Tree")," and convert it into symbols table (inside Hegel it's called ",Object(a.b)("inlineCode",{parentName:"p"},"moduleScope"),") which contains information about variables, scopes, and types."),Object(a.b)("p",null,"So, AST conversion starts from tree traverse which is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/utils/traverse.js"}),Object(a.b)("inlineCode",{parentName:"a"},"src/utils/traverse.js")),".\nIn traverse we have 3 steps:"),Object(a.b)("h4",{id:"precompute"},Object(a.b)("strong",{parentName:"h4"},"Precompute")),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"#precomute"}),"The Precompute step")," is a step in ",Object(a.b)("inlineCode",{parentName:"p"},"traverseTree")," function inside ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/utils/traverse.js"}),Object(a.b)("inlineCode",{parentName:"a"},"src/utils/traverse.js"))," which process AST node before the node children was processed."),Object(a.b)("p",null,"It's needed to add initial information about ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/variable-info.js"}),"variables")," and ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/variable-scope.js"}),"scopes"),". Also, we use ",Object(a.b)("a",c({parentName:"p"},{href:"#precomute"}),"Precompute")," for type refinement (which main logic is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/refinement.js"}),"src/inference/refinement.js"),")."),Object(a.b)("h4",{id:"middlecompute"},Object(a.b)("strong",{parentName:"h4"},"Middlecompute")),Object(a.b)("p",null,"The most simple type of computation. The step processes node children one-by-one without deep processing. It's needed because JavaScript contains hoisting."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"const a = getA();\n\nfunction getA() {\n  return 1;\n}\n")),Object(a.b)("p",null,"This step hoist Function Declarations and Interface Declarations (only inside ",Object(a.b)("inlineCode",{parentName:"p"},".d.ts")," files) by adding raw nodes into symbols table (we will do lazy processing of the nodes if these nodes are used before own declaration or will process it (in ",Object(a.b)("a",c({parentName:"p"},{href:"#precomute"}),"Precompute step")," ) when we find their declarations)."),Object(a.b)("p",null,"Also, it's used for fast adding class and object methods, because in JavaScript we can call a method in another method which currently are not be processed."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"class Main {\n  constructor() {\n    this.a = this.getA();\n  }\n\n  getA() {\n    return 1;\n  }\n}\n")),Object(a.b)("h4",{id:"postcompute"},Object(a.b)("strong",{parentName:"h4"},"Postcompute")),Object(a.b)("p",null,"In oposite to ",Object(a.b)("a",c({parentName:"p"},{href:"#precompute"}),"Precompute step"),", ",Object(a.b)("a",c({parentName:"p"},{href:"#postcumpute"}),"Postcompute step")," processes AST node after all node's children were processed.\nWe use the step for ",Object(a.b)("a",c({parentName:"p"},{href:"#type-inference"}),"type inference")," (which main logic is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/"}),Object(a.b)("inlineCode",{parentName:"a"},"src/inference")," directory"),") and collecting of ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/meta/call-meta.js"}),"Calls Infromation"),". The ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/meta/call-meta.js"}),"Calls Infromation")," is used in ",Object(a.b)("a",c({parentName:"p"},{href:"#checking-step"}),"Checking Step")),Object(a.b)("h3",{id:"type-inference"},"Type Inference"),Object(a.b)("p",null,"So, type inference logics for each literal are placed in (which main logic is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/"}),Object(a.b)("inlineCode",{parentName:"a"},"src/inference")," directory"),"). For an expression in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/call.js"}),Object(a.b)("inlineCode",{parentName:"a"},"src/type-graph/call.js")," file")," which adds ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/meta/call-meta.js"}),"Calls Infromation")," )."),Object(a.b)("p",null,"For literals, we have a really simple logic. For example, code for type inference of a simple type:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"switch (currentNode.type) {\n  case NODE.NUMERIC_LITERAL:\n    result = Type.term(currentNode.value, {\n      isSubtypeOf: Type.Number\n    });\n    break;\n  case NODE.BIGINT_LITERAL:\n    result = Type.term(`${currentNode.value}n`, {\n      isSubtypeOf: Type.BigInt\n    });\n    break;\n  case NODE.TEMPLATE_LITERAL:\n    result = Type.String;\n    break;\n  case NODE.STRING_LITERAL:\n    result = Type.term(`'${currentNode.value}'`, {\n      isSubtypeOf: Type.String\n    });\n    break;\n  case NODE.BOOLEAN_LITERAL:\n    result = Type.term(currentNode.value);\n    break;\n  case NODE.NULL_LITERAL:\n    result = Type.Null;\n    break;\n  case NODE.REG_EXP_LITERAL:\n    result = Type.find(\"RegExp\");\n    break;\n")),Object(a.b)("p",null,"The tricky moments start for ",Object(a.b)("a",c({parentName:"p"},{href:"#function-inference"}),"Function")," and ",Object(a.b)("a",c({parentName:"p"},{href:"#class-and-object-inference"}),"Objects/Classes"),"."),Object(a.b)("h4",{id:"function-inference"},"Function Inference"),Object(a.b)("p",null,"First of all, we try to collect any defined type for arguments or return type at ",Object(a.b)("a",c({parentName:"p"},{href:"#precompute"}),"Precompute step"),", if argument or function doesn't have a type annotation then we create ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/type-var.js"}),Object(a.b)("inlineCode",{parentName:"a"},"TypeVar"))," (this type represents generic variables), and add it to generic arguments list. The code is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/function-type.js"}),"/src/inference/function-type.js")," in ",Object(a.b)("inlineCode",{parentName:"p"},"inferenceFunctionLiteralType"),"."),Object(a.b)("p",null,"After processing every child node, we will try to find the type of an argument or return type by ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/meta/call-meta.js"}),"Call Information"),", which is taken from all child ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/variable-scope.js"}),"VariableScopes")," of the function scope."),Object(a.b)("p",null,"Arguments Resolving Colde is placed in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/function-type.js"}),"/src/inference/function-type.js")," in ",Object(a.b)("inlineCode",{parentName:"p"},"resolveOuterTypeVarsFromCall"),"."),Object(a.b)("h4",{id:"class-and-object-inference"},"Class and Object inference"),Object(a.b)("p",null,"From the other side, inference of class or object type, because we have ",Object(a.b)("inlineCode",{parentName:"p"},"this")," keyword in JavaScript. It means that when we try to use any property or method from other methods in object or class instance we should have access to all the object or class methods and properties wherever it's defined."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"const obj = {\n  c: 4,\n  a() {\n    return this.b();\n  },\n  b() {\n    return this.c;\n  },\n};\n")),Object(a.b)("p",null,"So, we need to add methods and properties lazily. First of all, we add all methods and properties raw nodes in object/class type (We make it in ",Object(a.b)("a",c({parentName:"p"},{href:"#middlecompute"}),"Middlecompute step"),"), and, if we try to access a property or method then we traverse saved node and infer the type of the method or property (We make it by ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/scope.js"}),"Scope")," static method ",Object(a.b)("inlineCode",{parentName:"p"},"addAndTraverseNodeWithType"),")."),Object(a.b)("h3",{id:"checking-step"},"Checking Step"),Object(a.b)("p",null,"This step is described in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/checking/index.js"}),"/src/checking/index.js")," and only take all ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/meta/call-meta.js"}),"Calls Information")," from every defined ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/variable-scope.js"}),"VariableScope")," (this calls is stored in ",Object(a.b)("inlineCode",{parentName:"p"},"calls")," property of every instance of ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/variable-scope.js"}),"VariableScope class"),") and check that every defined argument ",Object(a.b)("a",c({parentName:"p"},{href:"#principal-type"}),"is a principal type for")," given argument at the position.\n",Object(a.b)("inlineCode",{parentName:"p"},"checkCalls")," function in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/checking/index.js"}),"/src/checking/index.js"),". We call the function in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/type-graph.js"}),"/src/type-graph/type-graph.js ",Object(a.b)("inlineCode",{parentName:"a"},"createModuleScope")," function")," )"),Object(a.b)("h3",{id:"types"},"Types"),Object(a.b)("p",null,"All types in Hegel Core are defined in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/"}),"/src/type-graph/types/")," and every type is a child for the base ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/type.js"}),"Type class"),"."),Object(a.b)("h4",{id:"principal-type"},"Principal Type"),Object(a.b)("p",null,"Principal type is a type which equals to current or will be a supertype of current. From early version of ",Object(a.b)("inlineCode",{parentName:"p"},"isPrincipalTypeFor")," function:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"isPrincipalTypeFor(type: Type) {\n  return this.equalsTo(type) || this.isSuperTypeFor(type);\n}\n")),Object(a.b)("p",null,"Each type defined own ",Object(a.b)("inlineCode",{parentName:"p"},"equalsTo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"isSuperTypeFor"),". As example, ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/union-type.js"}),"UnionType class")," defined ",Object(a.b)("inlineCode",{parentName:"p"},"isSuperTypeFor")," as (simplified version without performance details):"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"isSuperTypeFor(anotherType: Type): boolean {\n  if (anotherType instanceof UnionType) {\n    for (const variantType of anotherType.variants) {\n      if (!this.variants.some(type => type.isPrincipalTypeFor(variantType))) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return this.variants.some(type =>\n    type.isPrincipalTypeFor(anotherType)\n  );\n}\n")),Object(a.b)("h4",{id:"bottomtype"},"\\$BottomType"),Object(a.b)("p",null,"One of the interesting architecture decisions is ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/bottom-type.js"}),Object(a.b)("inlineCode",{parentName:"a"},"$BottomType")),". This type behaves like a ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," in types world. It means that when we want to apply ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/union-type.js"}),"GenericType")," (which behaves like a function in types world) any ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/type-var.js"}),"TypeVar")," we can reduce the cost of ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/type.js"}),Object(a.b)("inlineCode",{parentName:"a"},"changeAll")," function")," and instead of deep changing of generic arguments to another type variables, we can return ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/bottom-type.js"}),Object(a.b)("inlineCode",{parentName:"a"},"$BottomType"))," which say that we want to apply new type variables instead old ones, and if we will replace a new type variable to a specific type instead of one more call of ",Object(a.b)("inlineCode",{parentName:"p"},"changeAll"),", we only change new type variable to a specific type and that's all."),Object(a.b)("h3",{id:"refinement"},"Refinement"),Object(a.b)("p",null,"Another tricky and interesting moment in Hegel is type refinement. It's tricky because, for refinement variable (for example), we need to create a new ",Object(a.b)("inlineCode",{parentName:"p"},"VariableScope")," and add a refined type of the variable in the scope. For example the next code:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"const a: number | null = 14;\nif (a !== null) {\n  const b = a + 12;\n}\n")),Object(a.b)("p",null,"After the decision that inside ",Object(a.b)("inlineCode",{parentName:"p"},"if")," scope the variable ",Object(a.b)("inlineCode",{parentName:"p"},"a")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"number")," type (we decide it in the ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/equals-refinement.js"}),"/src/inference/equals-refinement.js")," ), we will add into ",Object(a.b)("inlineCode",{parentName:"p"},"if")," scope variable ",Object(a.b)("inlineCode",{parentName:"p"},"a")," with new type ",Object(a.b)("inlineCode",{parentName:"p"},"number")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"number | null")," (check ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/inference/refinement.js"}),"/src/inference/refinement.js ",Object(a.b)("inlineCode",{parentName:"a"},"refinement")," function")," )."),Object(a.b)("p",null,"But, sometimes we should save a previous type to stay sound. An example is objects."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-typescript"}),'function assert(obj: { a: number | string }): { a: number } | undefined {\n  if (typeof obj.a === "number") {\n    // With defined algorithm "obj" should be { a: number }, but it\'s not\n    return obj;\n  }\n}\n\nconst original: { a: number | string } = { a: 2 };\nconst refinement = assert(original); // { a: number }\noriginal.a = "str";\n\nif (refinement !== undefined) {\n  // TypeError\n  void refinement.a.toFixed(0);\n}\n')),Object(a.b)("p",null,"So, to solve the problem we use ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/tree/master/packages/core/src/type-graph/types/refinemented-type.js"}),Object(a.b)("inlineCode",{parentName:"a"},"$RefinementedType")),", which saves an original type and refined type."),Object(a.b)("h3",{id:"ps"},"P.S."),Object(a.b)("p",null,"If you need more details in the overview then ask the questions in ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/JSMonk/hegel/issues"}),"Hegel Issues"),", and we will add more information about the weird block or will answer the question in the issue."))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/architecture-overview.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-architecture-overview-md-9e8602b2881f26da735b.js.map