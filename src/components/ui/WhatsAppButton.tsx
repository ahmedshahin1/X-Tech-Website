import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </button>
  );
}
