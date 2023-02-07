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
            <a
              href="/"
              rel="noopener noreferrer"
            >
              主页{' '}
            </a>
        </>
    )
}