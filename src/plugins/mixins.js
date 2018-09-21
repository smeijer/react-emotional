let store = {};

function mixins(context, content, selectors) {
  // apply mixins
  if (context === 1 && content.charCodeAt(0) === 64) {
    const name = content.substring(8).trim();
    const mixin = store[name];

    return mixin ? mixin.substring(0, mixin.length - 1) : '';
  }

  // collect mixins
  if (context === 3 && selectors[0].charCodeAt(2) === 105) {
    const index = content.indexOf('{');
    const name = selectors[0].substring(6).trim();
    const value = content.substring(index + 1, content.length - 1).trim();
    store[name] = value;
    return '';
  }
}

export default mixins;
