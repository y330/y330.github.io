// svelte.config.js
import preprocess from "svelte-preprocess";
/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: preprocess({
    aliases: [
      ["py", "brython"],
      ["python", "brython"]
    ],
    /** Add a custom language preprocessor */
    brython({ content, filename, attributes }) {
      const { code, map } = require("brython").render(content);

      return { code, map };
    }

    // ...svelte-preprocess options
  })
  // ...other svelte options
};

export default config;
