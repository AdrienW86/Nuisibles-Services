import { Resend } from 'resend';

export async function POST(req) {
    try {
        // Initialisation à l'intérieur du POST pour éviter le crash au build de Vercel
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Une seule et unique extraction des données du formulaire
        const { name, email, subject, message } = await req.json();

        // 1. Validation des paramètres requis
        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ message: 'INVALID_PARAMETER' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Validation de la syntaxe de l'email client
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(email)) {
            return new Response(JSON.stringify({ message: "EMAIL_SYNTAX_INCORRECT" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 3. Nettoyage du message (protection contre les injections et formatage des sauts de ligne)
        const contenu = message
            .replace(/\n/g, "<br>")
            .replace(/\r/g, "<br>")
            .replace(/\t/g, "<br>")
            .replace(/<(?!br\s*\/?)[^>]+>/g, "");

        // 4. Envoi du mail via Resend
        const { data, error } = await resend.emails.send({
            from: `Radikal 3D Formulaire <${process.env.EMAIL_MASTER}>`, 
            to: [process.env.EMAIL_CLIENT],
            replyTo: email,
            subject: `Radikal 3D - ${subject}`,
            text: `${name} vous a contacté.\n\nVoici son message :\n\n${message}`,
            html: `
                <div style="font-family: sans-serif; color: #1f2937; max-width: 600px;">
                    <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">Nouveau message de contact</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Sujet :</strong> ${subject}</p>
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-top: 16px;">
                        <p style="margin: 0; font-style: italic; white-space: pre-line;">${contenu}</p>
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