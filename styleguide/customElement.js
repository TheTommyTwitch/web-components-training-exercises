var createElement = function(tagName, basePrototype){
	basePrototype = basePrototype || HTMLElement.basePrototype;
	var template = document.currentScript.ownerDocument.getElementById(template).content;
	var customElementPrototype = Object.create(basePrototype);
	customElementPrototype.createCallback = function() {
		var shadowRoot = this.createShadowrRoot();
		car clone = document.importNode(template, true);
		shadowRoot.appendChild(clone);
	};
	return document.registerElement(tagName, {
		prototype: customElementPrototype
	});
}