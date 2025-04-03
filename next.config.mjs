const { composePlugins, withNx } = require('@nx/next')

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Flags experimentais que ainda são relevantes
    // webpackBuildWorker: true, // Disponível por padrão desde v13.1
  },
}

// Função para mesclar configurações
const mergeConfigs = (base, user) => {
  if (!user) return base

  const mergedConfig = { ...base }

  for (const key in user) {
    if (typeof user[key] === 'object' && !Array.isArray(user[key])) {
      mergedConfig[key] = mergedConfig[key] ? { ...mergedConfig[key], ...user[key] } : user[key]
    } else if (Array.isArray(user[key])) {
      mergedConfig[key] = [...(mergedConfig[key] || []), ...user[key]]
    } else {
      mergedConfig[key] = user[key]
    }
  }

  return mergedConfig
}

// Exportação assíncrona para lidar com o carregamento da configuração do usuário
export default composePlugins(
  withNx(),
  async () => {
    try {
      const userConfig = (await import('./v0-user-next.config')).default
      return mergeConfigs(baseConfig, userConfig)
    } catch (error) {
      console.error('Erro ao carregar configuração do usuário:', error)
      return baseConfig
    }
  }
)()
