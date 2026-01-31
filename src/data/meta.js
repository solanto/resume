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
  personal: "I've been spending my free time watching independent cybersecurity research talks recorded from the [Chaos Communication Congress](https://media.ccc.de/c/39c3) and [DEF CON](https://www.youtube.com/user/DEFCONConference). And, as a fun fact, this résumé was generated from data specified in YAML ([source on GitHub](https://github.com/solanto/resume))."
})