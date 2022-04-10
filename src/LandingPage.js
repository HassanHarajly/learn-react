import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Counters} from "./components/Counters";

export function LandingPage() {
    return <>
        <BrowserRouter>
            <Link data-testid="navigateToCounters" to="/Counters">Go to Counter Page</Link>
            <Routes>
                <Route path="/Counters" element={<Counters/>}/>
            </Routes>
        </BrowserRouter>

    </>;
}