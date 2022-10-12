import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminSuccess } from '../redux/authenSlice';
import { Selector } from '../redux/selector';

function LoginPage(props) {
    const dispath = useDispatch();
    const [userName, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const Admin = useSelector(Selector.Authen.SelectorAdmin);
    console.log(Admin)
    const handleLogin = async () => {
        await axios({
            method: "post",
            url: "http://localhost:3000/api/login",
            data: {
                userName: userName,
                pass: pass
            }
        }).then((res) => {
            console.log(res.data);
            dispath(loginAdminSuccess(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div id='login'>
            <input type={"text"} onChange={(e) => setUsername(e.target.value)} value={userName} />
            <input type={"text"} onChange={(e) => setPass(e.target.value)} value={pass} />
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
}

export default LoginPage;