import type { Config } from "postcss-load-config"
import calc from "postcss-calc"

const config: Config = {
    plugins: [calc({})]
}

export default config