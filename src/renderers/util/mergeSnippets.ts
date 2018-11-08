import { ISvgSnippet } from "../../api/ISvgSnippet";

export function mergeSnippets(snippets: ISvgSnippet[]): ISvgSnippet {
    return {
        body: snippets.map((s) => s.body).join("\n"),
        defs: [].concat.apply([], snippets.map((s) => s.defs || [])),
    };
}
