import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data:", formData);
        alert("O Formulário enviado!");
        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <div className="container relative z-30 mx-auto pt-24 text-white">
            <div className="p-4">
                <h1 className="mb-8 text-center font-bold text-4xl tracking-wide">Contate Me</h1>
                <p className="mx-auto mb-8 w-auto text-lg md:w-3/5">
                    Se você tiver alguma dúvida ou apenas quiser bater um papo, sinta-se à vontade
                    para me enviar uma mensagem. Estou sempre aberto a novas conexões e
                    oportunidades!
                </p>
                <form onSubmit={handleSubmit} className="relative z-50 mx-auto max-w-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block">
                            Nome
                        </label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Seu nome"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-2 block">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Seu melhor email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="mb-2 block">
                            Mensagem
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Deixe sua mensagem"
                            required
                        />
                    </div>
                    <Button type="submit">Enviar mensagem</Button>
                </form>
            </div>
        </div>
    );
}
