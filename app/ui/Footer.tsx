import Link from "next/link"

export default function Footer() {
	return (
		<footer className='w-full flex justify-center gap-4 pb-6'>
			<Link href='https://github.com/MiguelGFerreira'>Github</Link>
			<Link href='https://www.linkedin.com/in/miguelgferreira/'>LinkedIn</Link>
			<Link href='https://discordapp.com/users/398622977668808706'>Discord</Link>
		</footer>
	)
}