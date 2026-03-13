function DisplayUserInOrderList(props) {


    return(
        <div>
            <h3>User details in Order Format</h3>
            <ol>
                {
                    props.userData.map((user,index)=>
                    <li key={index}>{user}</li>
                    )
                }
            </ol>
        </div>
    )
}

export default DisplayUserInOrderList;