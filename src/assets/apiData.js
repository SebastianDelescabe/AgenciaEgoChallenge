const models = [
    {
        "id": 1,
        "name": "Corolla",
        "segment": "Sedan",
        "year": 2021,
        "price": 3817000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png"
    },
    {
        "id": 2,
        "name": "Camry",
        "segment": "Sedan",
        "year": 2021,
        "price": 4250400.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"
    },
    {
        "id": 3,
        "name": "Yaris Hatchback",
        "segment": "Hatchback",
        "year": 2021,
        "price": 2585000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png"
    },
    {
        "id": 4,
        "name": "Etios",
        "segment": "Hatchback",
        "year": 2021,
        "price": 1731000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
    },
    {
        "id": 5,
        "name": "Hilux",
        "segment": "Pickups y Comerciales",
        "year": 2021,
        "price": 3410000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
    },
    {
        "id": 6,
        "name": "Hiace Furgón",
        "segment": "Pickups y Comerciales",
        "year": 2021,
        "price": 3645200.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
    },
    {
        "id": 7,
        "name": "Rav4",
        "segment": "SUVs",
        "year": 2021,
        "price": 2960500.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
    },
    {
        "id": 8,
        "name": "SW4",
        "segment": "SUVs",
        "year": 2021,
        "price": 6892000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
    }
]

const byId = [
    {
        "id": 1,
        "name": "Corolla",
        "segment": "Sedan",
        "year": 2021,
        "price": 3817000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png",
        "title": "Nuevo Corolla, siempre adelante.",
        "description": "<p data-block-key=\"hnweq\"> La nueva generación del sedán más vendido estrena diseño, plataforma y mecánica. </p>",
        "model_features": [
            {
                "name": "Llantas de aleación de 17\"",
                "description": "Disponible en versión SEG 2.0 CVT",
                "image": "http://challenge.agenciaego.tech/media/images/cdCq1UKdgX.width-270.jpg"
            },
            {
                "name": "Faros traseros full LED",
                "description": "Mayor claridad y seguridad que con faros tradicionales",
                "image": "http://challenge.agenciaego.tech/media/images/0vH4SPiM7n.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Nuevo Motor 2.0L Dynamic Force",
                "content": "<p data-block-key=\"3gmwv\">El nuevo motor 2.0 L brinda un excelente equilibrio entre bajo consumo y performance con una potencia de 170 CV y 200 NM.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/F7Li21RQPK.width-560.jpg"
            },
            {
                "title": "Nueva Transmisión",
                "content": "<p data-block-key=\"3gmwv\">Direct shift CVT (2.0 L): de 10 velocidades, que otorgan una aceleración directa por medio de un engranaje mecánico adicional para bajas velocidades. Incorpora modo secuencial, levas al volante y modo de conducción SPORT.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/Suyrw07kW7.width-560.jpg"
            }
        ]
    }, {
        "id": 2,
        "name": "Camry",
        "segment": "Sedan",
        "year": 2021,
        "price": 4250400.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png",
        "title": "Camry evolucionó para ser mas irresistible que nunca.",
        "description": "<p data-block-key=\"lyez1\">El sedán insignia, con tecnología de punta</p>",
        "model_features": [
            {
                "name": "Sistema de audio con pantalla de 9', Android Auto y Apple CarPlay*",
                "description": "*Disponible solo por USB",
                "image": "http://challenge.agenciaego.tech/media/images/VFP1yTW8dK.width-270.jpg"
            },
            {
                "name": "Volante revestido de cuero con levas al volante",
                "description": "Elegancia y funcionalidad",
                "image": "http://challenge.agenciaego.tech/media/images/6Z0xHGt3La.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Tecnología Híbrida",
                "content": "<p data-block-key=\"xsh8d\">El sistema híbrido auto recargable de Toyota Camry está compuesto por dos motores (naftero + eléctrico) que trabajan conjuntamente, otorgando una potencia total 218 CV. La batería se regenera automáticamente cuando el vehículo desacelera o frena, sin necesidad de enchufarse a una fuente de energía externa.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/XwyuHXC71T.width-560.jpg"
            },
            {
                "title": "Llantas de aleación de 18\"",
                "content": "<p data-block-key=\"xsh8d\">Las llantas de 18” permiten destacar un perfil más deportivo y audaz, acentuando aún más su nuevo diseño exterior.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/WtRnIzPmxU.width-560.jpg"
            },
            {
                "title": "Sofisticado diseño interior",
                "content": "<p data-block-key=\"xsh8d\">Renovado interior con asientos tapizados en cuero negro. Cuenta con una pantalla táctil de 9&quot;, con GPS y un display de información múltiple de 7&quot;.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/WQyBEg7O5S.width-560.jpg"
            }
        ]
    }, {
        "id": 3,
        "name": "Yaris Hatchback",
        "segment": "Hatchback",
        "year": 2021,
        "price": 2585000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png",
        "title": "Despierta nuevas sensaciones",
        "description": "<p data-block-key=\"53w6r\">El auto ideal para arrancar una nueva aventura</p>",
        "model_features": [
            {
                "name": "Display de información múltiple de 4,2\"",
                "description": "Disponible en versión S",
                "image": "http://challenge.agenciaego.tech/media/images/M2WX8F9oyO.width-270.jpg"
            },
            {
                "name": "Climatizador Automático Digital",
                "description": "A partir de versiones XLS",
                "image": "http://challenge.agenciaego.tech/media/images/ZZ9rjT7IHT.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Techo solar eléctrico",
                "content": "<p data-block-key=\"vjylw\">El placer de manejar un Yaris se potencia con el techo solar eléctrico, que provee una sensación de libertad y amplitud.*</p>",
                "image": "http://challenge.agenciaego.tech/media/images/35Sd9TMbeo.width-560.jpg"
            },
            {
                "title": "Smart Entry & Push Start Button",
                "content": "<p data-block-key=\"vjylw\">La apertura y cierre de puertas “Smart Entry System” y el arranque sin llave &quot;Push Start Button&quot; brindan comodidad desde el primer momento.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/uHeVBS3NWP.width-560.jpg"
            }
        ]
    }, {
        "id": 4,
        "name": "Etios",
        "segment": "Hatchback",
        "year": 2021,
        "price": 1731000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png",
        "title": "Tu primer Toyota, mejor que nunca",
        "description": "<p data-block-key=\"ko3j6\">Subite a la experiencia Toyota de la mano del Etios</p>",
        "model_features": [
            {
                "name": "Espejos exteriores con luz de giro incorporada y regulacion electrica",
                "description": "Disponible en versiones XLS",
                "image": "http://challenge.agenciaego.tech/media/images/ODcGapc4KH.width-270.jpg"
            },
            {
                "name": "Guantera con refrigeración",
                "description": "Hasta 16 grados",
                "image": "http://challenge.agenciaego.tech/media/images/Ro7VybbmBI.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Seguridad",
                "content": "<p data-block-key=\"wblx6\">Etios incorpora control de estabilidad (VSC) y control de tracción (TRC) en todas sus versiones, que aportan tranquilidad y seguridad a todos los pasajeros.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/GINndapLdB.width-560.jpg"
            },
            {
                "title": "Diseño exterior",
                "content": "<p data-block-key=\"wblx6\">La versión XLS ofrece llantas de aleación diamantadas y faros oscurecidos que le dan una impronta más agresiva y robusta.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/yP5E513VCZ.width-560.jpg"
            }
        ]
    }, {
        "id": 5,
        "name": "Hilux",
        "segment": "Pickups y Comerciales",
        "year": 2021,
        "price": 3410000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png",
        "title": "La herramienta más confiable para tu trabajo",
        "description": "<p data-block-key=\"bfzd0\">Potencia y tecnología para todos los caminos</p>",
        "model_features": [
            {
                "name": "Cámara de retroceso",
                "description": "Imagen versión SR",
                "image": "http://challenge.agenciaego.tech/media/images/W9abtwyUTL.width-270.png"
            },
            {
                "name": "Bloqueo diferencial trasero",
                "description": "Para versiones 4x4",
                "image": "http://challenge.agenciaego.tech/media/images/mTXXFru1Fr.width-270.png"
            }
        ],
        "model_highlights": [
            {
                "title": "Bloqueo de diferencial trasero",
                "content": "<p data-block-key=\"p41wq\">Para maximizar la capacidad off-road, el bloqueo de diferencial trasero, disponible en todas las versiones 4x4, permite distribuir en partes iguales el torque para que las ruedas posteriores giren a la misma velocidad sin tener en cuenta las diferencias de tracción.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/ZEazsQ2KUD.width-560.png"
            },
            {
                "title": "Control de tracción activo (A-TRC)",
                "content": "<p data-block-key=\"p41wq\">Las versiones 4x4 cuentan con A-TRC y el sistema funciona cuando el  vehículo se encuentra con la tracción 4x4 activada. El A-TRC aplica fuerza de frenado para limitar el giro de las ruedas que pierden tracción, permitiendo un óptimo avance en terrenos resbaladizos.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/9cmLMlF4KS.width-560.jpg"
            }
        ]
    }, {
        "id": 6,
        "name": "Hiace Furgón",
        "segment": "Pickups y Comerciales",
        "year": 2021,
        "price": 3645200.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png",
        "title": "Descubrí una forma Toyota de trabajar",
        "description": "<p data-block-key=\"473h5\">El mejor utilitario para facilitar tu trabajo</p>",
        "model_features": [
            {
                "name": "Consola con bandeja superior",
                "description": "Práctica y funcional",
                "image": "http://challenge.agenciaego.tech/media/images/2llCcpBnsw.width-270.jpg"
            },
            {
                "name": "Bandeja central con posavasos",
                "description": "En furgón",
                "image": "http://challenge.agenciaego.tech/media/images/aXcFsIVB3h.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Cómoda",
                "content": "<p data-block-key=\"rawbb\">Redefinimos la forma de trabajar. Gracias a su caja automática de 6 marchas, completo pack eléctrico, sistema de manos libres y butacas ergonómicas, tu trabajo ya no es una carga más.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/gsqyZAclLV.width-560.jpg"
            },
            {
                "title": "Práctica",
                "content": "<p data-block-key=\"rawbb\">Toyota Hiace ofrece dos tamaños, para que puedas elegir cuál se adapta más a tu necesidad. La versión L1H1 de 6,2 m3, con dimensiones exteriores contenidas es ideal para aplicaciones urbanas o de accesos subterráneos. La L2H2 de 9,3m3, se adapta cómodamente al manipuleo de cargas palletizadas, contando con doble puerta lateral, un aspecto destacable en su segmento.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/8e6NfHJ4LC.width-560.jpg"
            }
        ]
    }, {
        "id": 7,
        "name": "Rav4",
        "segment": "SUVs",
        "year": 2021,
        "price": 2960500.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png",
        "title": "Más tecnología, más experiencias",
        "description": "<p data-block-key=\"v0wg7\">Nuevo sistema de tracción integral para llegar a todos lados</p>",
        "model_features": [
            {
                "name": "Sistema de apertura de baul \"manos libres\"",
                "description": "En versión híbrida",
                "image": "http://challenge.agenciaego.tech/media/images/KdezhOXP7w.width-270.jpg"
            },
            {
                "name": "Sistema de encendido por botón",
                "description": "Smart Start",
                "image": "http://challenge.agenciaego.tech/media/images/kOjOQ6IX0Z.width-270.jpg"
            }
        ],
        "model_highlights": [
            {
                "title": "Tecnología Híbrida",
                "content": "<p data-block-key=\"j8no5\">El nuevo sistema híbrido auto recargable de Toyota RAV4 está compuesto por dos motores (naftero + eléctrico) que trabajan conjuntamente, otorgando una potencia total de 222 CV. La batería se regenera automáticamente cuando el vehículo desacelera o frena, sin necesidad de enchufarse a una fuente de energía externa.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/lezyIILlcF.width-560.jpg"
            },
            {
                "title": "Transmisión y modos de conducción",
                "content": "<p data-block-key=\"j8no5\">La nueva RAV4 incorpora un nuevo tipo de transmisión automática eCVT , continuamente variable. Además, cuentan con levas al volante y 4 modos de conducción: normal, ecológico, deportivo y 100% eléctrico , haciéndolo un vehículo versátil y preparado para cualquier tipo de conducción.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/HHhSlXGa6s.width-560.jpg"
            }
        ]
    }, {
        "id": 8,
        "name": "SW4",
        "segment": "SUVs",
        "year": 2021,
        "price": 6892000.0,
        "thumbnail": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
        "photo": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png",
        "title": "Más experiencia, para llegar más allá",
        "description": "<p data-block-key=\"42kvw\">Una todo terreno con la calidad de siempre</p>",
        "model_features": [
            {
                "name": "Tapizado de cuero natural",
                "description": "Versiones SRX",
                "image": "http://challenge.agenciaego.tech/media/images/4k1gxVgZHG.width-270.png"
            },
            {
                "name": "Sistema de audio premium",
                "description": "Partner JBL",
                "image": "http://challenge.agenciaego.tech/media/images/RwmB40Va2z.width-270.png"
            }
        ],
        "model_highlights": [
            {
                "title": "Nuevo diseño exterior",
                "content": "<p data-block-key=\"whd9h\">Nuevo frente con faros Bi-LED y nuevo diseño de paragolpes, que le otorgan una figura más sofisticada y armónica. Su nuevo diseño de llantas de aleación de 18”, disponible en versiones SRX,  le dan más dinamismo a la figura lateral, y los faros de LED traseros completan un estilo más moderno y sofisticado.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/E3BsAjsIbF.width-560.jpg"
            },
            {
                "title": "Display de información",
                "content": "<p data-block-key=\"whd9h\">El display de información múltiple incorpora 3 funciones adicionales, que son el indicador de velocidad digital, el estado del filtro DPF e indicador de posición de las ruedas delanteras.</p>",
                "image": "http://challenge.agenciaego.tech/media/images/jDA2ND9Ns3.width-560.png"
            }
        ]
    }
]