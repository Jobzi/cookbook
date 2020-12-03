(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{387:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"batch-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-processing"}},[s._v("#")]),s._v(" Batch processing")]),s._v(" "),a("h2",{attrs:{id:"use-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-case"}},[s._v("#")]),s._v(" Use-case")]),s._v(" "),a("p",[s._v("We would like to update many resources in a single request (a batch).")]),s._v(" "),a("h2",{attrs:{id:"recipe-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recipe-1"}},[s._v("#")]),s._v(" Recipe 1")]),s._v(" "),a("p",[s._v('Create a nested resource "batches", which accept a collection. A batch save the request, give immediately a response and run a job to process the request asynchronously.')]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("POST https://api.example.com/v1/orders/batches HTTP/1.1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("382")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent_on"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("383")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent_on"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("384")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent_on"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(" Created\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" Location: https://api.example.com/v1/orders/batches/42\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("GET https://api.example.com/v1/orders/batches/42 HTTP/1.1\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pending"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01 14:43:41"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01 14:43:41"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("GET https://api.example.com/v1/orders/batches/42 HTTP/1.1\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pending"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("383")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/orders/383"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01 14:43:41"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-04-01 14:43:41"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Warning: unit processing stay a better choice.")]),s._v(" "),a("h1",{attrs:{id:"benefits-and-drawbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-and-drawbacks"}},[s._v("#")]),s._v(" Benefits and drawbacks")]),s._v(" "),a("p",[s._v("Benefits:")]),s._v(" "),a("ul",[a("li",[s._v("highly reduce number of requests")])]),s._v(" "),a("p",[s._v("Drawbacks:")]),s._v(" "),a("ul",[a("li",[s._v("design is not affordable")]),s._v(" "),a("li",[s._v("errors are hard to deal with, we can't use HTTP codes anymore")]),s._v(" "),a("li",[s._v("clients must implement polling to get the result, two ways to avoid that:\n"),a("ul",[a("li",[s._v('"fire & forget": error cases are discarded')]),s._v(" "),a("li",[s._v("client must implement a callback URL to be notified about processing completion")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);