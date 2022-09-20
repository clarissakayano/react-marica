const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
    env: import.meta.env.MODE,
  },
  api: {
    baseURL: import.meta.env.VITE_MARICA_API_BASE_URL,
    token: import.meta.env.VITE_MARICA_API_TOKEN,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
}

export default Config
