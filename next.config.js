/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
      return [
        {
          source: '/api/:path*', // ajuste o padrão conforme necessário
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'localhost:3000', // ou ajuste para a origem específica que você deseja permitir
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
          ],
        },
      ];
    },
  };