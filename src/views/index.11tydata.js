
import parsePhoneNumber from "libphonenumber-js"
/** @typedef {import("../data/types").default} Data */

export default {
    eleventyComputed: {
        phone: (/** @type {Data} */ data) =>
            data.meta.phone ? parsePhoneNumber(data.meta.phone) : undefined
    }
}