import { Link, useNavigate, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../routes/AuthProvider";



const SingIn = () => {
    const navigation = useNavigation()
    const navigate = useNavigate(null)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const { logInUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const termsRef = useRef(null)

    const handleSubmitSingIn = () => {
        if (!email) {
            return setError("Your Email is Empty")
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return setError("Invalid Email Address")
        }
        else if (!termsRef.current.checked) {
            return setError("You need to agree trems and conditions")
        }


        //log in 
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("You successfully Log in")
            })
            .catch(error => setError(error.message))
    }

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div className="flex items-center mb-9 justify-center">
            <Card color="transparent" className="" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Log In
                </Typography>
                <Typography color="gray" className="mt-1 text-center font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            onChange={e => setPassword(e.target.value)}
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    {/* <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    /> */}
                    <div className="mt-4">
                        <input ref={termsRef} type="checkbox" name="trems" id="trems" />
                        <label htmlFor="trems" className="ml-2 "> I agree the <a className="font-medium transition-colors hover:text-gray-900 cursor-pointer"> Terms and Conditions</a></label>
                    </div>
                    <Button onClick={handleSubmitSingIn} className="mt-6" fullWidth>
                        Log In
                    </Button>
                    {
                        success && <p className="text-center mt-2 text-green-500 font-bold">{success}</p>
                    }
                    {
                        error && <p className="text-center mt-4 text-red-500 font-bold">{error}</p>
                    }
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        New to this book review? create account{" "}
                        <Link to="/contact">
                            <button className="font-medium text-gray-900">
                                Sign Up
                            </button>
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default SingIn;