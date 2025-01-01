import React, { useEffect } from 'react';
import axios from 'axios';
import { setOtherUsers } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const token = localStorage.getItem('token'); // or wherever you store your token

                const res = await axios.get('http://localhost:8030/api/v1/user/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Ensure the token is valid
                    },
                });

                console.log(res);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchOtherUsers();
    }, [dispatch]);
};

export default useGetOtherUsers;
