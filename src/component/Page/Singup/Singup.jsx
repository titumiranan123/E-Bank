import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Authcontext } from "../../Provider/Provider";


const Signup = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(Authcontext)
    const navigate = useNavigate()
    const hadalSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, name, password)
        createUser(email, password)
            .then(user => {
                if (user) {
                    //TODO: PHOTO UPLOAD SECTION IS ......
                    updateUserProfile(name, photo)
                        // eslint-disable-next-line no-unused-vars
                        .then(res => {

                            if (res) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'sing up successful',
                                })

                            }

                            navigate('/login')

                        })
                        .catch(err => {
                            console.log(err)
                            if (err) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',

                                })
                            }
                        })
                }
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })
    }
    const googleLogin = () => {
        googleSignIn()
            .then(res => {
                if (res) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                    navigate('/')
                }

            })
            .catch(err => {

                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 py-6 w-96">
                <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
                <form onSubmit={hadalSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="Name"
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Photo">
                            Photo
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="Photo"
                            type="Photo"
                            name="photo"
                            placeholder="Enter your PhotoURl"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>

                    </div>
                    <Link
                        className="inline-block align-baseline font-semibold hover:underline text-sm text-blue-500 hover:text-blue-800"
                        to={'/singin'}
                    >
                        Already have an account? Sign In
                    </Link>
                </form>
                <div className="flex justify-center items-center mt-10">
                    <button onClick={googleLogin} className="py-1 px-4 bg-green-600 hover:bg-green-800 text-center rounded-lg flex justify-center items-center gap-4">Login With Google<FaGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;