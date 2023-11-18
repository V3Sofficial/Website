import Image from "next/image";
import Link from "next/link";

export default function Playstore_link(link: string) {
    return (
        <Link href={link}>
            <Image src={} alt={}></Image>
        </Link>
    )
}