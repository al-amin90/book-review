import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Contact = () => {
    const navigation = useNavigation();


    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div>
            <h1>i here to show you </h1>
        </div>
    );
};

export default Contact;