import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
background: green;
width: 100%;
height: 0.5%;
`
export default () => {

    const [scrollProgress, setScrollProgress] = React.useState<number>(0)

    window.onscroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled)
        let progressBar = document.getElementById("progress")
        if (progressBar !== null) {
            progressBar.style.width = scrollProgress + "%";
        } 
    }
    return (
        <ProgressBar></ProgressBar>
    )
}