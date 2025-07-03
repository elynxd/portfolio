import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="container mx-auto pt-24 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl tracking-wide">Contate Me</h1>
            <form className="mx-auto max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block">
                        Nome
                    </label>
                    <Input type="text" id="name" placeholder="Seu nome" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block">
                        Email
                    </label>
                    <Input type="email" id="email" placeholder="Seu melhor email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block">
                        Mensagem
                    </label>
                    <Textarea id="message" placeholder="Deixe sua mensagem" />
                </div>
                <Button type="submit">Enviar mensagem</Button>
            </form>
        </div>
    );
}
