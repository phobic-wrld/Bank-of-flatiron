import Column from "./Column";
import Row from "./Row"
function Tables({ arr, data }) {
    return (
        <table className="table">
            <Column />
            <Row arr={arr} />

        </table>

    )
}
export default Tables;