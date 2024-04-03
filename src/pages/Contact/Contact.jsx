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



const Contact = () => {
    const navigation = useNavigation();
    const { createUser, singWithGoogle, singWithGithub } = useContext(AuthContext);

    const navigate = useNavigate(null)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const termsRef = useRef(null)


    const handleGoogleSingUp = () => {
        singWithGoogle()
            .then(() => {
                setSuccess("Account Create Successfully")
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            })
            .catch(error => console.log(error))
    }

    const handleGithubSingUp = () => {
        singWithGithub()
            .then(() => {
                setSuccess("Account Create Successfully")
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            })
            .catch(error => console.log(error))
    }

    const handleSubmitSingUp = () => {

        // reset success & error
        setSuccess('')
        setError('')

        // validation 
        if (!email) {
            return setError("Your Email is Empty")
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return setError("Invalid Email Address")
        }
        else if (!/^(?=.*[A-Z])(?=.*[#@$%^&*]).{8,}$/.test(password)) {
            return setError("Password must have upperCase & special char")
        }
        else if (!termsRef.current.checked) {
            return setError("You need to agree trems and conditions")
        }

        //user account created
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("Account Create Successfully")
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            })
            .catch(error => {
                const errSMS = error.message;
                if (errSMS.includes("email-already-in-use"))
                    setError("You Already Used this email"
                    )
                else setError(error.message)
            })

    }



    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div className="flex items-center mb-9 justify-center">
            <Card color="transparent" className="" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 text-center font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>


                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            onChange={e => setName(e.target.value)}
                            placeholder="Your Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your Email"
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
                    <Button onClick={handleSubmitSingUp} className="mt-6" fullWidth>
                        sign up
                    </Button>
                    <Button onClick={handleGoogleSingUp} className="mt-6 bg-orange-300 border text-black" fullWidth>
                        Google
                    </Button>
                    <Button onClick={handleGithubSingUp} className="mt-3 bg-gray-300 border text-black" fullWidth>
                        Github
                    </Button>

                    {
                        success && <p className="text-center mt-2 text-green-500 font-bold">{success}</p>
                    }
                    {
                        error && <p className="text-center mt-4 text-red-500 font-bold">{error}</p>
                    }

                    <Typography color="gray" className="mt-3 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/singIn">
                            <button className="font-medium text-gray-900">
                                Log In
                            </button>
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Contact;