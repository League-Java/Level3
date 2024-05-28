(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(t,a,n){t.exports=n.p+"assets/img/1_sun.6245e205.png"},295:function(t,a,n){t.exports=n.p+"assets/img/2_gradient.c9dfa714.png"},296:function(t,a,n){t.exports=n.p+"assets/img/3_missing_sun_section.8572257a.png"},297:function(t,a,n){t.exports=n.p+"assets/img/4b_resizing_section.0d50e0a6.gif"},298:function(t,a,n){t.exports=n.p+"assets/img/5_multiple_sections.4c8f7901.gif"},299:function(t,a,n){t.exports=n.p+"assets/img/6_retro_sun_extras.337dd245.gif"},326:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"retro-sun-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retro-sun-processing"}},[t._v("#")]),t._v(" Retro Sun (Processing)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/League-Java/Level3-Module1/tree/master/src/_05_Retro_Sun/",target:"_blank"}},[a("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:t.$withBase("/assets/github-mark.png"),alt:"View Source"}}),t._v(" View Source")])]),t._v(" "),a("h3",{attrs:{id:"part-1-drawing-the-sun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-drawing-the-sun"}},[t._v("#")]),t._v(" Part 1: Drawing the Sun")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"330px"},attrs:{alt:"",src:n(294)}}),t._v("\nOpen the starter code in Processing.\nDraw and fill a solid color ellipse to be the sun.\n"),a("h3",{attrs:{id:"part-2-drawing-a-color-gradient-on-the-sun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-drawing-a-color-gradient-on-the-sun"}},[t._v("#")]),t._v(" Part 2: Drawing a color gradient on the sun")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"180px"},attrs:{alt:"",src:n(295)}}),t._v("\nChange the sun-colored pixels in your sketch make the sun have gradually different colors from the top to bottom.\n"),a("p",[t._v("Use the interpolateColor() method to find which color to change the pixel.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n// Input variable 'step' is a value from 0.0 to 1.0, where\n// 0.0 is the top of the sun and 1.0 is the bottom\ninterpolateColor(color[] arr, float step)\n")])])]),a("h3",{attrs:{id:"part-3-drawing-the-missing-sections-at-the-bottom-of-the-sun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-3-drawing-the-missing-sections-at-the-bottom-of-the-sun"}},[t._v("#")]),t._v(" Part 3: Drawing the missing sections at the bottom of the sun")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"180px"},attrs:{alt:"",src:n(296)}}),t._v("\nThe missing parts of the sun are created by drawing rectangles over the sun with the same color as the background.\n"),a("h3",{attrs:{id:"part-4-moving-the-missing-sun-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-4-moving-the-missing-sun-sections"}},[t._v("#")]),t._v(" Part 4: Moving the missing sun sections")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"330px"},attrs:{alt:"",src:n(297)}}),t._v("\nTo move a section upwards each rectangle's y value needs to decrease.\nTo make the section get smaller, its height value needs to also decrease.\n"),a("h3",{attrs:{id:"part-5-managing-the-missing-sun-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-5-managing-the-missing-sun-sections"}},[t._v("#")]),t._v(" Part 5: Managing the missing sun sections")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"225px"},attrs:{alt:"",src:n(298)}}),t._v("\nUsing a List to manage moving multiple missing sun sections\n"),a("h3",{attrs:{id:"part-6-adding-reflections-stars-and-other-extras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-6-adding-reflections-stars-and-other-extras"}},[t._v("#")]),t._v(" Part 6: Adding reflections, stars, and other extras")]),t._v(" "),a("img",{staticStyle:{width:"400px",height:"225px"},attrs:{alt:"",src:n(299)}}),t._v("\nIf you want to make your retro sun look more unique, try adding reflections and stars. You may use the example classes below.\n```\n"),a("p",[t._v("class Star {\nint x;\nint y;\ncolor starColor;\nfloat startAlpha;\nfloat alpha;\nfloat diameter;")]),t._v(" "),a("p",[t._v("Star(int x, int y, color col) {\nthis.x = x;\nthis.y = y;\nstarColor = col;\nthis.diameter = random(0.1, 3);\nthis.startAlpha = random(1, 200);\nthis.alpha = startAlpha;\n}")]),t._v(" "),a("p",[t._v("void setAlpha(int alpha){\nthis.alpha = constrain(alpha, startAlpha, 255);\n}")]),t._v(" "),a("p",[t._v("void draw() {\nnoStroke();\nfill(starColor, alpha);\nfloat blink = random(0, 0.8);\nellipse(x, y, diameter + blink, diameter + blink);\n}")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("p",[t._v("class Reflection {\n/*\n// HSB colors\ncolor[] barColors = {\ncolor(285, 96.6, 23.1),\ncolor(312, 100, 42.7),\ncolor(340, 66.9, 60.4),\ncolor(11, 60.8, 62),\ncolor(340, 66.9, 60.4),\ncolor(312, 100, 42.7),\ncolor(285, 96.6, 23.1)\n};\n*/\n// RGB colors\ncolor[] barColors = {\ncolor(45, 2, 59),\ncolor(109, 0, 88),\ncolor(154, 51, 86),\ncolor(158, 79, 62),\ncolor(154, 51, 86),\ncolor(109, 0, 88),\ncolor(45, 2, 59)\n};")]),t._v(" "),a("p",[t._v("int sunRadius;\nint numReflectionBars;\nint topX;\nint topY;\nint topWidth;\nint bottomY;\nint maxHeight;\nfloat speed;\nArrayList lowerBars;")]),t._v(" "),a("p",[t._v("Reflection(int sunRadius, int numBars, int topX, int topY, float speed){\nthis.sunRadius = sunRadius;\nthis.topX = topX;\nthis.topY = topY;\nthis.speed = speed;")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("initialize(numBars);\n")])])]),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("void initialize(int numBars){\nthis.numReflectionBars = numBars;")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("topWidth = 2 * (sunRadius + sunRadius/3);\nmaxHeight = 10;\nbottomY = topY + (numBars * 2 * maxHeight);\nlowerBars = new ArrayList();\n\n// Setup bottom relection bars\nint x = topX;\nint y = topY;\nint w = topWidth;\nint h = maxHeight;\nfor ( int i = 0; i < numReflectionBars; i++ ) {   \n  y += (bottomY - topY) / numBars;\n  x += sunRadius / 16;\n  w -= 2 * (sunRadius / 16);\n\n  Rectangle r = new Rectangle(x, y, w, h);\n  lowerBars.add(r);\n}\n")])])]),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("void draw(){\nstrokeWeight(1);")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("for ( Rectangle bar : lowerBars ) {\n  for ( int i = (int)bar.x; i < bar.x + bar.w; i++ ) {\n    float alphaMax = -255 - (bar.y - topY);\n    float alphaMin =  255 + (bar.y - topY);\n    float alpha = map(i, bar.x, bar.x + bar.w, alphaMin, alphaMax);\n    float step = map(i, bar.x, bar.x + bar.w, 0, 1);\n    color lc = interpolateColor(barColors, step);\n\n    stroke(lc, 255 - abs(alpha));\n    line(i, bar.y, i, bar.y + bar.h);\n  }\n  \n  bar.y += speed;\n  bar.x += speed;\n  bar.w -= 2 * speed;\n\n  if( bar.y > bottomY ) {\n    // Bar at bottom, reset to top\n    \n    bar.x = topX;\n    bar.y = topY + maxHeight;\n    bar.w = topWidth;\n    bar.h = 1;\n  } else if( bar.y > bottomY - maxHeight ) {\n    // Bar near bottom\n    \n    bar.h -= speed;\n  } else if( bar.h < maxHeight ) {\n    // Bar height just reset and at top\n    \n    bar.y -= speed;\n    bar.h += speed;\n  }\n}\n")])])]),a("p",[t._v("}\n}")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])])])}),[],!1,null,null,null);a.default=e.exports}}]);