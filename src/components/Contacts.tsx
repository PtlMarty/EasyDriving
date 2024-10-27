import { Mails, PhoneOutgoing } from "lucide-react";

const Contacts = () => {
  return (
    <div>
      <Mails className="text-blue-600" />
      Email
      <PhoneOutgoing className="text-blue-600" />
      phone
      <PhoneOutgoing className="text-blue-600" />
      phone
    </div>
    // TODO: Add more contact methods here as needed (e.g., LinkedIn, Twitter)
  );
};

export default Contacts;
