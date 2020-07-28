import React from 'react'
import { Link} from 'react-router-dom';

export default function User({ user }) {
    
    return (
        <Link to={`/Users/${user.id}/albums`}> {user.id} - {user.name}</Link>
    )
}

/*function User_({ user }) {
    let match = useRouteMatch();
    return (
        <div className="containe" >
            <div className="row">
                <div className="col">{user.id} - {user.name}</div>
                <div className="col">
                    <Link to={`${match.path}/albums/${user.id}`}>Albums</Link>
                </div>
            </div>
        </div>
    )
}
*/