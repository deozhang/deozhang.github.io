import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
export default function FirstPost(){
    return(
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
        </>
    )
}