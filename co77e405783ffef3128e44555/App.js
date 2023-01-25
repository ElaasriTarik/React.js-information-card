import React from "react"
import ReactDOM from "react-dom"
import Info from "/components/Info"
import Footer from "/components/Footer"
import AboutInterests from "/components/AboutInterest"


export default function App() {
    return (
        <main className="hero">
        <Info />
        <AboutInterests />
        <Footer />
        </main>
    )
}
