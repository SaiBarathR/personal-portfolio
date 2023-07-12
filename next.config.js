/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            },
        });

        return config;
    }
};