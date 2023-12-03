import PFooter from "../partials/PFooter"
import PNavbar from "../partials/PNavbar"

function Main({ Content }) {
    return <>
        <PNavbar />
        <Content />
        <PFooter />
    </>
}

export default Main