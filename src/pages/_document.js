import {Html, Head, Main, NextScript} from "next/document"

export default function Document() {
	return (
		<Html lang="es" dir="ltr">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="http://localhost:3000/" />
				<link rel="home" href="http://localhost:3000/" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Eduard" />
				<meta name="copyright" content="Eduard" />
				<meta name="theme-color" content="#000" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta itemprop="image" content="https://res.cloudinary.com/dv2u2ctd0/image/upload/v1678685306/Captura_de_pantalla_2023-03-13_062738_sseynr.png"/>
				<meta property="og:locale" content="es_ES" />
				<meta property="og:site_name" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://localhost:3000/" />
				<meta property="og:image" content="https://res.cloudinary.com/dv2u2ctd0/image/upload/v1678685306/Captura_de_pantalla_2023-03-13_062738_sseynr.png"/>
				<meta property="og:image:width" content="889" />
				<meta property="og:image:height" content="716" />
				<meta property="og:image:type" content="image/png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:label1" content="Tiempo de lectura" />
				<meta name="twitter:data1" content="6 minutos" />
				<meta name="twitter:site" content="GuitarraLa" />
				<meta name="twitter:creator" content="GuitarraLa" />
				<meta name="twitter:image:src" content="https://res.cloudinary.com/dv2u2ctd0/image/upload/v1678685306/Captura_de_pantalla_2023-03-13_062738_sseynr.png"/>
				<meta name="twitter:image:width" content="889" />
				<meta name="twitter:image:height" content="716" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
