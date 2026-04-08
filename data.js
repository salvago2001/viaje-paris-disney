// ╔══════════════════════════════════════════════════════════════════╗
// ║  DATOS DEL VIAJE — Viaje París & Disney 2026                    ║
// ║  Actualizar este archivo cuando cambie la hoja de cálculo       ║
// ║  Última actualización: Abril 2026                               ║
// ╚══════════════════════════════════════════════════════════════════╝

window.VIAJE_DATA = {

  // ── META ─────────────────────────────────────────────────────────
  meta: {
    titulo: "Viaje París & Disneyland 2026",
    fechas: "7 – 13 Septiembre 2026",
    personas: ["Cristina", "Jose Luis", "Juani", "Jairo (14)", "Arion (9)", "Izhan (10)"],
    totalViaje: 5585.39,
  },

  // ── FINANCIERO ───────────────────────────────────────────────────
  financiero: {
    pagos: [
      { quien: "Jose Luis",  concepto: "Vuelos (todos) + Apartamento", importe: 2526.23, icon: "✈️🏠" },
      { quien: "Cristina",   concepto: "Disney Hotel + Entradas + Tasa",  importe: 3059.16, icon: "🏰" },
    ],
    gastos: [
      {
        concepto: "✈️ Vuelos",
        total: 2046.13, referencia: "EQK3PE · Vueling",
        detalle: [
          { item: "Base billete (6 pax)", total: 1497.96, nota: "÷6 = 249,66€/pers" },
          { item: "Asientos (12 posteriores)", total: 114.00, nota: "÷6 = 19,00€/pers" },
          { item: "Maleta facturada 30kg", total: 140.00, nota: "Solo Cristina" },
          { item: "Equipaje cabina 10kg", total: 140.00, nota: "JL 70€ + Juani 70€" },
          { item: "Seguros cancelación (x6)", total: 154.17, nota: "÷6 = 25,70€/pers" },
        ]
      },
      {
        concepto: "🏠 Apartamento París",
        total: 480.10, referencia: "5031469401 · Booking.com",
        detalle: [
          { item: "Le Montrouge BFL – 2 noches – 6 pax", total: 480.10, nota: "÷3 adultos = 160,03€/pers" },
        ]
      },
      {
        concepto: "🏰 Disney Hotel + Entradas",
        total: 3059.16, referencia: "33805260 · Explorers Hotel",
        detalle: [
          { item: "Paquete Hotel + Entradas (4 días, 2 parques)", total: 2992.80, nota: "÷6 = 498,80€/pers" },
          { item: "Tasa local (taxe de séjour) – 3 adultos 18+", total: 66.36, nota: "22,12€ × Cris/JL/Juani" },
        ]
      },
    ],
  },

  // ── REPARTO ──────────────────────────────────────────────────────
  reparto: {
    igual: {
      titulo: "Reparto ÷6 Igual",
      descripcion: "Todos pagan exactamente lo mismo, sin importar edad ni equipaje",
      porPersona: 930.90,
      personas: [
        { nombre: "Jose Luis",  pago: 2526.23, corresponde: 930.90, saldo: +1595.33, estado: "cobra" },
        { nombre: "Cristina",   pago: 3059.16, corresponde: 930.90, saldo: +2128.26, estado: "cobra" },
        { nombre: "Juani",      pago: 0.00,    corresponde: 930.90, saldo:  -930.90, estado: "paga" },
        { nombre: "Jairo",      pago: 0.00,    corresponde: 930.90, saldo:  -930.90, estado: "paga" },
        { nombre: "Arion",      pago: 0.00,    corresponde: 930.90, saldo:  -930.90, estado: "paga" },
        { nombre: "Izhan",      pago: 0.00,    corresponde: 930.90, saldo:  -930.90, estado: "paga" },
      ],
      transferencias: [
        { de: "Juani",    a: "Jose Luis", importe: 930.90, concepto: "Parte completa de Juani",    estado: "pendiente" },
        { de: "Jairo",    a: "Cristina",  importe: 930.90, concepto: "Parte completa de Jairo",    estado: "pendiente" },
        { de: "Arion",    a: "Cristina",  importe: 930.90, concepto: "Parte completa de Arion",    estado: "pendiente" },
        { de: "Izhan",    a: "Cristina",  importe: 930.90, concepto: "Parte completa de Izhan",    estado: "pendiente" },
        { de: "Cristina", a: "Jose Luis", importe: 664.43, concepto: "Ajuste saldo final",          estado: "pendiente" },
      ],
    },
    diferenciado: {
      titulo: "Reparto Diferenciado",
      descripcion: "Maletas y tasa local según gasto real · Niños sin tasa ni maleta adulto",
      personas: [
        { nombre: "Jose Luis",  pago: 2526.23, corresponde: 965.29,  saldo: +1560.94, estado: "cobra" },
        { nombre: "Cristina",   pago: 3059.16, corresponde: 1035.29, saldo: +2023.87, estado: "cobra" },
        { nombre: "Juani",      pago: 0.00,    corresponde: 965.29,  saldo:  -965.29, estado: "paga" },
        { nombre: "Jairo",      pago: 0.00,    corresponde: 873.17,  saldo:  -873.17, estado: "paga" },
        { nombre: "Arion",      pago: 0.00,    corresponde: 873.17,  saldo:  -873.17, estado: "paga" },
        { nombre: "Izhan",      pago: 0.00,    corresponde: 873.17,  saldo:  -873.17, estado: "paga" },
      ],
      transferencias: [
        { de: "Juani",    a: "Jose Luis", importe: 965.29, concepto: "Vuelos+appart+disney+equip+tasa", estado: "pendiente" },
        { de: "Jairo",    a: "Cristina",  importe: 873.17, concepto: "Parte Jairo (niño, sin tasa)",    estado: "pendiente" },
        { de: "Arion",    a: "Cristina",  importe: 873.17, concepto: "Parte Arion (niño, sin tasa)",    estado: "pendiente" },
        { de: "Izhan",    a: "Cristina",  importe: 873.17, concepto: "Parte Izhan (niño, sin tasa)",    estado: "pendiente" },
        { de: "Cristina", a: "Jose Luis", importe: 595.65, concepto: "Ajuste saldo final",              estado: "pendiente" },
      ],
    },
  },

  // ── ITINERARIO ───────────────────────────────────────────────────
  itinerario: [
    {
      dia: "Lun 7 Sep", etapa: "LLEGADA", color: "amber",
      actividades: [
        { titulo: "🚂 Tren Cádiz → Aeropuerto SVQ",
          detalles: "Renfe Media Distancia · ~1h35min · Salir ~14:00h (llegar 3h antes)",
          coste: "~15€/pers", notas: "Reservar en renfe.com con antelación. 6 billetes." },
        { titulo: "✈️ Vueling VY8826 · SVQ → ORY · 18:05–20:35h",
          detalles: "Código EQK3PE · Asientos 25D/25E/25F/26D/26E/26F · Facturación cierra 17:25h · Embarque 17:25h",
          coste: "✅ PAGADO", notas: "Check-in online disponible 15 días antes (app Vueling)." },
        { titulo: "🚇 Metro Orly → Montrouge (L14 + L4, sin autobús)",
          detalles: "L14 automático desde Orly → cambio L4 dirección Mairie de Montrouge (~35 min). Comprar 6 tarjetas Navigo Easy en máquinas de Orly.",
          coste: "~65€ total (6 pax)", notas: "App RATP para ruta exacta según parada del aparto." },
        { titulo: "🏠 Check in Apartamento Montrouge",
          detalles: "Le Montrouge BFL · 40 Av. Henri Ginoux, 92120 · Check-in 17:00–23:00h · PIN: 8464 · Anfitrión: +33 660 729 611",
          coste: "✅ PAGADO", notas: "Avisar al anfitrión por SMS de la hora de llegada." },
        { titulo: "🍽️ Cena cerca del apartamento",
          detalles: "Brasserie o supermercado del barrio. Sin esfuerzo el primer día.",
          coste: "~50€ grupo", notas: "Descanso total. Mañana hay freetour." },
      ]
    },
    {
      dia: "Mar 8 Sep", etapa: "PARÍS", color: "blue",
      actividades: [
        { titulo: "🎪 FREE TOUR en español · 10:00–11:30h",
          detalles: "Recorrido: Notre-Dame · Louvre · Sena · Tullerías (~2h30min). Guía local en español. Punto encuentro: Île de la Cité. Reservar en guruwalk.com/es/paris",
          coste: "Precio libre (~10–15€ propina)", notas: "Reservar con antelación — plazas limitadas." },
        { titulo: "🍱 Almuerzo zona centro",
          detalles: "El guía dará sugerencias al terminar. Marais, Île Saint-Louis o Châtelet.",
          coste: "~60€ grupo", notas: "" },
        { titulo: "🗼 Torre Eiffel – CIMA 3ª planta · ~16:00h",
          detalles: "Reservar online: toureiffel.paris · 3 adultos ×36,70€ + Jairo(14)×18,40€ + Arion(9)×9,20€ + Izhan(10)×9,20€ = ~147€. Llegar 15-20min antes.",
          coste: "~147€ total", notas: "RESERVAR EN toureiffel.paris 60 días antes. Elegir CIMA desde el principio." },
        { titulo: "🌿 Paseo Campo de Marte + Sena al atardecer",
          detalles: "A pie desde la Torre Eiffel. Vistas desde el Trocadero al atardecer.",
          coste: "Gratis", notas: "El mejor momento del día para fotos." },
        { titulo: "🚇 Metro de vuelta a Montrouge",
          detalles: "Desde Bir-Hakeim (L6) o Champ de Mars. ~20 min con Navigo Easy.",
          coste: "~12€ (6 pax)", notas: "" },
      ]
    },
    {
      dia: "Mié 9 Sep", etapa: "PARIS → DISNEY", color: "purple",
      actividades: [
        { titulo: "✅ Check-out apartamento — Antes de las 10:00h",
          detalles: "Preparar maletas la noche del martes. Salir antes de las 10:00h. Dejar llaves según instrucciones.",
          coste: "—", notas: "⚠️ Check-out estricto a las 10:00h." },
        { titulo: "🚌 RER A: Châtelet → Marne-la-Vallée/Chessy · ~10:30h",
          detalles: "Llegada Disney ~11:30h. Billete 'Île-de-France' destino Marne-la-Vallée. Sale cada 15 min.",
          coste: "~22€ total (6 pax)", notas: "Verificar en ratp.fr que no hay cortes en línea A." },
        { titulo: "🏨 Explorers Hotel · Consigna gratuita + Tarjetas entrada",
          detalles: "Llegada ~11:30-12:00h. Check-in oficial 15:00h. CONSIGNA GRATUITA 24h. Recoger tarjetas de entrada en recepción.",
          coste: "GRATIS", notas: "La consigna es gratuita para huéspedes las 24h." },
        { titulo: "🎢 PARQUE desde ~12:00h · ¡DIRECTO AL SALIR DEL HOTEL!",
          detalles: "Walt Disney Studios: Ratatouille (Premier Access ⭐) nada más llegar · Cars · Lightning McQueen · Avengers Campus · 15:00h pausa para recoger habitación.",
          coste: "Entradas ✅ incluidas · PA Ratatouille ~15-20€/pax", notas: "A las 15:00h un adulto recoge la habitación." },
        { titulo: "🌟 Cena en parque + Espectáculo nocturno + Shuttle hotel",
          detalles: "Shuttle gratuito entre parque y hotel (Explorers). Espectáculo nocturno si opera.",
          coste: "~60-80€ cena grupo", notas: "Los niños dormirán de un tirón." },
      ]
    },
    {
      dia: "Jue 10 Sep", etapa: "DISNEY 🔥", color: "red",
      actividades: [
        { titulo: "🏰 DÍA INTENSIVO · Disneyland Park + Walt Disney Studios",
          detalles: "08:15h salir hotel · 08:30h llegada (30min antes apertura) · Big Thunder Mountain (Premier Access si no llegáis antes) · Fantasyland: Peter Pan/Dumbo/Carrousel (Arion+Izhan) · Tarde: Walt Disney Studios completo · Ratatouille si no se hizo el día 9.",
          coste: "PA Big Thunder ~15€/pax (opcional)", notas: "Desayunar en el hotel antes de salir." },
      ]
    },
    {
      dia: "Vie 11 Sep", etapa: "DISNEY 😊", color: "teal",
      actividades: [
        { titulo: "🎡 Día relajado · Repetir favoritas + Personajes + Shows",
          detalles: "Sin horarios estrictos. Fotos con personajes (llegar 30min antes). Shows y desfiles según app DLP. Almuerzo especial (reservar en app DLP). Compras Main Street tarde.",
          coste: "~80€ souvenirs · ~60€ cena especial", notas: "El segundo día de Disney es el mejor." },
      ]
    },
    {
      dia: "Sáb 12 Sep", etapa: "DISNEY 🏁", color: "orange",
      actividades: [
        { titulo: "🎭 Tercer día · Zonas pendientes + Último espectáculo · ⚠️ PREPARAR MALETAS ESTA NOCHE",
          detalles: "Mañana tranquila — Fantasyland completo · Almuerzo tranquilo · Último espectáculo nocturno · ESTA NOCHE: preparar todas las maletas · Confirmar recogida taxi/shuttle 06:00h.",
          coste: "~80€ misc. + souvenirs", notas: "CRÍTICO: maletas preparadas esta noche. Taxi a las 06:00h confirmado." },
        { titulo: "🚖 Opciones traslado al aeropuerto Orly (vuelo 09:50h)",
          detalles: "A: Uber XL / Minivan (RECOMENDADO) — Reservar desde España con antelación. Recogida 06:00h puerta hotel. Precio fijo ~80-110€. Cancelable gratis hasta 5min.\nB: Magical Shuttle — ~118€ grupo. Bus ~06:00-06:20h desde Explorers.",
          coste: "Uber XL: ~80-110€ · Magical Shuttle: ~118€", notas: "Reservar Uber XL desde España con semanas de antelación." },
      ]
    },
    {
      dia: "Dom 13 Sep", etapa: "VUELTA", color: "amber",
      actividades: [
        { titulo: "✈️ Vueling VY8221 · ORY → SVQ · 09:50–12:15h",
          detalles: "Código EQK3PE · Asientos 27D/27E/27F/28D/28E/28F · Facturación cierra 09:10h · Embarque 09:10h · SALIDA DEL HOTEL 06:00h",
          coste: "✅ PAGADO", notas: "Check-in online la noche del sábado 12 sep." },
        { titulo: "🚂 Tren SVQ → Cádiz · Llegada ~14:30h",
          detalles: "Aeropuerto Sevilla — Estación Cádiz ~1h35min. Fin del viaje 🏠",
          coste: "~90€ total (6 pax)", notas: "" },
      ]
    },
  ],

  // ── RESERVAS ─────────────────────────────────────────────────────
  reservas: {
    vuelos: {
      titulo: "✈️ Vuelos",
      color: "blue",
      datos: [
        { label: "Aerolínea",          valor: "Vueling" },
        { label: "Código reserva",     valor: "EQK3PE" },
        { label: "Ida",                valor: "Lun 7 Sep · VY8826 · SVQ → ORY · 18:05–20:35h" },
        { label: "Vuelta",             valor: "Dom 13 Sep · VY8221 · ORY → SVQ · 09:50–12:15h" },
        { label: "Pasajeros",          valor: "Cristina Pozo · Juana García · Jose Luis Díaz · Jairo · Arion · Izhan" },
        { label: "Asientos IDA",       valor: "Cristina 25D · Juani 25F · JL 26D · Jairo 26E · Arion 26F · Izhan 25E" },
        { label: "Asientos VUELTA",    valor: "Cristina 27F · Juani 27E · JL 28D · Jairo 28F · Arion 28E · Izhan 27E" },
        { label: "Equipaje Cristina",  valor: "1 maleta bodega 30kg (ida + vuelta)" },
        { label: "Equipaje JL+Juani",  valor: "1 pieza cabina 10kg (ida + vuelta) c/u" },
        { label: "Total pagado",       valor: "2.046,13€ — Visa Jose Luis" },
        { label: "Check-in",           valor: "Disponible 15 días antes en app Vueling" },
        { label: "Facturación",        valor: "Abre 2h antes · Cierra 40min antes" },
      ]
    },
    apartamento: {
      titulo: "🏠 Apartamento París",
      color: "green",
      datos: [
        { label: "Alojamiento",          valor: "Le Montrouge BFL APPARTEMENT CONFORT GLAM CHIC" },
        { label: "Dirección",            valor: "40 Avenue Henri Ginoux, Montrouge 92120, Francia" },
        { label: "Nº Reserva Booking",   valor: "5031469401" },
        { label: "PIN acceso",           valor: "8464" },
        { label: "Check-In",             valor: "Lunes 7 Sep · 17:00 a 23:00h" },
        { label: "Check-out",            valor: "Miércoles 9 Sep · hasta las 10:00h ⚠️" },
        { label: "Capacidad",            valor: "2 dormitorios · máx 6 personas" },
        { label: "Anfitrión teléfono",   valor: "+33 660 729 611" },
        { label: "Acceso llaves",        valor: "El alojamiento envía instrucciones por SMS" },
        { label: "Total pagado",         valor: "480,10€ — Visa Jose Luis" },
        { label: "Cancelación gratis",   valor: "Hasta el 9 de agosto de 2026 a las 23:59h" },
        { label: "Normas",               valor: "No fumar · No fiestas" },
      ]
    },
    disney: {
      titulo: "🏰 Disney (Hotel + Entradas)",
      color: "red",
      datos: [
        { label: "Hotel",               valor: "Explorers Fabulous Hotels Group" },
        { label: "Nº Reserva",          valor: "33805260" },
        { label: "Check-in",            valor: "Miércoles 9 Sep 2026" },
        { label: "Check-out",           valor: "Domingo 13 Sep 2026" },
        { label: "Estancia",            valor: "4 noches · 1 habitación · 6 huéspedes" },
        { label: "Entradas incluidas",  valor: "4 días · 2 parques (Disneyland Park + Walt Disney Studios)" },
        { label: "Pasajeros",           valor: "Cristina · Jose Luis · Juani · Arion (9a) · Izhan (10a) · Jairo (14a)" },
        { label: "Total pagado",        valor: "3.059,16€ — Cristina Pozo García" },
        { label: "Desglose",            valor: "Hotel+Entradas 2.992,80€ · Impuestos locales 66,36€" },
        { label: "Estado pago",         valor: "✅ PAGADO EN SU TOTALIDAD" },
        { label: "App recomendada",     valor: "Descargar app Disneyland Paris para esperas y Premier Access" },
      ]
    },
  },

  // ── TRANSPORTE ───────────────────────────────────────────────────
  transporte: [
    {
      titulo: "🇪🇸 España — IDA (7 Sep)", color: "blue",
      tramos: [
        { tramo: "Cádiz → Aeropuerto SVQ", medio: "🚂 Renfe MD", duracion: "~1h35min", precio_adulto: "~15€", precio_nino: "~8€", total: "~90€", nota: "Salir ~14:00h · Llegar 3h antes del vuelo", reservar: "renfe.com" },
        { tramo: "SVQ → ORY · VY8826", medio: "✈️ Vueling", duracion: "2h30min", precio_adulto: "✅ PAGADO", precio_nino: "—", total: "2.046€", nota: "18:05h → 20:35h · Ref. EQK3PE", reservar: "—" },
      ]
    },
    {
      titulo: "🛬 Llegada Orly → Montrouge (sin autobús)", color: "green",
      tramos: [
        { tramo: "Orly → Montrouge (⭐ RECOMENDADO)", medio: "🚇 Metro L14 + L4", duracion: "~35 min", precio_adulto: "13€", precio_nino: "6,50€ (4-10a)", total: "~65€", nota: "L14 desde Orly · Olympiades → cambio L4 dirección Mairie de Montrouge (10min andando al aparto). Billete especial aeropuerto. Cargar en Navigo Easy.", reservar: "Navigo Easy · máquinas Orly" },
      ]
    },
    {
      titulo: "🚇 Transporte en París Ciudad", color: "indigo",
      tramos: [
        { tramo: "Metro París (zonas 1-2)", medio: "🚇 Metro", duracion: "Variable", precio_adulto: "2,55€", precio_nino: "1,30€ (<10a)", total: "Variable", nota: "Navigo Easy imprescindible. Arion(9a) paga niño · Izhan(10a) y Jairo(14a) pagan adulto.", reservar: "Máquinas metro" },
      ]
    },
    {
      titulo: "🏰 Día 9 — París → Disneyland", color: "purple",
      tramos: [
        { tramo: "Châtelet Les Halles → Disney (RER A directo)", medio: "🚌 RER A", duracion: "~45-50 min", precio_adulto: "~5€", precio_nino: "~2,50€", total: "~22€", nota: "Dirección Marne-la-Vallée/Chessy 🔵 · Billete 'Île-de-France'. Verificar RATP que no hay cortes.", reservar: "Navigo Easy" },
      ]
    },
    {
      titulo: "🚖 Día 13 — Vuelta Disney → Orly", color: "red",
      tramos: [
        { tramo: "Hotel Explorers → Orly (⭐ RECOMENDADO)", medio: "🚗 Uber XL", duracion: "~50 min", precio_adulto: "—", precio_nino: "—", total: "~80-110€", nota: "Reservar desde España con antelación (app Uber, categoría Uber XL). Recogida 06:00h. Precio fijo. Cancelable gratis hasta 5min. Vuelo 09:50h → llegar Orly 07:15h mínimo.", reservar: "App Uber desde España" },
        { tramo: "Hotel Explorers → Orly (alternativa)", medio: "🚌 Magical Shuttle", duracion: "~60 min", precio_adulto: "24€", precio_nino: "11€", total: "~118€", nota: "Primer bus ~06:00-06:20h. 3 adultos + Jairo(14)×24€ + Arion+Izhan×11€. Riesgo: horario muy ajustado para vuelo 09:50h.", reservar: "magicalshuttle.es" },
      ]
    },
    {
      titulo: "🇪🇸 España — VUELTA (13 Sep)", color: "blue",
      tramos: [
        { tramo: "ORY → SVQ · VY8221", medio: "✈️ Vueling", duracion: "2h25min", precio_adulto: "✅ PAGADO", precio_nino: "—", total: "incluido", nota: "09:50h → 12:15h · Ref. EQK3PE", reservar: "—" },
        { tramo: "Aeropuerto SVQ → Cádiz", medio: "🚂 Renfe MD", duracion: "~1h35min", precio_adulto: "~15€", precio_nino: "~8€", total: "~90€", nota: "Llegada Cádiz ~14:30h 🏠", reservar: "renfe.com" },
      ]
    },
    {
      titulo: "🎫 Navigo Easy — IMPRESCINDIBLE", color: "yellow",
      info: [
        { label: "Precio tarjeta", valor: "2€/tarjeta · Comprar 6 (una por persona) · No caduca · Reutilizable" },
        { label: "Billete aeropuerto Orly", valor: "13€ adulto · 6,50€ niño (4-10 años) · Incluye L14 completo hasta París" },
        { label: "Billete metro ciudad (zonas 1-2)", valor: "2,55€ adulto · 1,30€ (<10 años)" },
        { label: "Billete París→Disney (zona 5)", valor: "~5€ adulto · ~2,50€ niño · Billete 'Île de France'" },
        { label: "⚠️ CRÍTICO", valor: "Los tickets de papel YA NO EXISTEN. Sin Navigo Easy no podréis usar el transporte. Comprar al salir del avión en Orly." },
      ]
    },
  ],

  // ── DISNEY ESTRATEGIA ────────────────────────────────────────────
  disney: {
    subtitulo: "Jue 10 · Vie 11 · Sáb 12 Sep  |  Arion(9) · Izhan(10) · Jairo(14)",
    dias: [
      {
        dia: "Jue 10 Sep", tipo: "DÍA INTENSIVO 🔥", color: "red",
        plan: [
          { hora: "8:30",  titulo: "Llegada + foto Main Street",   parque: "Disneyland",        quien: "Todos",            cola: "Sin cola",       notas: "Foto familiar. Apertura 9h en septiembre." },
          { hora: "9:00",  titulo: "🎢 Big Thunder Mountain",      parque: "Disneyland",        quien: "Jairo+adultos (min 1,02m)", cola: "Premier Access ⭐", notas: "Primera atracción — menos cola. Revisar altura Arion/Izhan." },
          { hora: "9:30",  titulo: "🏰 Fantasyland",               parque: "Disneyland",        quien: "Arion + Izhan",    cola: "Cola baja",      notas: "Peter Pan, Dumbo, Carrousel. Los peques aquí primero." },
          { hora: "11:00", titulo: "👻 Haunted Mansion / Pirates", parque: "Disneyland",        quien: "Todos",            cola: "Cola media",     notas: "Piratas del Caribe: todos disfrutan — oscuridad suave." },
          { hora: "12:30", titulo: "🍽️ Almuerzo + descanso",       parque: "Disneyland",        quien: "Todos",            cola: "—",              notas: "Buffet o bocadillos. Descanso pies obligatorio." },
          { hora: "14:00", titulo: "🐀 Ratatouille",               parque: "Walt Disney Studios", quien: "Todos ✅",       cola: "Premier Access ⭐", notas: "PRIORIDAD MÁXIMA. Ir nada más llegar al Studios." },
          { hora: "15:00", titulo: "⚡ Avengers Campus",           parque: "Walt Disney Studios", quien: "Jairo",          cola: "Cola media",     notas: "Revisar restricciones menores." },
          { hora: "16:00", titulo: "🚗 Cars · Lightning McQueen",  parque: "Walt Disney Studios", quien: "Todos ✅",       cola: "Cola media",     notas: "Apta todos. Arion e Izhan la adoran." },
          { hora: "17:30", titulo: "⭐ Repetir favoritas",         parque: "Ambos",              quien: "Todos",           cola: "Colas bajas",    notas: "A las 17h las colas caen notablemente." },
          { hora: "21:00", titulo: "✨ Disney Illuminations",       parque: "Disneyland",        quien: "Todos",            cola: "Ver posición",   notas: "Espectáculo nocturno frente al castillo. No perdérselo." },
        ]
      },
      {
        dia: "Vie 11 Sep", tipo: "DÍA RELAJADO 😊", color: "teal",
        plan: [
          { hora: "Mañana",     titulo: "Repetir favoritas del día anterior",   parque: "A elección", quien: "Todos", cola: "Colas normales", notas: "Los niños querrán repetir. Dejarles elegir." },
          { hora: "Media mañana", titulo: "📸 Fotos con personajes",             parque: "Disneyland", quien: "Todos", cola: "Cola moderada",  notas: "Llegar 30min antes al punto de encuentro." },
          { hora: "Mediodía",   titulo: "🍽️ Almuerzo especial (reservar)",       parque: "Restaurante", quien: "Todos", cola: "—",            notas: "Blue Lagoon o buffet temático. Reservar en app DLP." },
          { hora: "Tarde",      titulo: "🛍️ Compras Main Street",                parque: "Disney Village", quien: "Todos", cola: "—",         notas: "Main Street cierra tarde. Souvenirs aquí." },
          { hora: "Tarde-Noche", titulo: "🎭 Shows y desfiles",                  parque: "Disneyland", quien: "Todos", cola: "Ver posición",  notas: "Ver calendario en app Disneyland Paris." },
        ]
      },
      {
        dia: "Sáb 12 Sep", tipo: "TERCER DÍA 🏁", color: "green",
        plan: [
          { hora: "Mañana",     titulo: "Zonas sin visitar / tranquilas",        parque: "Ambos parques", quien: "Todos", cola: "Baja",         notas: "Fantasyland completo con los pequeños." },
          { hora: "Mediodía",   titulo: "🍽️ Almuerzo tranquilo",                 parque: "Restaurante",  quien: "Todos", cola: "—",            notas: "Sin prisas. Último día completo." },
          { hora: "Tarde",      titulo: "🎡 Última vuelta a favoritas",           parque: "Ambos",        quien: "Todos", cola: "Variable",     notas: "Comprar últimos recuerdos." },
          { hora: "Noche",      titulo: "✨ Último espectáculo nocturno",          parque: "Disneyland",   quien: "Todos", cola: "—",            notas: "Vuelo Dom 13 a las 09:50h. Taxi a las 06:00h." },
          { hora: "⚠️ NOCHE",   titulo: "Preparar maletas esta noche",            parque: "Hotel",        quien: "—",     cola: "—",            notas: "Vuelo Dom 13 sep a las 09:50h. Taxi a las 06:00h." },
        ]
      },
    ],
    premierAccess: [
      { prioridad: "COMPRAR SÍ ⭐⭐⭐", titulo: "🐀 Ratatouille: La Aventura", parque: "Studios", quien: "Todos (6 pax)", precio: "~15-20€/pax", veredicto: "IMPRESCINDIBLE. Colas 50min+ sin PA." },
      { prioridad: "VALORAR ⭐⭐",      titulo: "🎢 Big Thunder Mountain",       parque: "Disneyland", quien: "Jairo+adultos", precio: "~15€/pax", veredicto: "Solo si no llegáis antes de apertura." },
      { prioridad: "❌ No necesario", titulo: "Resto de atracciones",            parque: "Ambos",    quien: "—",             precio: "—",         veredicto: "Sep: colas asumibles sin Premier Access." },
    ],
  },

  // ── CHECKLIST ────────────────────────────────────────────────────
  checklist: [
    { categoria: "urgente", tarea: "✈️ Vuelos Vueling reservados",     detalle: "EQK3PE — VY8826 ida / VY8221 vuelta",            plazo: "Ya hecho",        estado: "confirmado" },
    { categoria: "urgente", tarea: "🏠 Apartamento París reservado",   detalle: "Le Montrouge — Ref 5031469401 — 7-9 Sep",         plazo: "Ya hecho",        estado: "confirmado" },
    { categoria: "urgente", tarea: "🏰 Hotel Disney + Entradas reservados", detalle: "Explorers — Ref 33805260 — 9-13 Sep",       plazo: "Ya hecho",        estado: "confirmado" },
    { categoria: "proximo", tarea: "🗼 Reservar Torre Eiffel",          detalle: "toureiffel.paris — 2ª planta — Día 8 Sep",        plazo: "1-2 meses antes", estado: "pendiente" },
    { categoria: "proximo", tarea: "🚂 Comprar tren Cádiz ↔ Aeropuerto SVQ", detalle: "renfe.com — ida 7 Sep / vuelta 13 Sep",   plazo: "1-2 meses antes", estado: "pendiente" },
    { categoria: "proximo", tarea: "🛡️ Contratar seguro de viaje",     detalle: "Iati, Intermundial — Cobertura médica Europa",    plazo: "Antes del viaje", estado: "pendiente" },
    { categoria: "proximo", tarea: "🪪 Revisar DNIs 6 personas",        detalle: "Vigentes para sep 2026 + 6 meses margen",         plazo: "2 meses antes",   estado: "pendiente" },
    { categoria: "proximo", tarea: "💸 Transferencia Cristina → Jose Luis", detalle: "Su parte vuelo + aparto (ver hoja Reparto)", plazo: "Acordar fecha",   estado: "pendiente" },
    { categoria: "proximo", tarea: "💸 Transferencia Juani → Jose Luis",    detalle: "Su parte vuelo + aparto (ver hoja Reparto)", plazo: "Acordar fecha",   estado: "pendiente" },
    { categoria: "proximo", tarea: "💸 Transferencia Jose Luis → Cristina", detalle: "Su parte Disney (ver hoja Reparto)",         plazo: "Acordar fecha",   estado: "pendiente" },
    { categoria: "proximo", tarea: "💸 Transferencia Juani → Cristina",     detalle: "Su parte Disney (ver hoja Reparto)",         plazo: "Acordar fecha",   estado: "pendiente" },
    { categoria: "salir",   tarea: "📱 Descargar app Disneyland Paris", detalle: "Ver esperas en tiempo real + Premier Access",      plazo: "1 mes antes",     estado: "pendiente" },
    { categoria: "salir",   tarea: "📱 Descargar app RATP",             detalle: "Mapas y horarios offline",                         plazo: "1 mes antes",     estado: "pendiente" },
    { categoria: "salir",   tarea: "📞 Confirmar hora llegada con anfitrión Montrouge", detalle: "Tel: +33660729611 — Llegada ~21h", plazo: "1 semana antes",  estado: "pendiente" },
    { categoria: "salir",   tarea: "🚖 Reservar taxi Disney → Orly (13 Sep)", detalle: "Vuelo 09:50h — Taxi a las 06:00h MÁXIMO", plazo: "1 mes antes",     estado: "pendiente" },
    { categoria: "salir",   tarea: "🧳 Preparar maletas (peso Vueling)", detalle: "Cristina: maleta 30kg · JL+Juani: cabina 10kg", plazo: "2 días antes",    estado: "pendiente" },
    { categoria: "salir",   tarea: "💶 Llevar euros efectivo",           detalle: "~200-300€ para imprevistos y propinas",           plazo: "Antes de salir",  estado: "pendiente" },
    { categoria: "orly",    tarea: "🎫 Comprar 6 tarjetas Navigo Easy", detalle: "Máquinas metro Orly · 2€/tarjeta · Menú español",  plazo: "Nada más llegar", estado: "pendiente" },
    { categoria: "orly",    tarea: "🚇 Cargar billetes Orly/bus o metro", detalle: "Para ir Orly → Montrouge",                      plazo: "Orly llegada",    estado: "pendiente" },
    { categoria: "orly",    tarea: "⭐ Premier Access Ratatouille",     detalle: "App DLP o taquilla Studios · Día 10 Sep al entrar", plazo: "Día 10 Sep",      estado: "pendiente" },
  ],

  // ── APPS SCRIPT (sync checklist → Google Sheets) ────────────
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwlWSEgziueHJUTlArJpeu0esfuPPDJxj3O4MiaVxNOFhA0HusTkI0PxYnFe1FIAQ98jQ/exec",

}; // ← FIN DE LOS DATOS DEL VIAJE
