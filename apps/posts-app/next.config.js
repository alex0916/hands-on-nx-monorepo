//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: false,
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.dicebear.com',
				pathname: '/5.x/**',
			},
		],
	},
};

module.exports = withNx(nextConfig);
