var createElement = function(tagName, templateId, basePrototype) {
        basePrototype = basePrototype || HTMLElement.prototype;
        var template = document.currentScript.ownerDocument.getElementById(templateId).content;
        var customElementPrototype = Object.create(basePrototype);
        customElementPrototype.createdCallback = function() {
            var shadowRoot = this.createShadowRoot();
            var clone = document.importNode(template, true);
            shadowRoot.appendChild(clone);
        };
        return document.registerElement(tagName, {
            prototype: customElementPrototype
        });
    };