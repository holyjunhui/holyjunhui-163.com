const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  useBabelRc,
  addWebpackAlias,
	overrideDevServer
} = require("customize-cra");

const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, ".", dir);
// }

const postcssPresetEnv = require('postcss-preset-env')
process.env.PORT = 3006
// 跨域配置
const devServerConfig = () => config => {
	return {
		...config,
		// 服务开启gzip
		compress: true,
		proxy: { // 配置跨域
			"/v1": {
				target: "http://XXXXX:8080/api", // 这里后台的地址
				ws: false,
				changOrigin: true, // 允许跨域
				pathRewrite: {
					"^/v1": "" // 请求的时候使用这个api就可以
				}
			}
		}
	}
}

module.exports = {
	
	webpack: override(
  fixBabelImports("import", {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
  }),
  useBabelRc(),
  addPostcssPlugins([
    postcssPresetEnv({
      stage: 0,
      features: {
        "nesting-rules": true
      }
    })
  ]),
  // addWebpackAlias({
  //   "@": path.join(__dirname, "./src")
  // })
  // devServerConfig()
),
  devServer: overrideDevServer(
  	devServerConfig()
  )
}
