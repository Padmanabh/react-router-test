import React, { useEffect, useState } from 'react'
import User from './User'
import { Route, Switch } from 'react-router-dom';

export default function UserList() {

    //let match = useRouteMatch();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => setUsers(res));
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/" render={() => (
                    <div>
                        <h5 className="mb-4">Users</h5>
                        <div className="d-flex flex-column justify-content-center">
                            {users.map((user) => {
                                return <User key={user.id} user={user} />
                            })}
                        </div>
                    </div>
                )} />
            </Switch>
        </div>
    )
}
