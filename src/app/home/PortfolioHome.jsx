import Intro from "./Intro";
import Image from "next/image";
import LinkedInShowcase from "./LinkedInShowCase";
import Description from "./Description";
import FillerContent from "./FillerContent";
import Honors from "./Honors";

export default function PortfolioHome() {
    return (
        <>
            <Intro />
            <LinkedInShowcase />
            <Description />
            <FillerContent />
            <Honors/>
        </>
    )
}
