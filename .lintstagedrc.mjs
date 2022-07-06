class ListFormatter {
  static #formatter = new Intl.ListFormat('en', {
    style: 'narrow',
    type: 'unit',
  });

  static format(items) {
    return this.#formatter.format(items);
  }
}

export default {
  '*.{js,cjs,mjs,jsx,ts,tsx,json,html,css,scss,sass,less,md,mdx,markdown,yml,yaml,sh}': (files) => {
    if (files.length <= 25) {
      return `npx prettier --write --ignore-unknown ${ListFormatter.format(files)}`;
    }
    return 'npx prettier --write --ignore-unknown .';
  },
};
