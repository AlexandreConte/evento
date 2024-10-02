import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/logo.png"
        height={60}
        width={60}
        alt="Logo"
      />
      <Image 
        src="/logo-texto.png"
        width={230}
        height={0}
        alt="Logo"
      />
    </Link>
  )
}
