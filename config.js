/**
 * Archivo de Configuración: Shamadi Plaza
 * Basado en: https://www.instagram.com/shamadiplaza/
 * Última actualización de tasa BCV: 2026-01-17
 */

export const config = {
  // Información de Marca y Contacto
  brand: {
    name: "Shamadi Plaza",
    description: "Centro Comercial / Centro de Negocios",
    location: "Anzoátegui, Venezuela",
    social: {
      instagram: "https://www.instagram.com/shamadiplaza/",
      whatsapp: "https://wa.me/584148404838", // Basado en info de contacto comercial
    },
    contact: {
      phone: "+58 414-8404838",
      email: "shamadiplaza@gmail.com", // Referencia estándar para el perfil
      web: "https://shamadiplaza.com", // Placeholder (verificar en perfil si se actualiza)
    }
  },

  // Paleta de Colores Extraída del Logo (Dorado, Blanco y Negro)
  palette: {
    primary: "#D4AF37",    // Dorado (Logo principal)
    secondary: "#000000",  // Negro (Elegancia/Contraste)
    accent: "#FFFFFF",     // Blanco (Limpieza y Espacio)
    background: "#F9F9F9", // Gris muy claro para fondos
    text: {
      main: "#1A1A1A",
      light: "#666666"
    }
  },

  // Fuente de Datos (Google Sheet TSV)
  dataSource: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsTRhoswf3zopWO5PEusQsYdYglnUlWTX9HzFIvewpy4vED9fQbs9Z0V3EdQ-AGMGLlpmcs_LL_cP3/pub?gid=0&single=true&output=tsv",

  // Referencia Económica (Actualizado hoy 17-01-2026)
  bcvRate: {
    usd_ves: 344.51, // Tasa oficial publicada por el Banco Central de Venezuela
    lastUpdate: "2026-01-17T11:45:00",
  },

  // Configuración de Empleados (Persistencia solicitada)
  employeeSettings: {
    isRecurring: true,
    canSave: true,
    canDelete: true,
  }
};