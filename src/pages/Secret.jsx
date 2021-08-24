import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const Secret = () => {
    const [user, setData] = useState('');
    const [alluser, setAllUser] = useState([]);

    const history = useHistory();

    const secretAccessData = async () => {
        try {
            const res = await fetch('/secret', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setData(data);
            if (res.status === 400) {
                history.push("/");
            }
        }
        catch (err) {
            history.push("/");
            console.log(err);
        }
    }


    const getAllData = async () => {
        try {
            const res = await fetch('/getAllUser', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setAllUser(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        secretAccessData();
        getAllData();
    }, [])


    const deletebutton = async (id) => {
        try {
            await fetch(`/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            getAllData();
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <Navbar />
            {/* <h1 className='m-5 text-primary '>Welcome {user} </h1> */}
            <div className="conatiner">
                <h2 className='m-5 text-secondary'>Total registered User Are Here</h2>
            </div>
            <div className="container text-success">
                <table className='table table-bordered'>
                    <thead className='text-warning'>
                        <tr>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody className='text-primary'>
                        {
                            alluser.map((alluser) => {
                                return (
                                    <tr key={alluser._id}>
                                        <td > {alluser.username}</td>
                                        <td> <button onClick={() => deletebutton(alluser._id)} className='btn btn-outline-danger'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Secret
