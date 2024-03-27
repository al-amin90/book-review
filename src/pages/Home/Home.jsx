import { useNavigation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BookLists from "../../components/BookLists/BookLists";
import Loader from "../Loader/Loader";


const Home = () => {
    const navigation = useNavigation();

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div>
            <Banner></Banner>
            <BookLists></BookLists>
        </div>
    );
};

export default Home;