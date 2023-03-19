const IN_PRODUCTION =
  process.env.NODE_ENV === "production";

import purgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";

const StyleBlocks =
  /<style[^]+?<\/style>/gi;
const CSSSelectors =
  /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g;
const TransitionsClasses =
  /-(leave|enter|appear)(|-(to|from|active))$/;
const CursorClasses =
  /^(?!(|.*?:)cursor-move).+-move$/;
const RouterLinkClasses =
  /^router-link(|-exact)-active$/;
const ScopedClasses = /data-v-.*/;

export default {
  plugins: [
    autoprefixer,
    IN_PRODUCTION &&
      purgecss({
        content: [
          `./public/**/*.html`,
          `./src/**/*.vue`,
        ],
        defaultExtractor: (content) =>
          content
            .replace(StyleBlocks, "")
            .match(CSSSelectors) || [],
        safelist: {
          standard: [
            "html",
            "body",
            TransitionsClasses,
            CursorClasses,
            RouterLinkClasses,
            ScopedClasses,
          ],
          deep: [
            /[data-bs-theme="dark"]$/,
          ],
        },
      }),
  ],
};
