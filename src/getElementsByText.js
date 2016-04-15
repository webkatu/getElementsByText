(() => {
	function walkDOM(node, callback) {
		if(node === null) return;
		callback(node);

		walkDOM(node.firstChild, callback);
		walkDOM(node.nextSibling, callback);
	}

	function getElementsByText(text) {
		let set = new Set();
		walkDOM(this, (node) => {
			if(node.nodeType !== 3) return;
			if(node.nodeValue.indexOf(text) === -1) return;
			set.add(node.parentNode);
		});
		let ret = [];
		set.forEach((value) => { ret.push(value); });
		return (ret.length === 0) ? null : ret;
	}

	document.getElementsByText = getElementsByText;
	Element.prototype.getElementsByText = getElementsByText;
})();
