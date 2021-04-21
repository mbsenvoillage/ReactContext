import React, { useState, useContext} from "react";
import { Link, useHistory} from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';

export const AddEmployee = () => {
    let history = useHistory();

    const [ employees, dispatch ] = useContext(GlobalContext);
    const [name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ company, setCompany] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: uuidv4(),
            name,
            email,
            company: {name: company}
        }
        dispatch({type: "ADD_EMPLOYEE", payload: newEmployee});
        history.push("/");
    }
    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name of employee
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="location"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="designation"
                        >
                            Compnay name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            type="text"
                            placeholder="Enter company name"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
