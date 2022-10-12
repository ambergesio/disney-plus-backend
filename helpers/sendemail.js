const sendGrid = require('@sendgrid/mail');
const config = require('../config/config');


const emailTemplate = (name) => {
    return `
	<header>
        <style>
            @import url('https://rsms.me/inter/inter.css');

            @font-face {
                font-family: 'Inter', sans-serif;
                src: url('https://rsms.me/inter/inter.css');
            }

            p {
                font-size: 1.2rem;
                font-family: 'Inter';
                text-align: center;
            }
            @media only screen and (max-width: 768px) {
                p {
                    font-size: 1rem;
                }
            }

            .container {
                margin: 3rem;
                padding: 3rem;
                width: 80%;
                font-size: 1.1rem;
                font-family: 'Roboto';
                font-weight: 300;
                color: rgb(248, 248, 248);
                line-height: 30px;

                display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 25px;

                border: solid 2px rgb(182, 182, 182);
                border-radius: 14px;
                background-color: rgb(33, 33, 33);
            }
            @media only screen and (max-width: 768px) {
                .container {
                    margin: 1rem;
                    padding: 2rem;
                    font-size: 1rem;
                }
            }

            .header{
                margin-bottom: 2rem;
                display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
            }

            .disney_logo {
                width: 340px;
            }

            .title {
                font-family: 'Inter';
                font-weight: 700;
                font-size: 2rem;
                line-height: 2.2rem;
                letter-spacing: -2px;
                text-align: left;
                
                background: linear-gradient(48deg, rgb(46, 189, 255) 0%, rgb(25, 136, 255) 35%, rgb(183, 39, 255) 75%, rgb(218, 0, 234) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -moz-text-fill-color: transparent;
                -webkit-text-fill-color: transparent;

            }
            @media only screen and (max-width: 756px) {
                .title {
                    font-size: 2rem;
                }
            }

        </style>
    </header>

    <div class="container">
        <div class="header">
            <img class="disney_logo" src="http://localhost:5001/images/sections/disney.png" alt="Disney logo" />
            <div class="title">Bienvenido/a a Disney Plus!</div>
        </div>

        <div>
            <p>
                Estimado/a ${name}
            </p>
        </div>
        <div>
            <p>
                Te has registrado con éxito en Disney Plus!: 
            </p>
        </div>
        <div>
            <p>
                Ya puedes empezar a disfrutar de nuestro contenido!
            </p>
        </div>
    </div>
    `
};

const welcomeRegistrationEmail = async (userName, userEmail, subject) => {

    sendGrid.setApiKey(config.email_api_key);

    const html = emailTemplate(userName);

    const email = {
        to: userEmail,
        from: config.email_sender,
        subject,
        html
    };
    sendGrid.send(email)
    .then(() =>{
        console.log(`email sent to ${userEmail}`);
    })
    .catch( (error) => {
        console.error(error);
    });
};


module.exports = { welcomeRegistrationEmail };
