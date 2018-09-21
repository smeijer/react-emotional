let store = {};

function replace(match, group) {
  return store[group] || match;
}

function customProperties(context, content) {
  if (context !== 1) {
    return;
  }

  // collect custom properties
  if (content.charCodeAt(0) + content.charCodeAt(1) === 90) {
    const index = content.indexOf(':');
    const name = content.substring(0, index);
    const value = content.substring(index + 1).trim();
    store[name] = value;
    return content;
  }

  // replace custom properties
  if (content.indexOf('var(') > 0) {
    return content.replace(/var\((.*)\)/g, replace);
  }
}

export default customProperties;
