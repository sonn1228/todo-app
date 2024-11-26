import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex } from "../../helpers/regex";
import { TextField, Button, Typography } from "@mui/material";
import Loading from '../../components/Loading/Loading.jsx'
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, _] = useState(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (emailRegex(email)) {
            const response = await axios.post('https://api-xi-fawn.vercel.app/api/v1/auth/login', {
                email, password
            })
            console.log("response: ", response)
            if (response.data.status === 200) {
                const token = response.data.data.accessToken;
                localStorage.setItem('token', token);
                navigate('/todos');
            }
        } else {
            setIsLoading(false);
            failedToast("Đăng nhập không thành công")
            return { message: "Email không hợp lệ" };
        }
        setIsLoading(false);

    }

    const fetchAuth = async (token) => {
        const res = await axios.get('https://api-xi-fawn.vercel.app/api/v1/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        if (res.status === 200) {
            navigate('/todos');
        }
    }

    useEffect(() => {
        if (token) {
            fetchAuth(token);
        }
    }, [token]);
    if(isLoading){
        return <Loading/>
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-pink-500">
            <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-lg">
                <Typography variant="h4" className="text-center text-gray-800 mb-6 font-semibold">Đăng Nhập</Typography>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        size="small"
                    />
                    <TextField
                        label="Mật khẩu"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        size="small"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg shadow-md"
                    >
                        Đăng Nhập
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
