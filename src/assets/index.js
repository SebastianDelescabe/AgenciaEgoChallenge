import corolla from '../assets/png/cars/corolla.png';
import camry from '../assets/png/cars/camry.png';
import yaris from '../assets/png/cars/yaris.png';
import etios from '../assets/png/cars/etios.png';
import hilux from '../assets/png/cars/hilux.png';
import hiluxSport from '../assets/png/cars/hiluxSport.png';
import etiosSedan from '../assets/png/cars/etios-sedan.png';
import hiace from '../assets/png/cars/hiace.png';
import rav4 from '../assets/png/cars/rav4.png';
import sw4 from '../assets/png/cars/sw4.png';
import gray from './svg/gray.svg';
import fill from './svg/fill.svg';
import colapseArrow from './svg/colapseArrow.svg';
import dropDowArrow from './svg/dropDowArrow.svg';
import buttonDetail from './png/button-detail.png';

const models = [
    {
        id: 1,
        name: "Corolla",
        segment: "Sedan",
        year: 2024,
        price: 20711000,
        thumbnail: corolla,
        photo: "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png"
    },
    {
        id: 2,
        name: "GR86",
        segment: "Sedan",
        year: 2023,
        price: 124250400,
        thumbnail: camry,
        photo: "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"
    },
    {
        id: 3,
        name: "Yaris Hatchback",
        segment: "Hatchback",
        year: 2021,
        price: 13850000,
        thumbnail: yaris,
        photo: "https://media.toyota.com.ar/bd44e639-6aa5-4a83-a5e7-bcf1ff1aa721.png"
    },
    {
        id: 4,
        name: "Etios",
        segment: "Hatchback",
        year: 2020,
        price: 10310000,
        thumbnail: etios,
        photo: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
    },
    {
        id: 9,
        name: "Etios Sedan",
        segment: "Sedan",
        year: 2024,
        price: 15310000,
        thumbnail: etiosSedan,
        photo: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
    },
    {
        id: 5,
        name: "Hilux",
        segment: "Pickups y Comerciales",
        year: 2023,
        price: 50117000,
        thumbnail: hilux,
        photo: "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
    },
    {
        id: 6,
        name: "Hiace",
        segment: "Pickups y Comerciales",
        year: 2021,
        price: 96452000,
        thumbnail: hiace,
        photo: "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
    },
    {
        id: 7,
        name: "Rav4",
        segment: "SUVs",
        year: 2024,
        price: 56050000,
        thumbnail: rav4,
        photo: "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
    },
    {
        id: 8,
        name: "Sw4",
        segment: "SUVs",
        year: 2021,
        price: 68920000,
        thumbnail: sw4,
        photo: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
    },
    {
        id: 10,
        name: "Hilux GR-Sport",
        segment: "Pickups y Comerciales",
        year: 2024,
        price: 105920000,
        thumbnail: hiluxSport,
        photo: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
    }
];

const byId = [
    {
        id: 1,
        name: "Corolla 2024",
        segment: "Sedan",
        year: 2024,
        price: 20711000,
        thumbnail: "https://media.toyota.com.ar/142ce344-531f-4669-82de-9d375cff948d.png",
        photo: "https://media.toyota.com.ar/142ce344-531f-4669-82de-9d375cff948d.png",
        title: "Nuevo Corolla, siempre adelante.",
        description: "<p data-block-key=\"hnweq\"> La nueva generación del sedán más vendido estrena diseño, plataforma y mecánica. </p>",
        model_features: [
            {
                name: "Confiabilidad y Calidad",
                description: "La plataforma GA-C basada en la filosofía TNGA (Toyota New Global Architecture) mejora diferentes aspectos del vehículo",
                image: "https://media.toyota.com.ar/3c8e9a0e-9d5a-41de-9aa6-7fd5dc5b1026.jpeg"
            },
            {
                name: "Toyota safety sense *",
                description: "Todas las versiones de Corolla están equipadas con Toyota Safety Sense*: un paquete de seguridad activa",
                image: "https://media.toyota.com.ar/beb7ae07-d976-4560-9fc3-8785b20fb149.jpeg"
            },
            {
                name: "Faros traseros full LED",
                description: "Todas las versiones están equipadas con el motor 2.0L Dynamic Force, que brinda un excelente equilibrio entre bajo consumo y excelencia",
                image: "https://media.toyota.com.ar/861796f3-4ee6-4942-8920-e2d4c1c9bde9.jpeg"
            },
        ],
        model_highlights: [
            {
                title: "Tecnología",
                content: "<p data-block-key=\"3gmwv\">Todas las versiones cuentan con equipo multimedia con una pantalla de 9” y conectividad inalámbrica para Android Auto y Apple CarPlay.* Cargador inalámbrico para smartphones que soportan carga inalámbrica* en la versión SEG..</p>",
                image: "https://media.toyota.com.ar/18291811-7290-4297-96d4-4e9a6652e663.png"
            },
            {
                title: "Confort",
                content: "<p data-block-key=\"3gmwv\">La versión SEG incorpora un tablero de información múltiple full digital de 12,3” pulgadas, mientras que versiones XEI y XLI cuentan con un display de información de 7”.  Además, las versiones SEG y XEI están equipadas con salidas de aire acondicionado y dos puertos USB tipo “C” en las plazas traseras.</p>",
                image: "https://media.toyota.com.ar/b30b54d9-10d6-4528-b5d5-d8b90222c4a7.jpeg"
            },
            {
                title: "Diseño",
                content: "<p data-block-key=\"3gmwv\">Las versiones SEG y XEI presentan un nuevo diseño de la parrilla delantera tipo panal de abeja que le aporta más dinamismo y modernidad. Además se complementa con faros delanteros Bi-LED con regulación en altura. La versión SEG incorpora un nuevo diseño en sus llantas de 17.</p>",
                image: "https://media.toyota.com.ar/b30b54d9-10d6-4528-b5d5-d8b90222c4a7.jpeg"
            }
        ]
    },
    {
        id: 2,
        name: "GR86 2023",
        segment: "Sedan",
        year: 2021,
        price: 4250400,
        thumbnail: "https://media.toyota.com.ar/b9a269d2-646d-4c8c-b113-39a35738efc4.png",
        photo: "https://media.toyota.com.ar/b9a269d2-646d-4c8c-b113-39a35738efc4.png",
        title: "TOYOTA GAZOO RACING, Pushin the limits for better",
        description: "<p data-block-key=\"lyez1\">Toyota Gazoo Racing representa el compromiso de Toyota de superar todos los límites para crear vehículos cada vez mejores.</p>",
        model_features: [
            {
                name: "Compacto y Ligero",
                description: "La respuesta del acelerador, los cambios de marcha y el tacto de embrague conjugados con una estructura más ligera",
                image: "https://media.toyota.com.ar/b2f66ee8-959c-4621-b641-8fc910f3108b.jpeg"
            },
            {
                name: "Equilibrio Perfecto",
                description: "GR86 ofrece un experiencia unica de conducción, con una influencia directa del recorrido de Gazoo Racing en competición.",
                image: "https://media.toyota.com.ar/cd4f151d-3b7c-4d17-81d6-925107b12027.jpeg"
            },
            {
                name: "Diversión de manejo",
                description: "GR86 define a la perfección el objetivo del mismo. Un desarrollo centrado en la diversión del conductor",
                image: "https://media.toyota.com.ar/a449c482-8212-4c7f-b011-26a6bc14f060.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Motor FA 24 4 Cilindros",
                content: "<p data-block-key=\"xsh8d\">El nuevo motor de GR86 aumenta su nivel de de potencia hasta los 237 cv así como el torque máximo, que ahora alcanza los 250Nm.</p>",
                image: "https://media.toyota.com.ar/b8477f9c-cc1b-43f5-8663-90bff2d9f280.jpeg"
            },
            {
                title: "Reducción de peso y altura",
                content: "<p data-block-key=\"xsh8d\">Renovado interior con asientos tapizados en cuero negro. Cuenta con una pantalla táctil de 9&quot;, con GPS y un display de información múltiple de 7&quot;.</p>",
                image: "https://media.toyota.com.ar/4f641923-654f-4328-973f-d9e443b25227.jpeg"
            },
            {
                title: "Exterior Deportivo",
                content: "<p data-block-key=\"xsh8d\">Llantas de aleación de 18 Faros delanteros full LED Doble salida de escape..</p>",
                image: "https://media.toyota.com.ar/af3d832c-8286-4f6c-9278-f1f23c7c9684.jpeg"
            }
        ]
    },
    {
        id: 3,
        name: "Yaris Hatchback",
        segment: "Hatchback",
        year: 2021,
        price: 2585000,
        thumbnail: "https://media.toyota.com.ar/64c13212-269e-47a3-a8b8-f11224db9ac9.png",
        photo: "https://media.toyota.com.ar/64c13212-269e-47a3-a8b8-f11224db9ac9.png",
        title: "Despierta nuevas sensaciones",
        description: "<p data-block-key=\"53w6r\">El auto ideal para arrancar una nueva aventura</p>",
        model_features: [
            {
                name: "Display de información múltiple de 4,2",
                description: "Audio con pantalla táctil LCD de 7” con conectividad Apple Car Play® & Android Auto",
                image: "https://media.toyota.com.ar/c375ec50-2aa7-42cb-b6f5-5e874d25740e.jpeg"
            },
            {
                name: "Toyota safety sense *",
                description: "Yaris ofrece, en las versiones XLS Pack y S, Sistema de Pre-colisión frontal (PCS)* y Sistema de alerta de cambio de carril (LDA)",
                image: "https://media.toyota.com.ar/beb7ae07-d976-4560-9fc3-8785b20fb149.jpeg"
            },
            {
                name: "Climatizador Automático Digital",
                description: "Equipado con climatizador automático digital, cámara de estacionamiento y control de velocidad crucero.",
                image: "https://media.toyota.com.ar/85e4554f-5cc4-40bd-a831-de93290ad711.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Techo solar eléctrico",
                content: "<p data-block-key=\"vjylw\">El placer de manejar un Yaris se potencia con el techo solar eléctrico, que provee una sensación de libertad y amplitud.*</p>",
                image: "https://media.toyota.com.ar/0cfa6cc7-b8d9-475a-8449-df1ad1ccd86c.png"
            },
            {
                title: "Smart Entry & Push Start Button",
                content: "<p data-block-key=\"vjylw\">Diseño frontal con ópticas delanteras LED con regulación en altura, disponible en la versión S. A su vez, al igual que la versión XLS Pack, cuenta con llantas de aleación de 16”..</p>",
                image: "https://media.toyota.com.ar/c54324c8-5ca6-42c8-9903-5e4a7e12f0bf.png"
            },
            {
                title: "Seguridad y Protección",
                content: "<p data-block-key=\"vjylw\">7 airbags: frontales (x2), laterales (x2), de cortina (x2) y de rodilla (conductor). El equipamiento se completa con control de estabilidad, de tracción y asistente de arranque en pendiente.</p>",
                image: "https://media.toyota.com.ar/11f13436-ffb3-4a47-bb12-2132885bd9b6.jpeg"
            }
        ]
    },
    {
        id: 4,
        name: "Etios 2021",
        segment: "Hatchback",
        year: 2021,
        price: 1731000,
        thumbnail: "https://media.toyota.com.ar/16dfefb9-e905-4656-8084-703afe4bcc76.png",
        photo: "https://media.toyota.com.ar/16dfefb9-e905-4656-8084-703afe4bcc76.png",
        title: "Tu primer Toyota, mejor que nunca",
        description: "<p data-block-key=\"ko3j6\">Subite a la experiencia Toyota de la mano del Etios</p>",
        model_features: [
            {
                name: "Diseño Exterior",
                description: "La versión XLS Pack ofrece llantas de aleación diamantadas y faros oscurecidos que le dan una impronta más agresiva y robusta.",
                image: "https://media.toyota.com.ar/8d3300c2-6f31-4439-801c-c10b5e7b9749.jpeg"
            },
            {
                name: "Guantera con refrigeración",
                description: "Espejos exteriores con luz de giro incorporada y regulación eléctrica. Guantera con función de refrigeración. Cámara de estacionamiento. Disponible en versiones XLS Pack.",
                image: "https://media.toyota.com.ar/3a3d1894-8068-418e-8e99-130443c6fcff.jpeg"
            },
            {
                name: "Seguridad",
                description: "Etios ofrece control de estabilidad (VSC) y control de tracción (TRC) en todas sus versiones, que aportan tranquilidad y seguridad",
                image: "https://media.toyota.com.ar/a66b3acc-3718-40a7-89bb-a3b2921daed9.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Performance",
                content: "<p data-block-key=\"wblx6\">Caja Manual de 6 marchas. Airbag conductor y acompañante. Transmisión automática de 4 marchas. Disponible en versiones XLS Pack AT. Dirección asistida electrónicamente.</p>",
                image: "https://media.toyota.com.ar/cd389d67-6a34-459e-849e-a6c14fbcfd64.jpeg"
            },
            {
                title: "Confort y Tecnología",
                content: "<p data-block-key=\"wblx6\">Audio con pantalla táctil de 7” y conectividad: Apple CarPlay® y Android Auto®. Disponible en versiones XLS Pack. Disponible solo por conexión USB.</p>",
                image: "https://media.toyota.com.ar/af000a22-a750-4efa-85b8-0a1d6bb945de.jpeg"
            }
        ]
    },
    {
        id: 5,
        name: "Hilux 2024",
        segment: "Pickups y Comerciales",
        year: 2021,
        price: 3410000,
        thumbnail: "https://media.toyota.com.ar/1f08b8ee-4588-415d-a8be-2159926cca61.png",
        photo: "https://media.toyota.com.ar/1f08b8ee-4588-415d-a8be-2159926cca61.png",
        title: "La herramienta más confiable para tu trabajo",
        description: "<p data-block-key=\"bfzd0\">Potencia y tecnología para todos los caminos</p>",
        model_features: [
            {
                name: "Diseño Exterior",
                description: "Se destacan los faros delanteros Bi - LED, luces diurnas (DRL) y antiniebla de LED junto con las llantas de aleación de 17” y 18”.",
                image: "https://media.toyota.com.ar/8a9e24e3-e335-4de0-b693-9330a1770834.png"
            },
            {
                name: "Conectividad",
                description: "Todas las versiones de Hilux cuentan pantalla táctil de 9” con USB, Bluetooth® y conectividad inalámbrica Android Auto® y Apple CarPlay",
                image: "https://media.toyota.com.ar/ba84c8c0-0020-4af9-8037-c821e0e7171a.png"
            },
            {
                name: "Confort Interior",
                description: "Las versiones SRX cuentan con tapizado de cuero natural y ecológico con función de ventilación en butacas delanteras.",
                image: "https://media.toyota.com.ar/e00a89c0-5cc7-432a-9c0e-bc6ea52186ca.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Performance",
                content: "<p data-block-key=\"p41wq\">Todas las Hilux viene equipadas con Asistente de arranque en pendientes (HAC), que evita el deslizamiento involuntario y asegura un arranque suave y controlado en pendiente. Además, las versiones 4x4 cuentan con A-TRC que permite un óptimo avance en terrenos resbaladizos.</p>",
                image: "https://media.toyota.com.ar/16c227a3-800c-4104-a5d5-473047691d39.png"
            },
            {
                title: "Bloqueo de diferencial trasero",
                content: "<p data-block-key=\"p41wq\">Para maximizar la capacidad off-road, el bloqueo de diferencial trasero, disponible en todas las versiones 4x4, permite distribuir en partes iguales el torque para que las ruedas posteriores giren a la misma velocidad sin tener en cuenta las diferencias de tracción.</p>",
                image: "https://media.toyota.com.ar/30ab5fbb-99ef-43b6-a9f6-6db8484b4081.jpeg"
            },
            {
                title: "Control de tracción activo (A-TRC)",
                content: "<p data-block-key=\"p41wq\">Las versiones 4x4 cuentan con A-TRC y el sistema funciona cuando el  vehículo se encuentra con la tracción 4x4 activada. El A-TRC aplica fuerza de frenado para limitar el giro de las ruedas que pierden tracción, permitiendo un óptimo avance en terrenos resbaladizos.</p>",
                image: "https://media.toyota.com.ar/f346e3c1-1969-448b-9995-d64de3ff20b9.jpeg"
            },
        ]
    },
    {
        id: 6,
        name: "Hiace Furgón",
        segment: "Pickups y Comerciales",
        year: 2023,
        price: 13645200,
        thumbnail: "https://media.toyota.com.ar/7ac0cebf-04f4-4260-b8c6-8fcc2e245712.png",
        photo: "https://media.toyota.com.ar/7ac0cebf-04f4-4260-b8c6-8fcc2e245712.png",
        title: "Descubrí una forma Toyota de trabajar",
        description: "<p data-block-key=\"473h5\">El mejor utilitario para facilitar tu trabajo</p>",
        model_features: [
            {
                name: "Comoda y Practica",
                description: "Hiace ofrece dos tamaños para que puedas elegir el que más se adapte a tu necesidad. La versión L1H1",
                image: "https://media.toyota.com.ar/0184289c-8037-4b97-b2c1-7842b64a44b4.jpeg"
            },
            {
                name: "Tracción",
                description: "Redefinimos la forma de trabajar. Gracias a su caja automática de 6 marchas, completo pack eléctrico, sistema de manos libres",
                image: "https://media.toyota.com.ar/61c5a927-83a5-46ae-afa3-1776a408884e.jpeg"
            },
            {
                name: "Segura",
                description: "Con Toyota Hiace podés sentirte seguro, y enfocar tus preocupaciones en el trabajo. La nueva plataforma de alta resistencia",
                image: "https://media.toyota.com.ar/b2731401-0108-402c-8625-f5f64946f758.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Cómoda",
                content: "<p data-block-key=\"rawbb\">Todas las versiones están equipadas con audio con CD, MP3, USB, Bluethooth y manos libres y volante multifunción con control de audio y teléfono. Además cuentan con una bandeja central con posavasos y levanta cristales eléctricos. La versión L2H2 incorpora una consola con bandeja superior.</p>",
                image: "https://media.toyota.com.ar/8a8861c8-bc62-48f6-afa6-c254971b86da.jpeg"
            },
            {
                title: "Práctica",
                content: "<p data-block-key=\"rawbb\">Toyota Hiace ofrece dos tamaños, para que puedas elegir cuál se adapta más a tu necesidad. La versión L1H1 de 6,2 m3, con dimensiones exteriores contenidas es ideal para aplicaciones urbanas o de accesos subterráneos. La L2H2 de 9,3m3, se adapta cómodamente al manipuleo de cargas palletizadas, contando con doble puerta lateral, un aspecto destacable en su segmento.</p>",
                image: "https://media.toyota.com.ar/e08c1bd6-ecf7-4a84-8913-cc1c34e285b6.jpeg"
            }
        ]
    },
    {
        id: 7,
        name: "Rav4 2024",
        segment: "SUVs",
        year: 2024,
        price: 96050000,
        thumbnail: "https://media.toyota.com.ar/ac8c26b2-c702-46c4-b9f7-7dde1c534e59.png",
        photo: "https://media.toyota.com.ar/ac8c26b2-c702-46c4-b9f7-7dde1c534e59.png",
        title: "Más tecnología, más experiencias",
        description: "<p data-block-key=\"v0wg7\">Nuevo sistema de tracción integral para llegar a todos lados</p>",
        model_features: [
            {
                name: "Tecnología híbrida",
                description: "El nuevo sistema híbrido auto recargable de Toyota RAV4 está compuesto por dos motores (naftero + eléctrico)",
                image: "https://media.toyota.com.ar/1f218997-c974-4339-9e99-d7ba70b99faf.jpeg"
            },
            {
                name: "Toyota safety sense *",
                description: "Compuesto por el Sistema de pre - colisión frontal (PCS), Control de velocidad cruceso adaptativo (ACC)",
                image: "https://media.toyota.com.ar/beb7ae07-d976-4560-9fc3-8785b20fb149.jpeg"
            },
            {
                name: "Confort",
                description: "El diseño interior de la RAV4 incorpora un gran nivel de equipamiento de confort y tecnología: audio con pantalla táctil LCD 8",
                image: "https://media.toyota.com.ar/63adc927-a3e3-470b-8d1a-59537d6f6020.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Tecnología Híbrida",
                content: "<p data-block-key=\"j8no5\">El nuevo sistema híbrido auto recargable de Toyota RAV4 está compuesto por dos motores (naftero + eléctrico) que trabajan conjuntamente, otorgando una potencia total de 222 CV. La batería se regenera automáticamente cuando el vehículo desacelera o frena, sin necesidad de enchufarse a una fuente de energía externa.</p>",
                image: "https://media.toyota.com.ar/ced4b09b-6532-4403-ab4c-0c50a8f562c7.jpeg"
            },
            {
                title: "Diseño Exterior",
                content: "<p data-block-key=\"j8no5\">Se destacan las llantas de aleación de 18, los faros delanteros Bi-LED con nivelación automática en altura, los faros traseros de LED y el techo solar panorámico con apertura eléctrica.</p>",
                image: "https://media.toyota.com.ar/b4cdf7f2-7a91-4b52-86fa-be0e33fe5ddd.png"
            }
        ]
    },
    {
        id: 8,
        name: "SW4 2024",
        segment: "SUVs",
        year: 2024,
        price: 689200000,
        thumbnail: "https://media.toyota.com.ar/8dcc3815-190b-4dc4-84d2-9c49c1c0aebe.png",
        photo: "https://media.toyota.com.ar/8dcc3815-190b-4dc4-84d2-9c49c1c0aebe.png",
        title: "Más experiencia, para llegar más allá",
        description: "<p data-block-key=\"42kvw\">Una todo terreno con la calidad de siempre</p>",
        model_features: [
            {
                name: "Performance",
                description: "La nueva suspensión posee amortiguadores telescópicos monotubo GR que brindan una puesta a punto deportiva",
                image: "https://media.toyota.com.ar/cdcd769f-0f59-4a2a-a2e3-81363a71db4d.jpeg"
            },
            {
                name: "Toyota safety sense *",
                description: "La nueva SW4 GR-S está equipada con Toyota Safety Sense* que incluye Sistema de Pre-colisión frontal (PCS",
                image: "https://media.toyota.com.ar/beb7ae07-d976-4560-9fc3-8785b20fb149.jpeg"
            },
            {
                name: "Detalles Exclusivos",
                description: "Display de información múltiple con pantalla a color de 4,2 (TFT) con animación GRLlave de diseño exclusivo Gazoo Racing",
                image: "https://media.toyota.com.ar/28300511-49a2-4a05-9d1d-c8b1f75e1a23.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Nuevo diseño exterior",
                content: "<p data-block-key=\"whd9h\">Nuevo frente con faros Bi-LED y nuevo diseño de paragolpes, que le otorgan una figura más sofisticada y armónica. Su nuevo diseño de llantas de aleación de 18”, disponible en versiones SRX,  le dan más dinamismo a la figura lateral, y los faros de LED traseros completan un estilo más moderno y sofisticado.</p>",
                image: "https://media.toyota.com.ar/959ea8ef-40b9-4672-b0ee-d835cb0b5fcc.jpeg"
            },
            {
                title: "Display de información",
                content: "<p data-block-key=\"whd9h\">El display de información múltiple incorpora 3 funciones adicionales, que son el indicador de velocidad digital, el estado del filtro DPF e indicador de posición de las ruedas delanteras.</p>",
                image: "https://media.toyota.com.ar/2f4abd9b-28a4-467a-ad89-0b8260431dda.jpeg"
            },
            {
                title: "Diseño Interior",
                content: "<p data-block-key=\"whd9h\">Esta nueva versión incorpora tapizado de cuero combinado con Ultrasuede y detalles en rojo creando un interior deportivo, lujoso y confortable. Posee pedalera deportiva de aluminio y se destaca también el volante forrado en cuero natural microperforado de diseño GR con regulación en altura y profundidad.</p> ",
                image: "https://media.toyota.com.ar/cb103dfb-1341-436a-ad94-ff4509357928.jpeg"
            }
        ]
    },
    {
        id: 9,
        name: "Etios Sedan 2024",
        segment: "Sedan",
        year: 2024,
        price: 15310000,
        thumbnail: "https://media.toyota.com.ar/9ed1ee7c-edf7-4a56-af75-4ea0f59af388.png",
        photo: "https://media.toyota.com.ar/9ed1ee7c-edf7-4a56-af75-4ea0f59af388.png",
        title: "Más experiencia, para llegar más allá",
        description: "<p data-block-key=\"42kvw\">Una todo terreno con la calidad de siempre</p>",
        model_features: [
            {
                name: "Diseño Exterior",
                description: "La versión XLS Pack ofrece llantas de aleación diamantadas y faros oscurecidos que le dan una impronta más agresiva y robusta.",
                image: "https://media.toyota.com.ar/4c3d192a-8cf1-4fd1-a6a5-1157513e233f.jpeg"
            },
            {
                name: "Motor y Trasmisiones",
                description: "El motor con sistema Dual VVT-i (doble sincronización variable de válvulas), se asocia a una transmisión manual de 6 marchas ",
                image: "https://media.toyota.com.ar/65cd32ae-8fb8-42a5-a504-5333a8f46199.jpeg"
            },
            {
                name: "Habitabilidad y Espacio Interior",
                description: "Disfrutá la amplitud y confort de su gran espacio interior. Los 562 litros de su baúl se pueden",
                image: "https://media.toyota.com.ar/8672ddc3-7780-42eb-ad5f-0cb2e2a9af3d.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Nuevo diseño exterior",
                content: "<p data-block-key=\"whd9h\">Nuevo frente con faros Bi-LED y nuevo diseño de paragolpes, que le otorgan una figura más sofisticada y armónica. Su nuevo diseño de llantas de aleación de 18”, disponible en versiones SRX,  le dan más dinamismo a la figura lateral, y los faros de LED traseros completan un estilo más moderno y sofisticado.</p>",
                image: "http://challenge.agenciaego.tech/media/images/E3BsAjsIbF.width-560.jpg"
            },
            {
                title: "Display de información",
                content: "<p data-block-key=\"whd9h\">El display de información múltiple incorpora 3 funciones adicionales, que son el indicador de velocidad digital, el estado del filtro DPF e indicador de posición de las ruedas delanteras.</p>",
                image: "http://challenge.agenciaego.tech/media/images/jDA2ND9Ns3.width-560.png"
            }
        ]
    },
    {
        id: 10,
        name: "Hilux GR-Sport 2024",
        segment: "Pickups y Comerciales",
        year: 2024,
        price: 105920000,
        thumbnail: "	https://media.toyota.com.ar/48b51a36-20df-47d7-8eee-5ebc3846904f.png",
        photo: "	https://media.toyota.com.ar/48b51a36-20df-47d7-8eee-5ebc3846904f.png",
        title: "Más experiencia, para llegar más allá",
        description: "<p data-block-key=\"42kvw\">Una todo terreno con la calidad de siempre</p>",
        model_features: [
            {
                name: "Diseño Exterior",
                description: "Nuevo diseño exterior GAZOO Racing con aumento de trocha +140 mm en la parte delantera y +155 mm",
                image: "https://media.toyota.com.ar/0bbd74e5-d417-45de-80f8-67de25eb4cfe.jpeg"
            },
            {
                name: "Motor y Trasmisiones",
                description: "La nueva Hilux GR-Sport posee un motor 2,8l de 224 CV y 550 Nm* de torque máximo con caja automática de 6 velocidades",
                image: "https://media.toyota.com.ar/d45facce-1e5f-4488-bd9b-50a9deb210eb.jpeg"
            },
            {
                name: "Diseño Interior",
                description: "Esta nueva versión incorpora tapizado de cuero natural y ecológico combinado con Suede sintético perforado",
                image: "https://media.toyota.com.ar/f727ef20-15ba-48a7-a923-0e4601b6daca.jpeg"
            }
        ],
        model_highlights: [
            {
                title: "Diseño",
                content: "<p data-block-key=\"whd9h\">Aumento de trocha +140 mm en la parte delantera y +155 mm en la parte trasera que le brindan una imagen más sólida y robusta. Faros delantero bi-LED de diseño exclusivo Parrilla exclusiva con emblema <strong>TOYOTA</strong> Nuevas llantas de aleación de 17 de diseño exclusivo GR Techo color Bi-tono negro* Estribos laterales y lona de caja Guardabarros extendidos con overfenders exclusivos GR en negro. Barra deportiva aerodinámica Paragolpes GR con canalizador aerodinámico</p>",
                image: "https://media.toyota.com.ar/5da61aa9-bd66-4e1a-8ead-8b6e7d93e035.jpeg"
            },
            {
                title: "Seguridad",
                content: "<p data-block-key=\"whd9h\">Control de velocidad crucero adaptativo (ACC)*** Sistema de alerta de cambio de carril (LDA)*** Sistema de pre-colisión frontal (PCS)*** 7 airbags Control de estabilidad (VSC)  Control de tracción activo (A-TRC)  Candado de seguridad para rueda de auxilio</p>",
                image: "https://media.toyota.com.ar/e4108e46-19b2-43b3-882c-2ac8fff53bbb.png"
            },
            {
                title: "Display de información",
                content: "<p data-block-key=\"whd9h\">Tapizado de cuero natural y ecológico combinado con Suede sintético perforado y detalles en rojo​ Apoyacabezas delanteros con emblema bordado GR Pedalera deportiva de aluminio Volante forrado en cuero natural microperforado con costuras rojas de diseño GR</p>",
                image: "https://media.toyota.com.ar/967ae592-3b9a-441c-869f-a84d03784417.jpeg"
            }
        ]
    }

];

export {
    corolla,
    camry,
    yaris,
    etios,
    hilux,
    hiace,
    rav4,
    sw4,
    gray,
    fill,
    colapseArrow,
    dropDowArrow,
    buttonDetail,
    models,
    byId,
};
