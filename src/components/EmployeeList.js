import React, {useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

export const EmployeeList = () => {
    const [ employees, dispatch ] = useContext(GlobalContext);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const employeeList = response.data;
                employeeList.map(employee => dispatch({type: 'ADD_EMPLOYEE', payload: employee}))
                console.log(employees)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <React.Fragment>
            {
                employees.length > 0 ? (
                    <React.Fragment>
                        {
                            employees.map((employee) => (
                                <div key={employee.id} className="flex items-center bg-gray-100 mb-10 shadow">
                                    <div className="flex-auto text-left px-4 py-2 m-2">
                                        <p className="text-gray-900 leading-none">{employee.name}</p>
                                        <p className="text-gray-600">{employee.email}</p>
                                        <span className="inline-block text-sm font-semibold mt-1">{employee.company.name}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </React.Fragment>
                ) : (
                    <p>No employees.</p>
                )
            }
        </React.Fragment>
    )
}
