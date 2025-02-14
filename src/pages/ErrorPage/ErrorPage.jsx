import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p className="text-xl font-medium">Sorry, an unexpected error has occurred.</p>
                <p className="font-medium">
                    <i>Page {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;