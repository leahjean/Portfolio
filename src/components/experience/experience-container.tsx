import AmazonAstro from "./experience-items/amazon-astro";
import AmazonIntern from "./experience-items/amazon-intern";

export default () => (
    <div id="experience" className="rounded-lg mb-3">
        <h1 className="uppercase text-xl font-semibold text-center mb-3">
            Experience
        </h1>
        <ul className="list-inside group/exp-list">
            <AmazonAstro />
            <AmazonIntern />
        </ul>
    </div>
)