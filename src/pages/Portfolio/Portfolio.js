import React from "react";
import Project from '../../components/Projects/Projects'

export default function Portfolio() {
    return (
        <div className='container'>
        <div className='custom-container px-4 py-3 my-5 mx-auto' style={{ width: "90%", height: "38rem" }}>
            <h2 className='contact-header p-2'>Portfolio</h2>
            <hr style={{ borderTop: "solid 2px rgb(255, 189, 131)" }} />
            <Project />
        </div>
    </div>
    )
}