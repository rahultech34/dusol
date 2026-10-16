import sanitizeHtml from "sanitize-html";

export function sanitizeDocumentHtml(dirtyHtml: string): string {
  if (!dirtyHtml) return "";

  return sanitizeHtml(dirtyHtml, {
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "div",
      "span",
      "b",
      "strong",
      "i",
      "em",
      "u",
      "s",
      "strike",
      "blockquote",
      "code",
      "pre",
      "hr",
      "br",
      "ul",
      "ol",
      "li",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "a",
      "img",
      "caption",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height"],
      table: ["border", "cellpadding", "cellspacing", "style"],
      th: ["colspan", "rowspan", "style", "scope"],
      td: ["colspan", "rowspan", "style"],
      p: ["style"],
      span: ["style"],
      div: ["style"],
      h1: ["id"],
      h2: ["id"],
      h3: ["id"],
      h4: ["id"],
      h5: ["id"],
      h6: ["id"],
    },
    allowedSchemes: ["http", "https", "mailto", "data"],
    allowedSchemesByTag: {
      img: ["data", "http", "https"],
    },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
    },
  });
}
