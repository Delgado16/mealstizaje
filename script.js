// DOM Elements
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navMenu = document.querySelector("nav ul")
const categories = document.querySelectorAll(".category")
const radioButtons = document.querySelectorAll('input[type="radio"]')
const modal = document.getElementById("checkout-modal")
const confirmationModal = document.getElementById("confirmation-modal")
const btnEnviarPedido = document.getElementById("enviar-pedido")
const closeModal = document.querySelector(".close-modal")
const cancelarPedido = document.getElementById("cancelar-pedido")
const closeConfirmation = document.getElementById("close-confirmation")
const pedidoForm = document.getElementById("pedido-form")
const decreaseQuantity = document.getElementById("decrease-quantity")
const increaseQuantity = document.getElementById("increase-quantity")
const decreaseDrinks = document.getElementById("decrease-drinks")
const increaseDrinks = document.getElementById("increase-drinks")

// Variables para la encuesta
const encuestaModal = document.getElementById("encuesta-modal")
const encuestaForm = document.getElementById("encuesta-form")
const cancelarEncuesta = document.getElementById("cancelar-encuesta")
const closeEncuestaBtn = document.getElementById("close-encuesta")
const verPlatillosBtn = document.getElementById("ver-platillos-btn")

// Variables para los menús
const menuSeccionActual = document.getElementById("menus-personalizados")
let categoriaActual = "desayuno"
let perfilActual = ""

// Datos de los menús por perfil - CORREGIDOS
const menusData = {
  diabetico: {
    nombre: "Diabético",
    totalCalorias: "1,800 kcal",
    desayuno: {
      calorias: "400 kcal",
      items: [
        "Avena cocida en agua con manzana verde y canela (1 taza)",
        "1 huevo + 2 claras revueltas con espinaca",
        "Café sin azúcar o con stevia",
      ],
    },
    "merienda-manana": {
      calorias: "150 kcal",
      items: ["1 yogur natural sin azúcar", "5 almendras"],
    },
    almuerzo: {
      calorias: "700 kcal",
      items: [
        "Pechuga de pollo a la plancha (150 g)",
        "Ensalada de espinaca, pepino y aguacate",
        "Arroz integral (½ taza)",
      ],
    },
    "merienda-tarde": {
      calorias: "150 kcal",
      items: ["1 manzana pequeña o 1 porción de papaya (1 taza)"],
    },
    cena: {
      calorias: "400 kcal",
      items: [
        "Filete de pescado al horno con limón y hierbas (150 g)",
        "Puré de coliflor (1 taza)",
        "Zanahorias al vapor (½ taza)",
      ],
    },
  },
  alergicos: {
    nombre: "Alérgicos",
    totalCalorias: "2,000 kcal",
    desayuno: {
      calorias: "500 kcal",
      items: [
        "Smoothie con plátano, avena sin gluten y bebida vegetal de arroz",
        "2 huevos revueltos con tomate y cebolla",
      ],
    },
    "merienda-manana": {
      calorias: "150 kcal",
      items: ["1 manzana", "1 cucharadita de semillas de girasol"],
    },
    almuerzo: {
      calorias: "800 kcal",
      items: [
        "Filete de res a la parrilla (180 g)",
        "Puré de papa (1 taza)",
        "Ensalada de lechuga y zanahoria con aceite de oliva",
      ],
    },
    "merienda-tarde": {
      calorias: "150 kcal",
      items: ["1 taza de piña fresca"],
    },
    cena: {
      calorias: "400 kcal",
      items: ["Pollo guisado con verduras (1 taza)", "Arroz integral (¾ taza)"],
    },
  },
  fit: {
    nombre: "Fit",
    totalCalorias: "1,900 kcal",
    desayuno: {
      calorias: "400 kcal",
      items: ["Tortilla de 4 claras con espinaca y champiñones", "½ taza de avena con stevia", "Café o té verde"],
    },
    "merienda-manana": {
      calorias: "150 kcal",
      items: ["Yogur griego bajo en grasa", "5 almendras"],
    },
    almuerzo: {
      calorias: "700 kcal",
      items: ["Pollo a la plancha (150 g)", "Quinoa (½ taza)", "Ensalada verde con limón"],
    },
    "merienda-tarde": {
      calorias: "150 kcal",
      items: ["1 manzana con 1 cucharada de mantequilla de maní"],
    },
    cena: {
      calorias: "500 kcal",
      items: ["Filete de pescado al horno (150 g)", "Brócoli al vapor (1 taza)", "Arroz integral (½ taza)"],
    },
  },
  medico: {
    nombre: "Médico",
    totalCalorias: "2,600 kcal",
    desayuno: {
      calorias: "600 kcal",
      items: [
        "Batido proteico con plátano, avena, proteína y leche vegetal",
        "2 tostadas integrales con aguacate y huevo",
      ],
    },
    "merienda-manana": {
      calorias: "200 kcal",
      items: ["Barra de granola + café o té"],
    },
    almuerzo: {
      calorias: "1,000 kcal",
      items: ["Lomo de res a la parrilla (200 g)", "Puré de batata (1 taza)", "Ensalada mixta con semillas"],
    },
    "merienda-tarde": {
      calorias: "200 kcal",
      items: ["1 fruta (pera o naranja) + 1 puñado de nueces"],
    },
    cena: {
      calorias: "600 kcal",
      items: ["Pollo al curry con verduras (1 taza)", "Arroz basmati (1 taza)", "Yogur griego con miel"],
    },
  },
  ingeniero: {
    nombre: "Ingeniero",
    totalCalorias: "2,300 kcal",
    desayuno: {
      calorias: "500 kcal",
      items: ["Avena con frutos rojos y semillas de chía", "2 huevos revueltos con tomate", "Café negro o té verde"],
    },
    "merienda-manana": {
      calorias: "200 kcal",
      items: ["Batido con leche vegetal, plátano y cacao puro"],
    },
    almuerzo: {
      calorias: "900 kcal",
      items: ["Salmón a la plancha (200 g)", "Ensalada de quinoa con vegetales (1 taza)", "Batata asada (½ taza)"],
    },
    "merienda-tarde": {
      calorias: "200 kcal",
      items: ["Yogur natural con miel o avena"],
    },
    cena: {
      calorias: "550 kcal",
      items: ["Pavo al horno con hierbas (150 g)", "Verduras al vapor (brócoli, zanahoria)", "Arroz integral (½ taza)"],
    },
  },
  "nuevo-estilo": {
    nombre: "Nuevo Estilo Saludable",
    totalCalorias: "2,100 kcal",
    desayuno: {
      calorias: "450 kcal",
      items: ["Avena con leche y banano (1 taza)", "1 huevo + 1 clara", "Café con poca azúcar o stevia"],
    },
    "merienda-manana": {
      calorias: "150 kcal",
      items: ["1 barra de cereal o 1 puñado de maní"],
    },
    almuerzo: {
      calorias: "800 kcal",
      items: [
        "Pollo al horno (150 g)",
        "Arroz (¾ taza)",
        "Ensalada de lechuga y tomate",
        "1 vaso de jugo natural sin azúcar",
      ],
    },
    "merienda-tarde": {
      calorias: "150 kcal",
      items: ["1 yogur natural o 1 fruta (manzana o naranja)"],
    },
    cena: {
      calorias: "550 kcal",
      items: ["Tortilla de huevo con vegetales", "2 tostadas integrales", "Té de hierbas"],
    },
  },
}

// ========== FUNCIONALIDAD GENERAL ==========

// Toggle mobile menu
if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show")
  })
}

// Toggle category options
if (categories.length > 0) {
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((c) => c.classList.remove("active"))
      this.classList.add("active")
    })
  })
}

// Update plate preview
function updatePlatePreview() {
  const base = document.querySelector('input[name="base"]:checked')
  const proteina = document.querySelector('input[name="proteina"]:checked')
  const guarnicion = document.querySelector('input[name="guarnicion"]:checked')
  const bebida = document.querySelector('input[name="bebida"]:checked')

  const plateItems = document.querySelector(".plate-items")
  if (plateItems) {
    plateItems.innerHTML = `
            ${base ? `<span class="plate-item">${formatOption(base.value)}</span>` : ""}
            ${proteina ? `<span class="plate-item">${formatOption(proteina.value)}</span>` : ""}
            ${guarnicion ? `<span class="plate-item">${formatOption(guarnicion.value)}</span>` : ""}
            ${bebida ? `<span class="plate-item">${formatOption(bebida.value)}</span>` : ""}
        `
  }
}

function formatOption(value) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Add event listeners to all radio buttons
if (radioButtons.length > 0) {
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updatePlatePreview)
  })
}

// Initialize plate preview
updatePlatePreview()

// ========== FUNCIONALIDAD DE PEDIDOS ==========

// Checkout modal
if (btnEnviarPedido && modal) {
  btnEnviarPedido.addEventListener("click", () => {
    updateOrderSummary()
    modal.style.display = "flex"
    document.body.style.overflow = "hidden"
  })
}

// Cerrar modal
function closeCheckoutModal() {
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

// Cerrar modal
if (closeModal) {
  closeModal.addEventListener("click", closeCheckoutModal)
}

if (cancelarPedido) {
  cancelarPedido.addEventListener("click", closeCheckoutModal)
}

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (event) => {
  if (modal && event.target === modal) {
    closeCheckoutModal()
  }
  if (confirmationModal && event.target === confirmationModal) {
    confirmationModal.style.display = "none"
  }
})

// Cerrar modal de confirmación
if (closeConfirmation) {
  closeConfirmation.addEventListener("click", () => {
    if (confirmationModal) {
      confirmationModal.style.display = "none"
    }
  })
}

// Selectores de cantidad
if (decreaseQuantity) {
  decreaseQuantity.addEventListener("click", () => {
    const cantidadInput = document.getElementById("cantidad")
    if (cantidadInput && Number.parseInt(cantidadInput.value) > 1) {
      cantidadInput.value = Number.parseInt(cantidadInput.value) - 1
    }
  })
}

if (increaseQuantity) {
  increaseQuantity.addEventListener("click", () => {
    const cantidadInput = document.getElementById("cantidad")
    if (cantidadInput && Number.parseInt(cantidadInput.value) < 10) {
      cantidadInput.value = Number.parseInt(cantidadInput.value) + 1
    }
  })
}

if (decreaseDrinks) {
  decreaseDrinks.addEventListener("click", () => {
    const bebidasInput = document.getElementById("bebidas")
    if (bebidasInput && Number.parseInt(bebidasInput.value) > 0) {
      bebidasInput.value = Number.parseInt(bebidasInput.value) - 1
    }
  })
}

if (increaseDrinks) {
  increaseDrinks.addEventListener("click", () => {
    const bebidasInput = document.getElementById("bebidas")
    if (bebidasInput && Number.parseInt(bebidasInput.value) < 10) {
      bebidasInput.value = Number.parseInt(bebidasInput.value) + 1
    }
  })
}

// Actualizar resumen del pedido
function updateOrderSummary() {
  const base = document.querySelector('input[name="base"]:checked')
  const proteina = document.querySelector('input[name="proteina"]:checked')
  const guarnicion = document.querySelector('input[name="guarnicion"]:checked')
  const bebidaSeleccionada = document.querySelector('input[name="bebida"]:checked')

  const summaryItems = document.getElementById("summary-items")
  if (summaryItems) {
    summaryItems.innerHTML = `
            ${base ? `<span class="summary-item">${formatOption(base.value)}</span>` : ""}
            ${proteina ? `<span class="summary-item">${formatOption(proteina.value)}</span>` : ""}
            ${guarnicion ? `<span class="summary-item">${formatOption(guarnicion.value)}</span>` : ""}
            ${bebidaSeleccionada ? `<span class="summary-item">${formatOption(bebidaSeleccionada.value)}</span>` : ""}
        `
  }
}

// Validación de formulario
function validateForm() {
  let isValid = true
  const fields = ["nombre", "telefono", "direccion", "metodo-pago", "tiempo-entrega"]

  fields.forEach((field) => {
    const element = document.getElementById(field)
    const errorElement = document.getElementById(`${field}-error`)
    const formGroup = element ? element.closest(".form-group") : null

    if (!element || !element.value.trim()) {
      if (formGroup) formGroup.classList.add("error")
      if (errorElement) {
        errorElement.textContent = "Este campo es obligatorio"
      }
      isValid = false
    } else {
      if (formGroup) formGroup.classList.remove("error")
      if (errorElement) {
        errorElement.textContent = ""
      }

      // Validación específica para teléfono
      if (field === "telefono" && !/^\d{8}$/.test(element.value.trim())) {
        if (formGroup) formGroup.classList.add("error")
        if (errorElement) {
          errorElement.textContent = "Ingresa un número de teléfono válido (8 dígitos)"
        }
        isValid = false
      }
    }
  })

  return isValid
}

// Form submission
if (pedidoForm) {
  pedidoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Mostrar estado de carga
    const submitBtn = document.getElementById("enviar-pedido-btn")
    const btnText = submitBtn ? submitBtn.querySelector(".btn-text") : null
    const btnLoading = submitBtn ? submitBtn.querySelector(".btn-loading") : null

    if (submitBtn && btnText && btnLoading) {
      btnText.style.display = "none"
      btnLoading.style.display = "block"
      submitBtn.disabled = true
    }

    // Simular procesamiento
    setTimeout(() => {
      // Obtener datos del formulario
      const nombre = document.getElementById("nombre").value
      const telefono = document.getElementById("telefono").value
      const direccion = document.getElementById("direccion").value
      const cantidad = document.getElementById("cantidad").value
      const bebidas = document.getElementById("bebidas").value
      const metodoPago = document.getElementById("metodo-pago").value
      const tiempoEntrega = document.getElementById("tiempo-entrega").value
      const instrucciones = document.getElementById("instrucciones").value

      let mensaje = `Hola, me gustaría hacer el siguiente pedido:%0A%0A`

      if (perfilActual) {
        const menu = menusData[perfilActual][categoriaActual]
        const perfilInfo = menusData[perfilActual]

        const categoriaTitulos = {
          desayuno: "Desayuno",
          "merienda-manana": "Merienda de la Mañana",
          almuerzo: "Almuerzo",
          "merienda-tarde": "Merienda de la Tarde",
          cena: "Cena",
        }

        mensaje += `*PERFIL:* ${perfilInfo.nombre}%0A`
        mensaje += `*Tipo de comida:* ${categoriaTitulos[categoriaActual]}%0A`
        mensaje += `*Menú seleccionado:*%0A`

        if (menu.items) {
          menu.items.forEach((item) => {
            mensaje += `🍽️ ${item}%0A`
          })
        }

        mensaje += `%0A`
      } else {
        // Fallback for custom plate
        const base = document.querySelector('input[name="base"]:checked')
        const proteina = document.querySelector('input[name="proteina"]:checked')
        const guarnicion = document.querySelector('input[name="guarnicion"]:checked')
        const bebidaSeleccionada = document.querySelector('input[name="bebida"]:checked')

        mensaje += `*Mi plato personalizado:*%0A
- Base: ${base ? formatOption(base.value) : ""}%0A
- Proteína: ${proteina ? formatOption(proteina.value) : ""}%0A
- Guarnición: ${guarnicion ? formatOption(guarnicion.value) : ""}%0A
- Bebida: ${bebidaSeleccionada ? formatOption(bebidaSeleccionada.value) : ""}%0A%0A`
      }

      mensaje += `*Datos del cliente:*%0A
*Nombre:* ${nombre}%0A
*Teléfono:* ${telefono}%0A
*Dirección:* ${direccion}%0A
*Cantidad de platos:* ${cantidad}%0A
*Bebidas adicionales:* ${bebidas}%0A
*Método de pago:* ${metodoPago}%0A
*Tiempo estimado de entrega:* ${tiempoEntrega} minutos%0A
${instrucciones ? `*Instrucciones especiales:* ${instrucciones}%0A` : ""}%0A
¡Gracias!`

      // Restaurar botón si existe
      if (submitBtn && btnText && btnLoading) {
        btnText.style.display = "block"
        btnLoading.style.display = "none"
        submitBtn.disabled = false
      }

      // Cerrar modal y mostrar confirmación
      closeCheckoutModal()
      if (confirmationModal) {
        confirmationModal.style.display = "flex"
      }

      // Abrir WhatsApp después de un breve retraso
      setTimeout(() => {
        const whatsappNumber = "+50584757408"
        const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`
        window.open(url, "_blank")
      }, 1500)
    }, 1500)
  })
}

// Validación en tiempo real
if (document.querySelectorAll("#pedido-form input, #pedido-form select, #pedido-form textarea").length > 0) {
  document.querySelectorAll("#pedido-form input, #pedido-form select, #pedido-form textarea").forEach((element) => {
    element.addEventListener("blur", function () {
      const fieldId = this.id
      const errorElement = document.getElementById(`${fieldId}-error`)
      const formGroup = this.closest(".form-group")

      if (!this.value.trim()) {
        if (formGroup) formGroup.classList.add("error")
        if (errorElement) {
          errorElement.textContent = "Este campo es obligatorio"
        }
      } else {
        if (formGroup) formGroup.classList.remove("error")
        if (errorElement) {
          errorElement.textContent = ""
        }
      }

      // Validación específica para teléfono
      if (fieldId === "telefono" && !/^\d{8}$/.test(this.value.trim())) {
        if (formGroup) formGroup.classList.add("error")
        if (errorElement) {
          errorElement.textContent = "Ingresa un número de teléfono válido (8 dígitos)"
        }
      }
    })
  })
}

// ========== FUNCIONALIDAD DE ENCUESTA Y MENÚS ==========

// Función para abrir la encuesta cuando se selecciona cualquier perfil
function setupEncuestaPerfiles() {
  const profileCards = document.querySelectorAll(".profile-card")

  profileCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Guardar el perfil seleccionado
      const perfilSeleccionado = this.id
      localStorage.setItem("perfilSeleccionado", perfilSeleccionado)

      // Mostrar encuesta
      openEncuestaModal()
    })
  })
}

// Función para abrir el modal de encuesta
function openEncuestaModal() {
  // Limpiar formulario anterior
  if (encuestaForm) {
    encuestaForm.reset()
  }
  encuestaModal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

// Función para cerrar el modal de encuesta con animación
function closeEncuestaModalWithAnimation() {
  if (encuestaModal) {
    encuestaModal.classList.add("closing")
    setTimeout(() => {
      encuestaModal.style.display = "none"
      encuestaModal.classList.remove("closing")
      document.body.style.overflow = "auto"
    }, 400)
  }
}

// Función para cerrar el modal de encuesta
function closeEncuestaModal() {
  closeEncuestaModalWithAnimation()
}

// Validar formulario de encuesta
function validarEncuesta() {
  let isValid = true
  const campos = ["edad", "sexo", "actividad", "horario"]

  // Validar campos requeridos
  campos.forEach((campo) => {
    const elemento = document.getElementById(campo)
    const errorElement = document.getElementById(`${campo}-error`)
    const formGroup = elemento ? elemento.closest(".form-group") : null

    if (!elemento || !elemento.value.trim()) {
      if (formGroup) formGroup.classList.add("error")
      if (errorElement) {
        errorElement.textContent = "Este campo es obligatorio"
      }
      isValid = false
    } else {
      if (formGroup) formGroup.classList.remove("error")
      if (errorElement) {
        errorElement.textContent = ""
      }
    }
  })

  // Validar objetivo (radio buttons)
  const objetivoSeleccionado = document.querySelector('input[name="objetivo"]:checked')
  const objetivoError = document.getElementById("objetivo-error")
  const objetivoGroup = document.querySelector('input[name="objetivo"]')
    ? document.querySelector('input[name="objetivo"]').closest(".form-group")
    : null

  if (!objetivoSeleccionado) {
    if (objetivoGroup) objetivoGroup.classList.add("error")
    if (objetivoError) {
      objetivoError.textContent = "Debes seleccionar un objetivo"
    }
    isValid = false
  } else {
    if (objetivoGroup) objetivoGroup.classList.remove("error")
    if (objetivoError) {
      objetivoError.textContent = ""
    }
  }

  return isValid
}

// Procesar encuesta y mostrar platillos personalizados
function procesarEncuesta(datosEncuesta) {
  console.log("Datos de la encuesta:", datosEncuesta)

  // Determinar el perfil basado en la encuesta y selección
  perfilActual = determinarPerfil(datosEncuesta)

  // Mostrar sección de menús
  mostrarSeccionMenus()

  // Cargar menú inicial
  cargarMenu(perfilActual, "desayuno")

  // Guardar datos en localStorage para uso futuro
  localStorage.setItem("datosEncuesta", JSON.stringify(datosEncuesta))
  localStorage.setItem("perfilDeterminado", perfilActual)
}

// Determinar perfil basado en encuesta
function determinarPerfil(datos) {
  // Si el usuario seleccionó un perfil específico, usar ese
  const perfilSeleccionado = localStorage.getItem("perfilSeleccionado")
  if (perfilSeleccionado && perfilSeleccionado !== "nuevo-estilo") {
    return perfilSeleccionado
  }

  // Para "Nuevo Estilo Saludable", determinar basado en encuesta
  if (datos.condiciones.includes("diabetes")) {
    return "diabetico"
  } else if (datos.alergias && datos.alergias.length > 0) {
    return "alergicos"
  } else if (datos.objetivo === "ganar-masa") {
    return "fit"
  } else if (datos.actividad === "alto") {
    return "medico"
  } else {
    return "nuevo-estilo"
  }
}

// Mostrar sección de menús con información del perfil
function mostrarSeccionMenus() {
  // Ocultar sección de armar plato
  const armaTuPlatoSection = document.getElementById("arma-tu-plato")
  if (armaTuPlatoSection) {
    armaTuPlatoSection.style.display = "none"
  }

  // Mostrar sección de menús
  if (menuSeccionActual) {
    menuSeccionActual.style.display = "block"
  }

  // Actualizar indicador de perfil
  const perfilInfo = menusData[perfilActual]
  if (document.getElementById("perfil-indicator")) {
    document.getElementById("perfil-indicator").textContent = perfilInfo.nombre
  }

  // Scroll a la sección de menús
  setTimeout(() => {
    if (menuSeccionActual) {
      menuSeccionActual.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, 500)
}

// Cargar menú específico con información del perfil
function cargarMenu(perfil, categoria) {
  const menu = menusData[perfil][categoria]
  const perfilInfo = menusData[perfil]

  const categoriaTitulos = {
    desayuno: "Desayuno",
    "merienda-manana": "Merienda de la Mañana",
    almuerzo: "Almuerzo",
    "merienda-tarde": "Merienda de la Tarde",
    cena: "Cena",
  }

  // Actualizar título y calorías con información del perfil
  if (document.getElementById("menu-category-title")) {
    document.getElementById("menu-category-title").textContent = `${categoriaTitulos[categoria]} - ${perfilInfo.nombre}`
  }
  if (document.getElementById("menu-calories")) {
    document.getElementById("menu-calories").textContent =
      `${menu.calorias} (Total diario: ${perfilInfo.totalCalorias})`
  }

  // Cargar items del menú
  const menuItemsContainer = document.getElementById("menu-items")
  if (menuItemsContainer) {
    menuItemsContainer.innerHTML = ""

    menu.items.forEach((item, index) => {
      const menuItem = document.createElement("div")
      menuItem.className = "menu-item"
      menuItem.innerHTML = `
                <h4>${item.split("(")[0].trim()}</h4>
                <p>${item}</p>
            `
      menuItemsContainer.appendChild(menuItem)
    })
  }

  // Actualizar categoría actual
  categoriaActual = categoria
}

// Event listeners para categorías de menú
function setupMenuCategories() {
  const menuCategories = document.querySelectorAll(".menu-category")

  if (menuCategories.length > 0) {
    menuCategories.forEach((category) => {
      category.addEventListener("click", function () {
        // Remover active de todas las categorías
        menuCategories.forEach((cat) => cat.classList.remove("active"))

        // Añadir active a la categoría clickeada
        this.classList.add("active")

        // Cargar el menú correspondiente
        const categoria = this.getAttribute("data-category")
        cargarMenu(perfilActual, categoria)
      })
    })
  }
}

// Función para enviar pedido por WhatsApp con información completa del perfil
function enviarMenuWhatsApp() {
  updateMenuOrderSummary()
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function updateMenuOrderSummary() {
  const menu = menusData[perfilActual][categoriaActual]
  const perfilInfo = menusData[perfilActual]

  const categoriaTitulos = {
    desayuno: "Desayuno",
    "merienda-manana": "Merienda de la Mañana",
    almuerzo: "Almuerzo",
    "merienda-tarde": "Merienda de la Tarde",
    cena: "Cena",
  }

  const summaryItems = document.getElementById("summary-items")
  if (summaryItems) {
    let itemsHTML = `<div class="summary-header">
      <strong>${perfilInfo.nombre} - ${categoriaTitulos[categoriaActual]}</strong>
      <small>${menu.calorias} (Total: ${perfilInfo.totalCalorias})</small>
    </div>`

    if (menu.items) {
      menu.items.forEach((item) => {
        itemsHTML += `<span class="summary-item">🍽️ ${item}</span>`
      })
    }

    summaryItems.innerHTML = itemsHTML
  }
}

// Event Listeners para la encuesta
if (cancelarEncuesta) {
  cancelarEncuesta.addEventListener("click", closeEncuestaModal)
}

if (closeEncuestaBtn) {
  closeEncuestaBtn.addEventListener("click", closeEncuestaModal)
}

if (encuestaForm) {
  encuestaForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!validarEncuesta()) {
      return
    }

    // Mostrar estado de carga
    const btnText = verPlatillosBtn ? verPlatillosBtn.querySelector(".btn-text") : null
    const btnLoading = verPlatillosBtn ? verPlatillosBtn.querySelector(".btn-loading") : null

    if (verPlatillosBtn && btnText && btnLoading) {
      btnText.style.display = "none"
      btnLoading.style.display = "block"
      verPlatillosBtn.disabled = true
    }

    // Simular procesamiento
    setTimeout(() => {
      // Recoger datos del formulario
      const datosEncuesta = {
        edad: document.getElementById("edad").value,
        sexo: document.getElementById("sexo").value,
        condiciones: Array.from(document.querySelectorAll('input[name="condiciones"]:checked')).map(
          (checkbox) => checkbox.value,
        ),
        alergias: document.getElementById("alergias").value,
        actividad: document.getElementById("actividad").value,
        horario: document.getElementById("horario").value,
        objetivo: document.querySelector('input[name="objetivo"]:checked').value,
        perfil: localStorage.getItem("perfilSeleccionado"),
      }

      // Restaurar botón
      if (btnText && btnLoading && verPlatillosBtn) {
        btnText.style.display = "block"
        btnLoading.style.display = "none"
        verPlatillosBtn.disabled = false
      }

      // Procesar encuesta
      procesarEncuesta(datosEncuesta)
      closeEncuestaModalWithAnimation()
    }, 1500)
  })
}

// Validación en tiempo real para la encuesta
if (document.querySelectorAll("#encuesta-form input, #encuesta-form select").length > 0) {
  document.querySelectorAll("#encuesta-form input, #encuesta-form select").forEach((element) => {
    element.addEventListener("blur", function () {
      const fieldId = this.id
      const errorElement = document.getElementById(`${fieldId}-error`)
      const formGroup = this.closest(".form-group")

      if (!this.value.trim() && this.hasAttribute("required")) {
        if (formGroup) formGroup.classList.add("error")
        if (errorElement) {
          errorElement.textContent = "Este campo es obligatorio"
        }
      } else {
        if (formGroup) formGroup.classList.remove("error")
        if (errorElement) {
          errorElement.textContent = ""
        }
      }
    })
  })
}

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (event) => {
  if (encuestaModal && event.target === encuestaModal) {
    closeEncuestaModal()
  }
})

// Mobile submenu toggle
if (window.innerWidth <= 768) {
  const menuItemsWithSubmenu = document.querySelectorAll("nav ul li:has(.submenu)")

  if (menuItemsWithSubmenu.length > 0) {
    menuItemsWithSubmenu.forEach((item) => {
      const link = item.querySelector("a")

      if (link) {
        link.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault()
            const submenu = this.parentElement.querySelector(".submenu")
            if (submenu) {
              submenu.style.display = submenu.style.display === "block" ? "none" : "block"
            }
          }
        })
      }
    })
  }
}

// ========== INICIALIZACIÓN ==========

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  setupEncuestaPerfiles()
  setupMenuCategories()

  // Event listener for WhatsApp menu button
  const pedirMenuBtn = document.getElementById("pedir-menu-whatsapp")
  if (pedirMenuBtn) {
    pedirMenuBtn.addEventListener("click", enviarMenuWhatsApp)
  }
})
