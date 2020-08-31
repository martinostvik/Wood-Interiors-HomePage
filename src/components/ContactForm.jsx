import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('Beställning');
    const [ body, setBody ] = useState('');
    const [ mailSent, setMailSent ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    const API_PATH = 'http://ostvik.space/mail.php';

    function handleFormSubmit(e) {
        setLoading(true);
        axios({
            method: 'post',
            url: API_PATH, 
            data: {
                name,
                subject,
                email,
                body,
            }})
            .then(res => {
                setLoading(false);
                setMailSent(true);
            })
    }

    return(
        <form 
            name="form"
            accept-charset="iso-8859-1" 
            id="contact-form"
        >
            <div className="form-group">
                <label for="exampleInputEmail1">Namn</label>
                <input type="text" onChange={e => setName(e.target.value)} name="name" className="form-control" id="exampleInputEmail1" placeholder="Skriv in namn"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">E-postadress</label>
                <input type="email" onChange={e => setEmail(e.target.value)} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv in e-mail"></input>
                <small id="emailHelp" className="form-text text-muted">Vi kommer att kontakta dig på den här e-postadressen.</small>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Ärende</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={e => setSubject(e.target.value)} name="subject">
                    <option>Beställning</option>
                    <option>Hjälp</option>
                    <option>Övrigt</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Beställning/Fråga</label>
                <textarea name="body" onChange={e => setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            {loading ? 
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
                mailSent ?
                <><button className="btn btn-secondary disabled" aria-disabled="true" disabled>Skicka Meddelande</button><div>Tack för att du kontaktar oss! Vi svarar så snart som möjligt.</div></> : 
                <button type="submit" onClick={e => handleFormSubmit(e)} className="btn btn-secondary">Skicka Meddelande</button>
                    
            }
        </form>
    );
}
