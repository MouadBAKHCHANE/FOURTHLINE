import React, { useEffect } from 'react';
import '../styles/Legal.css';
import { useLanguage } from '../App';

const TermsOfService = () => {
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contentEn = (
        <div className="legal-container">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: December 15, 2025</p>

            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
                <h2>2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Seedsvision's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
                <h2>3. Disclaimer</h2>
                <p>The materials on Seedsvision's website are provided on an 'as is' basis. Seedsvision makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
                <h2>4. Limitations</h2>
                <p>In no event shall Seedsvision or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Seedsvision's website.</p>
            </section>
        </div>
    );

    const contentFr = (
        <div className="legal-container">
            <h1>Conditions d'Utilisation</h1>
            <p className="last-updated">Dernière mise à jour : 15 Décembre 2025</p>

            <section>
                <h2>1. Acceptation des conditions</h2>
                <p>En accédant et en utilisant ce site Web, vous acceptez d'être lié par les termes et dispositions de cet accord.</p>
            </section>

            <section>
                <h2>2. Licence d'utilisation</h2>
                <p>Il est permis de télécharger temporairement une copie du matériel (information ou logiciel) sur le site Web de Seedsvision pour une visualisation transitoire personnelle et non commerciale uniquement.</p>
            </section>

            <section>
                <h2>3. Avertissement</h2>
                <p>Le matériel sur le site Web de Seedsvision est fourni « tel quel ». Seedsvision ne donne aucune garantie, expresse ou implicite, et rejette par la présente toutes les autres garanties.</p>
            </section>

            <section>
                <h2>4. Limitations</h2>
                <p>En aucun cas, Seedsvision ou ses fournisseurs ne pourront être tenus responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou dus à une interruption d'activité) découlant de l'utilisation ou de l'incapacité d'utiliser le matériel sur le site de Seedsvision.</p>
            </section>
        </div>
    );

    return (
        <div className="legal-page-wrapper">
            {language === 'en' ? contentEn : contentFr}
        </div>
    );
};

export default TermsOfService;
