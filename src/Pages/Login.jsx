import { useState } from "react";

const Login = () => {
    const [email, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = e =>{
       e.preventDefault();
       console.log(email, password);
    }
    const handleEmailChange = e =>{
        setName(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-xl dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Enter your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 bg-[#9538E2] font-semibold text-white rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
                        </p> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
