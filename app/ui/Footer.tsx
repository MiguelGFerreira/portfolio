import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='bg-blue-500 text-white py-4'>
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; Miguel — All Rights Reserved</p>
        <div className="flex justify-center items-center gap-4">
          <Link href='https://github.com/MiguelGFerreira'>
            <Image
              src="/github-icon.svg"
              alt="GitHub icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href='https://www.linkedin.com/in/miguelgferreira/'>
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href='https://discordapp.com/users/398622977668808706'>
            <Image
              src="/discord-icon.svg"
              alt="Discord icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}