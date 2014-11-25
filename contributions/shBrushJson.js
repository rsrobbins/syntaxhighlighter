/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
	
		this.regexList = [
			{ regex: new XRegExp('"[0-9,a-z,A-Z]*":', 'gm'), css: 'keyword' },	
			{ regex: new XRegExp('"[^:]*?"[^:]', 'gm'), css: 'color3' }, 
			{ regex: new XRegExp('"[0-9][0-9]:[0-9][0-9]",[^:]', 'gm'), css: 'color3' }, // times
			{ regex: new XRegExp('"[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2}",[^:]', 'gm'), css: 'color3' }, // date and time
			{ regex: new XRegExp('[0-9]{1,15},[^:]', 'gm'), css: 'caption' }, // numbers
			{ regex: new XRegExp('(http|https)://[0-9,a-z,A-Z\/\.\?_=]*?"', 'gm'), css: 'color3' }, // urls
		];
		
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['json'];

	SyntaxHighlighter.brushes.Json = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
