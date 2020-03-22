const {
    override,
    fixBabelImports,
    addPostcssPlugins,
    addWebpackPlugin,
    addLessLoader,
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const tailwind = require('tailwindcss');

module.exports = override(
    fixBabelImports('import', {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@font-family': 'Montserrat, sans-serif', '@primary-color': '#00E36B' },
    }),
    addPostcssPlugins([tailwind]),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
