"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "parsfy",
              			"path": "parsfy/parsfy.js",
              			"file": "parsfy.js",
              			"module": "parsfy",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/parsfy.git",
              			"test": "parsfy-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Parse JSON structure properly.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"json": "circular-json",
              			"protype": "protype"
              		}
              	@end-include
              
              	@todo:
              		This will be the future circular json module of the vs architecture.
              	@end-todo
              */

var falzy = require("falzy");
var json = require("circular-json");
var protype = require("protype");

var parsfy = function parsfy(text, reviver) {
	/*;
                                             	@meta-configuration:
                                             		{
                                             			"text:required": "object"
                                             		}
                                             	@end-meta-configuration
                                             */

	if (falzy(text) || !protype(text, BOOLEAN + NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid entity");
	}

	return json.parse(text, reviver);
};

module.exports = parsfy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNmeS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImpzb24iLCJwcm90eXBlIiwicGFyc2Z5IiwidGV4dCIsInJldml2ZXIiLCJCT09MRUFOIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiRXJyb3IiLCJwYXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsZUFBVCxDQUFiO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQzlDOzs7Ozs7OztBQVFBLEtBQUlOLE1BQU9LLElBQVAsS0FBaUIsQ0FBQ0YsUUFBU0UsSUFBVCxFQUFlRSxVQUFVQyxNQUFWLEdBQW1CQyxNQUFuQixHQUE0QkMsTUFBM0MsQ0FBdEIsRUFBMkU7QUFDMUUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELFFBQU9ULEtBQUtVLEtBQUwsQ0FBWVAsSUFBWixFQUFrQkMsT0FBbEIsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBTyxPQUFPQyxPQUFQLEdBQWlCVixNQUFqQiIsImZpbGUiOiJwYXJzZnkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJwYXJzZnlcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicGFyc2Z5L3BhcnNmeS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJwYXJzZnkuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJwYXJzZnlcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcGFyc2Z5LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJwYXJzZnktdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRQYXJzZSBKU09OIHN0cnVjdHVyZSBwcm9wZXJseS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJqc29uXCI6IFwiY2lyY3VsYXItanNvblwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuXHJcblx0QHRvZG86XHJcblx0XHRUaGlzIHdpbGwgYmUgdGhlIGZ1dHVyZSBjaXJjdWxhciBqc29uIG1vZHVsZSBvZiB0aGUgdnMgYXJjaGl0ZWN0dXJlLlxyXG5cdEBlbmQtdG9kb1xyXG4qL1xyXG5cclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QganNvbiA9IHJlcXVpcmUoIFwiY2lyY3VsYXItanNvblwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5cclxuY29uc3QgcGFyc2Z5ID0gZnVuY3Rpb24gcGFyc2Z5KCB0ZXh0LCByZXZpdmVyICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwib2JqZWN0XCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHRleHQgKSB8fCAhcHJvdHlwZSggdGV4dCwgQk9PTEVBTiArIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4ganNvbi5wYXJzZSggdGV4dCwgcmV2aXZlciApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZnk7XHJcbiJdfQ==
//# sourceMappingURL=parsfy.support.js.map
