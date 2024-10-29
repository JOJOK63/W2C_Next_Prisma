export function ContactFormComponent(){
    return(
        <>
            <form className="bg-navbar"  action="MAILTO:jojok63@hotmail.fr" method="post" encType="text/plain">
                <label htmlFor="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required/><br/>
                <label htmlFor="email">Adresse e-mail :</label>
                <input type="email" id="email" name="email" required/><br/>
                <label htmlFor="objet">Téléphone :</label>
                <input type="text" id="objet" name="objet" required/><br/>
                <label htmlFor="message">Message :</label><br/>
                <textarea id="message" name="message" required></textarea><br/>
                <input type="submit" value="Envoyer"/>
                <input type="reset" value="Effacer"/>
            </form>
        </>
    )
}