import "../../styles/home.css";
import lentes from "../../assets/imgs/illustration/escritorio_michi_final_0006_Lentes.png";
import celular from "../../assets/imgs/illustration/escritorio_michi_final_0005_Celular.png";
import libreta from "../../assets/imgs/illustration/escritorio_michi_final_0004_Libreta.png";
import booba from "../../assets/imgs/illustration/escritorio_michi_final_0003_Booba.png";
import headphones from "../../assets/imgs/illustration/escritorio_michi_final_0002_Headphones.png";

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
		return (
			<div key={capa.id} alt={capa.alt} className={capa.class}></div>
		);
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
}

const CoHero = () => {
	return (
		<div className="capa-0027">
			<CoCapaIllu capa={capas} />
			<CoBotones boton={botones} />
		</div>
	);
};

export default CoHero;