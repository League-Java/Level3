(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{314:function(t,e,s){"use strict";s.r(e);var a=s(14),o=Object(a.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"junit-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#junit-tests"}},[this._v("#")]),this._v(" JUnit Tests")]),this._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level3-Module0/tree/master/src/_01_Simple_Array_Algorithms/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:this.$withBase("/assets/github-mark.png"),alt:"View Source"}}),this._v(" View Source")])]),this._v(" "),t("p",[this._v('When you have written a new program, you need to test if it is working properly. Also, if you need to make changes to an existing program, you need to make sure you haven\'t broken anything that worked before.\nWhen you develop new code, you sometimes add print statements to check what is happening, but after you have done that, you need to go back and remove the print statements and you might break something in the process. So how can you test a program without changing its code?\nJUnit provides us with a framework to test code "from the outside".\nFor example, The code below runs the static method add() on the Algorithms class. This test is not part of the Algorithms class, but an external testing class, and checks that when given the numbers 3 and 1, the add method returns the number 4.\n@Test\npublic void testAdd() {\nassertEquals(4, Algorithms.add(3,1));\n}\nIf a programmer later changes other parts of the Algorithms class for any reason, they can re-run this test to see if the add() method still works correctly.\nYou can use a variety of assertions that allow the program to test for different conditions. In the above example, the code is testing for the equals condition.  Ask your teacher, or search the Internet for a complete overview of the JUnit class and its capabilities.')])])}),[],!1,null,null,null);e.default=o.exports}}]);