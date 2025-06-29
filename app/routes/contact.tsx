import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="container mx-auto bg-gray-900 p-4 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl">Contact Me</h1>
            <form className="mx-auto max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block">
                        Name
                    </label>
                    <Input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block">
                        Email
                    </label>
                    <Input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block">
                        Message
                    </label>
                    <Textarea id="message" placeholder="Your Message" />
                </div>
                <Button type="submit">Send Message</Button>
            </form>
        </div>
    );
}
