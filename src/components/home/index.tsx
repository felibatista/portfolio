import { Hero } from "./hero";
import { Side } from "./side";

export function Home(){
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 mt-10 md:mt-0">
            <Hero/>
            <Side/>
        </div>
    )
}