import "../../styles/home/hero.css";
import lentes from "../../assets/imgs/illustration/capa_0006_Lentes.png";
import celular from "../../assets/imgs/illustration/capa_0005_Celular.png";
import libreta from "../../assets/imgs/illustration/capa_0004_Libreta.png";
import booba from "../../assets/imgs/illustration/capa_0003_Booba.png";
import headphones from "../../assets/imgs/illustration/capa_0002_Headphones.png";

const capas = [
	{
		id: 1,
		alt: "Wave-contraste",
		class: "capa-0026",
	},
	{
		id: 2,
		alt: "Wave-fondo",
		class: "capa-0025",
	},
	{
		id: 3,
		alt: "Brillo",
		class: "capa-0024",
	},
	{
		id: 4,
		alt: "Escritorio",
		class: "capa-0023",
	},
	{
		id: 5,
		alt: "Periferico",
		class: "capa-0021",
	},
	{
		id: 6,
		alt: "SombraWashi",
		class: "capa-0020",
	},
	{
		id: 7,
		alt: "Wachi",
		class: "capa-0019",
	},
	{
		id: 8,
		alt: "SombraLapices",
		class: "capa-0018",
	},
	{
		id: 9,
		alt: "Lapicera",
		class: "capa-0017",
	},
	{
		id: 10,
		alt: "SombraBorrador",
		class: "capa-0016",
	},
	{
		id: 11,
		alt: "Borrador",
		class: "capa-0015",
	},
	{
		id: 12,
		alt: "SombraPinceles",
		class: "capa-0014",
	},
	{
		id: 13,
		alt: "Pinceles",
		class: "capa-0013",
	},
	{
		id: 14,
		alt: "Cable",
		class: "capa-0012",
	},
	{
		id: 15,
		alt: "SombraMouse",
		class: "capa-0011",
	},
	{
		id: 16,
		alt: "Mouse",
		class: "capa-0010",
	},
	{
		id: 17,
		alt: "SombraManos",
		class: "capa-0009",
	},
	{
		id: 18,
		alt: "Sketch",
		class: "capa-0022",
	},
	{
		id: 19,
		alt: "Michi",
		class: "capa-0008",
	},
	{
		id: 20,
		alt: "Bubble",
		class: "capa-001011",
	},
	{
		id: 21,
		alt: "Bubble",
		class: "capa-001012",
	},
	{
		id: 22,
		alt: "Bloom",
		class: "capa-001071",
	},
	{
		id: 23,
		alt: "Bloom",
		class: "capa-001073",
	},
	{
		id: 24,
		alt: "Vignnete",
		class: "capa-vignnete",
	},
];

const botones = [
	{
		id: 1,
		class: "capa-0006",
		alt: "Lentes",
		src: lentes,
		text: "sobre mi",
	},
	{
		id: 2,
		class: "capa-0005",
		alt: "Celular",
		src: celular,
		text: "contacto",
	},
	{
		id: 3,
		class: "capa-0004",
		alt: "Libreta",
		src: libreta,
		text: "portafolio",
	},
	{
		id: 4,
		class: "capa-0003",
		alt: "Booba",
		src: booba,
		text: "tienda",
	},
	{
		id: 5,
		class: "capa-0002",
		alt: "Headphones",
		src: headphones,
		text: "comisiones",
	},
];

const CoCapaIllu = (props) => {
	return props.capa.map((capa) => {
		return <div key={capa.id} alt={capa.alt} className={capa.class}></div>;
	});
};

const CoBotones = (props) => {
	return props.boton.map((boton) => {
		return (
			<div key={boton.id} className={boton.class}>
				<img alt={boton.alt} src={boton.src} />
				<span>{boton.text}</span>
			</div>
		);
	});
};

const CoHero = () => {
	return (
		<div id="hero">
			<div className="capa-0027">
				<CoCapaIllu capa={capas} />
				<CoBotones boton={botones} />
			</div>
			<div id="button_down">
				<svg
					id="arrow_down"
					viewBox="0 0 58 58"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M57.25 29C57.25 44.602 44.602 57.25 29 57.25C13.398 57.25 0.75 44.602 0.75 29C0.75 13.398 13.398 0.75 29 0.75C44.602 0.75 57.25 13.398 57.25 29ZM29 54.75C43.2213 54.75 54.75 43.2213 54.75 29C54.75 14.7787 43.2213 3.25 29 3.25C14.7787 3.25 3.25 14.7787 3.25 29C3.25 43.2213 14.7787 54.75 29 54.75Z"
						fill="white"
						stroke="black"
						stroke-width="1.5"
					/>
					<path
						d="M26.2581 35.5015L27.5384 36.7818V34.9712V16.8365C27.5384 16.0294 28.1928 15.375 28.9999 15.375C29.8071 15.375 30.4615 16.0294 30.4615 16.8365V34.9712V36.7818L31.7418 35.5015L38.1553 29.088C38.7174 28.5259 39.6287 28.5259 40.1908 29.088C40.7529 29.6501 40.7529 30.5614 40.1908 31.1235L30.6793 40.635C29.7518 41.5625 28.2481 41.5625 27.3206 40.635L17.8091 31.1235C17.247 30.5614 17.247 29.6501 17.8091 29.088C18.3712 28.5259 19.2825 28.5259 19.8446 29.088L26.2581 35.5015Z"
						fill="white"
						stroke="black"
						stroke-width="1.5"
					/>
				</svg>
			</div>
		</div>
	);
};

export default CoHero;
