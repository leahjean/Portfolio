import AmazonAstro from "./experience-items.tsx/amazon-astro";
import AmazonIntern from "./experience-items.tsx/amazon-intern";

export default () => (
    <div id="experience" className="rounded-lg">
        <h1 className="uppercase text-lg font-semibold">
            Experience
        </h1>
        <ul className="list-inside">
            <AmazonAstro />
            <AmazonIntern />
        </ul>
    </div>
)