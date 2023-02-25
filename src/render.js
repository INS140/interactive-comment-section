import React from "react"
import { renderToPipeableStream } from "react-dom/server"
import { Default } from "../client/jsx/default.jsx"

export const render = response => {
    const stream = renderToPipeableStream(<Default />, {
        bootstrapScripts: ["client.bundle.js"],
        onShellReady() {
            response.setHeader("content-type", "text/html")
            stream.pipe(response)
        }
    })
}