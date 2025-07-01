import React, { useState, useEffect } from 'react'
import { headerDatum } from 'data/headerDatum'

export default function StickyHeader() {
    const [isShown, setIsShown] = useState(false)
    const [whatIsShown, setWhatIsShown] = useState('')

    const handleHover = (name: string, isHover: boolean) => {
        if (isHover) {
            setIsShown(true)
            setWhatIsShown(name)
        } else if (!isHover) {
            setIsShown(false)
            setWhatIsShown('')
        }
    }
    return (
        <div className="stickyHeaderMain">
            <div className="stickyHeaderIcons">
                {Object.keys(headerDatum).map((data) => {
                    return (
                        <button
                            onMouseEnter={() => handleHover(data, true)}
                            onMouseLeave={() => handleHover(data, false)}
                            key={`${headerDatum[data as keyof typeof headerDatum].name}`}
                            className="stickyHeaderIconButton"
                        >
                            <a target="_blank" href={`${headerDatum[data as keyof typeof headerDatum].link}`}>
                                <img
                                    className="stickyHeaderIcon"
                                    src={`${headerDatum[data as keyof typeof headerDatum].icon}`}
                                />
                            </a>
                        </button>
                    )
                })}
            </div>
            <div className="stickyHeaderMessageContainer">
                {isShown && <p className="stickyHeaderLink">Visit My {whatIsShown}</p>}
            </div>
        </div>
    )
}
