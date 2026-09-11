import { Resend } from 'resend';

export async function POST(req) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Extraction des données adaptées aux besoins de l'intervention
        const { name, email, phone, city, service, message } = await req.json();

        // 1. Validation des paramètres obligatoires
        if (!name || !phone || !city || !service) {
            return new Response(JSON.stringify({ message: 'INVALID_PARAMETER' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Validation optionnelle de la syntaxe de l'email si renseigné
        if (email) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(email)) {
                return new Response(JSON.stringify({ message: "EMAIL_SYNTAX_INCORRECT" }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        // 3. Nettoyage du message
        const contenuSanitise = message
            ? message
                .replace(/\n/g, "<br>")
                .replace(/\r/g, "<br>")
                .replace(/\t/g, "<br>")
                .replace(/<(?!br\s*\/?)[^>]+>/g, "")
            : "Aucun détail complémentaire.";

        // 4. Envoi du mail via Resend
        const { data, error } = await resend.emails.send({
            from: `Nuisibles Services <${process.env.EMAIL_MASTER}>`, 
            to: [process.env.EMAIL_CLIENT],
            replyTo: email || undefined,
            subject: `🚨 URGENCE 66 : ${service} - ${city}`,
            text: `${name} (${phone}) demande une intervention à ${city} pour : ${service}.\n\nMessage : ${message || 'Aucun'}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #1f2937; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin: 0 auto;">
                    <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 8px; margin-top: 0; text-transform: uppercase;">
                        🚨 Demande d'intervention
                    </h2>
                    <p style="margin: 8px 0;"><strong>Service :</strong> ${service}</p>
                    <p style="margin: 8px 0;"><strong>Nom du client :</strong> ${name}</p>
                    <p style="margin: 8px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #dc2626; font-weight: bold; text-decoration: none;">${phone}</a></p>
                    <p style="margin: 8px 0;"><strong>Ville / Secteur :</strong> ${city}</p>
                    <p style="margin: 8px 0;"><strong>Email :</strong> ${email || 'Non renseigné'}</p>
                    
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-top: 16px;">
                        <p style="margin: 0 0 4px 0; font-weight: bold; font-size: 12px; color: #6b7280; text-transform: uppercase;">Précisions :</p>
                        <p style="margin: 0; font-style: italic; white-space: pre-line; font-size: 14px;">${contenuSanitise}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return new Response(JSON.stringify({ message: "ERROR_WITH_RESEND", error }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ message: "EMAIL_SENDED_SUCCESSFULLY" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Global Server Error:", error);
        return new Response(JSON.stringify({ message: "SERVER_ERROR", error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}