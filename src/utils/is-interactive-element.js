module.exports = function isInteractiveElement(node) {
    const interactiveElements = ['button', 'a', 'input', 'select', 'textarea'];
    return interactiveElements.includes(node.name.name)
}