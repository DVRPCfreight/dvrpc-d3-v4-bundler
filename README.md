# D3v4 Bundler Setup
This is a basic configuration for bundling D3v4 modules into a custom bundle for use with products.

In order to build a custom bundle all required versions of D3 modules should be install with `npm`. `Index.js` should be used to define all required tools from within any dependencies. 

Once required tools are included with `index.js` running `npm run build` will produce a new bundle at `d3.min.js` including only the required dependencies.