import { useRouteError } from "react-router-dom";

const Errorelem = () => {
    const error = useRouteError();
    console.log("Error", error);
    return (
        <div className="text-center">
            <h1> Error Occured</h1>
            <h2> Something Went Wrong...</h2>
            <h3> {error.data}</h3>
            <h3> status code :- <span className="text-danger">{error.status} {error.statusText}</span></h3>
        </div>
    )
}

export default Errorelem;