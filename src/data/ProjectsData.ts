export const projects = [
  {
    id: "relogio",
    name: "Relógio Digital – Projeto de Eletrônica Digital (SENAI)",
    description:
      "Este relógio digital foi desenvolvido como parte da disciplina de Eletrônica Digital no curso de Aprendizagem Industrial de Eletricista de Manutenção Eletroeletrônica do SENAI. O projeto teve como objetivo aplicar os conhecimentos teóricos na prática, utilizando circuitos lógicos, displays de 7 segmentos e contadores digitais para mostrar as horas de forma precisa. Com uma montagem funcional e visual limpa, o relógio demonstra o domínio de conceitos como temporização, decodificação e controle de sinais, sendo um exemplo prático de automação e eletrônica aplicada.",
    image: "/projects/post1/relogio1.jpeg",
    media: [
      { type: "image", src: "/projects/post1/relogio4.jpeg" },
      { type: "image", src: "/projects/post1/relogio2.jpeg" },
      { type: "image", src: "/projects/post1/relogio3.jpeg" },
      { type: "video", src: "/projects/post1/relogiov.mp4" },
    ],
    period: "2024 - 2025",
    location: "SENAI - São Paulo",
    team: "Individual",
    technologies: ["Eletrônica Digital", "Circuitos Lógicos", "Displays 7 Segmentos", "Contadores Digitais"],
    github: "https://github.com/nathalye-vitoria/relogio-digital",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/relogio-digital/blob/main/README.md",
    achievements: [
      "Aplicação bem-sucedida de conceitos de eletrônica digital",
      "Montagem funcional com precisão de temporização",
      "Demonstração prática de automação e controle de sinais"
    ],
    linkedCertifications: ["eletronica_basica"],
    linkedSkills: [
      "manutencao_motores",
      "medicoes",
      "documentacao_tecnica"
    ]
  },
  {
    id: "painel",
    name: "Painel de Comando com Partida Direta – Projeto em Máquinas Elétricas II (SENAI)",
    description: `Desenvolvido na disciplina de Máquinas Elétricas II (SENAI), este painel comanda a partida direta de um motor trifásico 220V, ligado em configuração triângulo. O sistema utiliza contatores, disjuntores, relés térmicos e fonte de alimentação, seguindo todas as normas de segurança elétrica.
    O projeto reforçou conceitos de comandos elétricos, integração eletromecânica e práticas de montagem profissional de painéis.
    - Motor trifásico 220V (ligação em triângulo/delta)
    - Partida direta
    - Montagem em placa metálica com canaletas
    - Fiação com identificadores e terminais
    - Aplicação prática de normas NR10 e NR12
    - Dispositivos de proteção 
    - Testes de isolação com megômetro`,
    image: "/projects/post2/painel.jpeg",
    media: [
      { type: "image", src: "/projects/post2/painel.jpeg" },
      { type: "image", src: "/projects/post2/painel1.jpeg" },
      { type: "image", src: "/projects/post2/painel2.jpeg" },
      { type: "image", src: "/projects/post2/painel3.jpeg" },
      { type: "image", src: "/projects/post2/painel4.jpeg" },
      { type: "video", src: "/projects/post2/painelv.mp4" },
    ],
    period: "2025",
    location: "SENAI - São Paulo",
    team: "Equipe de 2 pessoas",
    technologies: ["Comandos Elétricos", "Contatores", "Relés Térmicos", "Normas NR10/NR12", "Motor Trifásico"],
    github: "https://github.com/nathalye-vitoria/painel-comando",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/painel-comando/blob/main/README.md",
    achievements: [
      "Montagem profissional seguindo normas de segurança",
      "Integração bem-sucedida de componentes eletromecânicos",
      "Aplicação prática de NR10 e NR12"
    ],
    linkedCertifications: ["mecatronica"],
    linkedSkills: [
      "manutencao_motores",
      "montagem_paineis",
      "medicoes",
      "nr_10_12",
      "boas_praticas"
    ]
  },
  {
    id: "fonte",
    name: "Fonte de Alimentação Linear 5V – Projeto de Bancada",
    description: `Esta fonte linear foi desenvolvida para fornecer uma tensão de +5V DC estabilizada, adequada para alimentar circuitos digitais, microcontroladores e demais dispositivos que operam em baixa tensão.
    O circuito utiliza um transformador 12V-0-12V / 1A, seguido por um estágio de retificação em ponte, filtragem com capacitor eletrolítico e regulação de tensão através do regulador linear 7805, garantindo uma saída estável e protegida contra sobrecargas térmicas e de corrente. O layout da placa inclui dissipadores de calor para os reguladores, bornes de fácil conexão e LED indicador de funcionamento.
    Características técnicas:
    Tensão de entrada: 12V AC (via transformador)
    Tensão de saída: +5V DC
    Corrente máxima: até 1A
    Regulação com CI 7805
    Filtragem com capacitor de 2200 µF
    Proteção térmica e contra curto-circuito
    Indicador visual de operação (LED)`,
    image: "/projects/post3/fonte1.jpeg",
    media: [
      { type: "image", src: "/projects/post3/fonte.jpeg" },
      { type: "image", src: "/projects/post3/fonte1.jpeg" },
      { type: "image", src: "/projects/post3/fonte2.jpeg" },
      
    ],
    period: "2025",
    location: "Laboratório de Eletrônica",
    team: "Individual",
    technologies: ["Eletrônica Analógica", "Reguladores de Tensão", "Retificação", "Filtragem", "CI 7805"],
    github: "",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/fonte-linear-5v/blob/main/README.md",
    achievements: [
      "integração de Sistemas",
      "Sistema Supervisório",
      "Layout profissional"
    ],
    linkedCertifications: [""],
    linkedSkills: [
      "",
      "",
      ""
    ]
  }
  ,
  {
    id: "",
    name: "Carrinho Eletrônico Controlado Pelo Arduino Uno",
    description: `Este projeto consiste no desenvolvimento de um carrinho eletrônico controlado por Arduino Uno, projetado para realizar movimentos de forma remota por meio de comunicação Bluetooth. O Arduino Uno atua como a unidade central de controle, sendo responsável pelo processamento da lógica de funcionamento e pelo acionamento dos componentes, conforme a programação desenvolvida na IDE do Arduino.
A comunicação sem fio é realizada através do módulo Bluetooth HC-05, permitindo o envio de comandos a partir de um dispositivo externo, como um smartphone. Esses comandos são interpretados pelo microcontrolador e utilizados para controlar o acionamento dos motores DC, responsáveis pela movimentação do carrinho, por meio de um módulo de relés.
O projeto integra conceitos fundamentais de eletrônica, programação e automação, demonstrando o controle de atuadores, comunicação serial sem fio e integração entre hardware e software.
Materiais utilizados:
- Arduino Uno
- Módulo Bluetooth HC-05
- Módulo de 8 relés
- 4 motores DC com rodas
- 2 pilhas de 4,7 V e 9 A`,

    image: "/projects/post4/carriho1.jpg",
    media: [
      { type: "image", src: "/projects/post4/carrinho1.peg" },
      { type: "image", src: "/projects/post4/carrinho2.peg" },
      { type: "image", src: "/projects/post4/carrinho3.peg" },
      { type: "video", src: "/projects/post4/bat-vd.mp4" },
    ],
    period: "2025",
    location: "SENAI SÃO PAULO",
    team: "Individual",
    technologies: ["Programação CNC", "Fresadora CNC", "Usinagem de Alumínio", "CAD/CAM", "Controle Numérico"],
    github: "",
    live: "",
    documentation: "",
    achievements: [
      "Usinagem com precisão milimétrica",
      "Domínio de técnicas de programação CNC",
      "Alta qualidade de acabamento superficial"
    ],
    linkedCertifications: ["developer"],
    linkedSkills: [
      "cnc",
      "torno_fresadora",
      "desenho_cad",
      "documentacao_tecnica",
      "raciocinio_logico"
    ]
  }
  ,

  {
    id: "",
    name: "TCC SENAI",
    description: `Apresento meu Trabalho de Conclusão de Curso, desenvolvido com foco na automação de um processo industrial inspirado na indústria farmacêutica, unindo controle, precisão e tecnologia.

O sistema foi projetado com IHM para criação e seleção de receitas. Integração com mesa cartesiana XYZ para separação dos ingredientes e um processo de mistura acionado por motor trifásico, controlado por inversor de frequência WEG CFW500, com variação de velocidade conforme cada receita. Todo o processo é gerenciado por um CLP Siemens S7-1500 e supervisionado pelo BluePlant. 

Esse projeto é resultado de muito estudo, prática e evolução ao longo da formação.
`,
    image: "/projects/post8/TCCSENAI8.jpg",
    media: [
      { type: "image", src: "/projects/post5/TCCSENAI8.peg" },
      { type: "image", src: "/projects/post5/TCCSENAI4.peg" },
      { type: "image", src: "/projects/post5/TCCSENAI2.peg" },
      { type: "video", src: "/projects/post5/tccsenai.mp4" },
    ],
    period: "2025",
    location: "SENAI SÃO PAULO",
    team: "Nicollas G., Samyra F. , Victor L. , Vinicius R.",
    technologies: ["CLP", "Inversor de Frequência", "IHM", "Supervisório", "Mesa Cartesiana"],
    github: "",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/batman-cnc/blob/main/README.md",
    achievements: [
      "Integração",
      "Automação de Processo Industrial",
      "Supervisório"
    ],
    linkedCertifications: ["developer"],
    linkedSkills: [
      "documentacao_tecnica",
      "",
      "",
      "",
      ""
    ]
  }
]

