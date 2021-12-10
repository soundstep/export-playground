export default {
    input: {
        'index': 'src/index.js',
        'auth/index': 'src/auth/index.js',
        'deep/ads/index': 'src/deep/ads/index.js',
    },
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        {
            dir: 'dist',
            format: 'esm',
        }
    ]
}
