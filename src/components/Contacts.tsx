import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Mails, PhoneOutgoing, Smartphone } from "lucide-react";
import InquiryForm from "./InquiryForm";

const Contacts = () => {
  return (
    <section>
      <aside className="flex gap-6 m-auto justify-center items-center">
        {/* EMAIL */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <Mails className="text-blue-600" />
            </DialogTrigger>
            <DialogContent className=" bg-white flex align-middle justify-center p-4">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-primary">
                  Contact Us{" "}
                </DialogTitle>
                <DialogDescription>
                  <InquiryForm />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* PHONE */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <PhoneOutgoing className="text-blue-600" />
            </DialogTrigger>
            <DialogContent className="p-0 bg-white">
              <DialogHeader>
                <DialogDescription className="flex flex-col bg-white justify-center items-center gap-5 my-3">
                  <div className="flex">
                    <Smartphone className="text-blue-600" />{" "}
                    <p>+81 70-3369-4539 </p>
                  </div>
                  <div className="flex">
                    <Smartphone className="text-blue-600" />
                    <p> +81 90-5416-5083</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* LINE */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <img src="./LINE_logo.svg" alt="line" className="size-8" />
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <DialogDescription className="flex bg-white justify-center">
                  <img
                    src="https://easyfurnishjapan.com/wp-content/uploads/elementor/thumbs/qrcode_line.me2_-ql2bt0h8h4ubs0dturfc4qsr7g6vzwc5w8360jxb68.png"
                    alt="Line1"
                  />
                  <img
                    src="https://easyfurnishjapan.com/wp-content/uploads/elementor/thumbs/e9f3eb50-8d8b-4276-a90b-460c40c6f6f3-qsz8l1kzt230rutt20x3sss25pd2rwjlwhqm9g4c0g.png"
                    alt="Line2"
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* WHATSAPP */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <img src="./WhatsApp.svg" alt="line" className="size-8" />
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <DialogDescription className="flex bg-white justify-center ">
                  <img
                    src="https://easyfurnishjapan.com/wp-content/uploads/elementor/thumbs/qrcode_api.whatsapp.com2_-ql2bsdx3x3zg1dalihoagwhoy7a2v5ult4fihwurbk.png"
                    alt="Line1"
                  />
                  <img
                    src="https://easyfurnishjapan.com/wp-content/uploads/elementor/thumbs/joseWA-qsz7irllhxonzifekha19gibau0zbml3z1cspsvhe8.png"
                    alt="Line2"
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </aside>
    </section>
    // TODO: Add more contact methods here as needed (e.g., LinkedIn, Twitter)
    // TODO: Implement responsiveness for different screen sizes
  );
};

export default Contacts;
