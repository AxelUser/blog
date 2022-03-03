import * as React from "react"
import * as blogStyles from '../styles.module.css'

const Announcement = () => (
    <div className={blogStyles.announcement}>
        <p>
            On 24th of February, 2022, russian military troops attacked Ukraine.
            Government officials named this "special military operation against neo-nazis", but it's a war against sovereign country.
        </p>
        <p>
            Those unlawful actions of Putin and his surroundings lead to death of innocent lives.
            Russian citizens are brutally detained at anti-war protests.
            Russian propaganda fuels people with lies and insane reasons for such terrific act of aggression.
            Russian censorship shuts the mouth of independent media, which call the "special operation" what it really is.
        </p>
        <p>
            People like me are stand against this barbarism. I want everyone to know, that this savageness has no justification,
            as well as insufficient actions from our political elite, which led to the emergence of autocracy in Russia.
        </p>
        <p><span className={blogStyles.statement}>This war must be stopped and russian troops should leave Ukraine immediately.</span></p>
    </div>
)

export default Announcement