import logo from './logo.svg';
import Address from './Address';
//function component 2

function Contact() {

    // empty parent can add by fragmentation tag <> </>

    // <div></div>

    return (

        <p>

            <span>I am in Contact component</span>

            <img src={logo} width="50" height="50"></img>
            <Address></Address>

        </p>

    );

}

export default Contact;