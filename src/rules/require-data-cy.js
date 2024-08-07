const isInteractiveElement = require("../utils/is-interactive-element");

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that interactive components have data-cy attribute",
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        function hasDataCyAttribute(node) {
            return node.attributes.some(attr => attr.name && attr.name.name === 'data-cy');
        }

        return {
            JSXOpeningElement(node) {
                const nodeName = node.name.name;

                if (isInteractiveElement(node) && !hasDataCyAttribute(node)) {
                    context.report({
                        node,
                        message: `${nodeName} element is missing data-cy attribute`,
                    });
                }
            },
        };
    },
};
