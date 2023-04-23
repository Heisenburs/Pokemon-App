const React = require('react')

function New() {
    return (
        <div>
            <h1>What's That Pokemon?</h1>
            <br/>
            <form action='/pokemon' method='POST'>
Name: <input type='text' name='name' />
<br />

            </form>
        </div>
    )
}