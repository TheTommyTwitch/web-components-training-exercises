var createElement = function(template, basePrototype){
	basePrototype = basePrototype || HTMLElement.basePrototype;
	var template = document.currentScript.ownerDocument.getElementById(template).content;
	var customElementPrototype = Object.create(basePrototype);
	customElementPrototype.createCallback = function() {
		var shadowRoot = this.createShadowrRoot();
		var clone = document.importNode(template, true);
		shadowRoot.appendChild(clone);
	};
	return document.registerElement(tagName, {
		prototype: customElementPrototype
	});
}