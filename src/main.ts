import { writeFile, writeJson } from "fs-extra";
import { DefaultProductGenerator } from "./generator/DefaultProductGenerator";
import { ISvgSnippet } from "./api/ISvgSnippet";
import { DefaultProductRenderer } from "./renderers/DefaultProductRenderer";

async function main() {
    const model = await new DefaultProductGenerator().generate(0);
    const renderer = new DefaultProductRenderer();
    writeJson("model.json", model)
        .then(() => {
            return renderer.render(model)
                .then((renderResult: ISvgSnippet) => {
                    return writeFile("output.html", renderResult.body);
                });
        });
}

main();
