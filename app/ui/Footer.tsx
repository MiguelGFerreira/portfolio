import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4 mt-auto'>
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex-grow" />
        <h4 className="mb-4">&copy; Miguel — All Rights Reserved</h4>
        <div className="flex justify-center items-center gap-4">
          <Link href='https://github.com/MiguelGFerreira' target="blank_">
            <Image
              src="/github-icon.svg"
              alt="GitHub icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href='https://www.linkedin.com/in/miguelgferreira/' target="blank_">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href='https://discordapp.com/users/398622977668808706' target="blank_">
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