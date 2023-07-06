import React from 'react'

const Login = () => {
    let [check, setCheck] = React.useState(false)

    return (
        <div>
            <h1>Login Component</h1>
            <pre>{JSON.stringify(check)}</pre>
            <form action="">
                <input type="checkbox" onChange={(event) => {
                    setCheck(event.target.checked)
                }} /> Please Accept Terms & Conditions
                <br /><br />
                <input type="submit" value="vasu" disabled={!check} />
            </form>
        </div>
    )
}

export default Login