import React, { useEffect } from 'react';
import '../styles/Legal.css';
import { useLanguage } from '../App';

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Content in English
    const contentEn = (
        <div className="legal-container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: December 15, 2025</p>

            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to FourthLine. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            </section>

            <section>
                <h2>2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul>
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                </ul>
            </section>

            <section>
                <h2>4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>

            <section>
                <h2>5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: contact@fourthline.ma</p>
            </section>
        </div>
    );

    // Content in French
    const contentFr = (
        <div className="legal-container">
            <h1>Politique de Confidentialité</h1>
            <p className="last-updated">Dernière mise à jour : 15 Décembre 2025</p>

            <section>
                <h2>1. Introduction</h2>
                <p>Bienvenue chez FourthLine. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web.</p>
            </section>

            <section>
                <h2>2. Données que nous collectons</h2>
                <p>Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant :</p>
                <ul>
                    <li><strong>Données d'identité :</strong> comprend le prénom, le nom, le nom d'utilisateur.</li>
                    <li><strong>Données de contact :</strong> comprend l'adresse email et le numéro de téléphone.</li>
                    <li><strong>Données techniques :</strong> comprend l'adresse IP, le type de navigateur, le fuseau horaire, le système d'exploitation.</li>
                </ul>
            </section>

            <section>
                <h2>3. Utilisation de vos données</h2>
                <p>Nous n'utiliserons vos données personnelles que lorsque la loi nous y autorise. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes :</p>
                <ul>
                    <li>Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous avons conclu avec vous.</li>
                    <li>Lorsque cela est nécessaire pour nos intérêts légitimes.</li>
                </ul>
            </section>

            <section>
                <h2>4. Sécurité des données</h2>
                <p>Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée.</p>
            </section>

            <section>
                <h2>5. Contactez-nous</h2>
                <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à : contact@fourthline.ma</p>
            </section>
        </div>
    );

    return (
        <div className="legal-page-wrapper">
            {language === 'en' ? contentEn : contentFr}
        </div>
    );
};

export default PrivacyPolicy;
