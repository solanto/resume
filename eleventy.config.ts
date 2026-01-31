import webc from "@11ty/eleventy-plugin-webc"
import typography from "@jamshop/eleventy-plugin-typography"
import postcssPlugin from "@jgarber/eleventy-plugin-postcss"
// @ts-expect-error
import tinyHTML from "@sardine/eleventy-plugin-tinyhtml"
import yaml from "js-yaml"
import parsePhoneNumber from "libphonenumber-js"
import { RenderPlugin } from "@11ty/eleventy"
import type UserConfig from "@11ty/eleventy/UserConfig"
import type { defaultConfig } from "./node_modules/@11ty/eleventy/src/defaultConfig"
import { JSDOM } from "jsdom"

try { await import("dotenv/config") }
catch (error) { if ((error as any).code != "MODULE_NOT_FOUND") throw error }

export default async function (config: UserConfig): Promise<Partial<defaultConfig>> {
    config.addExtension("11ty.ts", { key: "11ty.js" })
    config.addTemplateFormats("11ty.ts")

    config.addPlugin(postcssPlugin)
    config.addPlugin(typography)
    config.addPlugin(RenderPlugin)

    config.addPlugin(webc, {
        components: ["src/components/**/*.webc"]
    })

    config.addPlugin(tinyHTML, {
        collapseWhitespace: false,
        removeRedundantAttributes: true
    })

    config.addDataExtension("yaml", yaml.load)

    config.addShortcode("parsePhone", parsePhoneNumber)

    config.addShortcode("markdown",
        async (fragment: string) =>
            (
                new JSDOM(
                    config.getFilters()["typogrify"](
                        await config.getFilters()["renderContent"](fragment, "md")
                    )
                ).window.document.body.firstChild as HTMLParagraphElement
            ).innerHTML
    )

    config.addShortcode("trim", (promise: Promise<string>) =>
        promise.then(text => text.trim())
    )

    config.addShortcode("eachWord", (text: string) => text
        .split(" ")
        .map(word => /*html*/`<span class="word">${word}</span>`)
        .join(" ")
    )

    return {
        htmlTemplateEngine: "webc",
        dir: {
            input: "src/views",
            includes: "../includes",
            output: "build",
            data: "../data"
        }
    }
}