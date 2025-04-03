// next.config.mjs
import { composePlugins, withNx } from '@nx/next'

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
    // Adicione aqui flags experimentais válidas se necessário
  }
}

const mergeConfigs = (baseConfig, userConfig) => {
  if (!userConfig) return baseConfig

  const merged = { ...baseConfig, ...userConfig }

  // Merge profundo para propriedades específicas
  const deepMergeKeys = ['webpack', 'redirects', 'headers', 'rewrites']
  deepMergeKeys.forEach(key => {
    if (typeof baseConfig[key] === 'function' && typeof userConfig[key] === 'function') {
      merged[key] = (config, context) => {
        const baseResult = baseConfig[key](config, context)
        return userConfig[key](baseResult, context)
      }
    }
  })

  // Merge de arrays
  const arrayMergeKeys = ['plugins', 'pageExtensions']
  arrayMergeKeys.forEach(key => {
    if (Array.isArray(baseConfig[key]) && Array.isArray(userConfig[key])) {
      merged[key] = [...baseConfig[key], ...userConfig[key]]
    }
  })

  return merged
}

export default async () => {
  let userConfig = {}
  
  try {
    const userModule = await import('./v0-user-next.config.mjs')
    userConfig = userModule.default || {}
  } catch (error) {
    console.warn('⚠️ Configuração customizada não carregada:', error.message)
  }

  return composePlugins(
    withNx(),
    (nextConfig) => mergeConfigs(nextConfig, userConfig)
  )(baseConfig)
}
