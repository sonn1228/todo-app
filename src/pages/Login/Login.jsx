import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex } from "../../helpers/regex";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, _] = useState(localStorage.getItem('token'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (emailRegex(email)) {
            const response = await axios.post('https://api-xi-fawn.vercel.app/api/v1/auth/login', {
                email, password
            })
            if (response.data.status === 200) {
                const token = response.data.data.accessToken;
                localStorage.setItem('token', token);
                navigate('/todos');
            }
        }
        else {
            return { message: "Email không hợp lệ" };
        }
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
    }, []);
    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <br />
            <button type="submit">Submit</button>
        </form>
    </>)
}

export default Login;