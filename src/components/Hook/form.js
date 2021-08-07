import React, {useState, useEffect} from 'react';

function Form() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    useEffect(function persistForm() {
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });

    return (
        <>
            <h2>Name: {name}.</h2>
            <h2>Surname: {surname}.</h2>
            <button onClick={() => {setName('Dat')}}>
                Set name
            </button>
        </>
    )
}

export default Form;