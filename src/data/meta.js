// SPDX-License-Identifier: CC-BY-ND-4.0

import { Meta } from "./index.js"

export default Meta.parse({
  name: "Andrew Sòlanto",
  email: process.env.EMAIL,
  phone: process.env.PHONE,
  location: "Baltimore, Maryland",
  websites: [
    "https://linkedin.com/in/andrewsolanto",
    "https://github.com/solanto"
  ],

  personal: undefined,

  summary: "I'm an accessibility and UX–oriented software engineer with 6+ years combined academic, open-source, and professional software development experiences. My methods are informed by extensive research and open standards, and I'm trained to combine computing with human-centered design. In my free time, I've been designing, building, and writing for a technical blog covering my personal research interests in scientific computing and Linux systems admin—on the web at [dandelion.computer](https://dandelion.computer). And, as a fun fact, this résumé was generated with custom WebC components and data specified in YAML ([source on GitHub](https://github.com/solanto/resume))."
})