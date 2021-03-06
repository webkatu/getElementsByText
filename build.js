"use strict";

(function () {
	function walkDOM(node, callback) {
		if (node === null) return;
		callback(node);

		walkDOM(node.firstChild, callback);
		walkDOM(node.nextSibling, callback);
	}

	function getElementsByText(text) {
		var set = new Set();
		walkDOM(this, function (node) {
			if (node.nodeType !== 3) return;
			if (node.nodeValue.indexOf(text) === -1) return;
			set.add(node.parentNode);
		});
		var ret = [];
		set.forEach(function (value) {
			ret.push(value);
		});
		return ret.length === 0 ? null : ret;
	}

	document.getElementsByText = getElementsByText;
	Element.prototype.getElementsByText = getElementsByText;
})();
