function DisplayUserInUnOrderList(props) {


    return(
        <div>
            <h3>User details in UnOrder Format</h3>
            <ul>
                {
                    props.userData.map((user,index)=>
                    <li key={index}>{user}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default DisplayUserInUnOrderList;