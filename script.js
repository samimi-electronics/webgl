let vertexShaderSrc = `
	attribute vec4 aVertexPosition;
	uniform mat4 uModelViewMatrix;
	uniform mat4 uProjectionMatrix;
	void main() {
		gl_position = aVertexPosition * uModelViewMatrix * uProjectionMatrix;
	}
`;


function main() {
	console.log('main() executing')
	const canvas = document.querySelector('#glCanvas')
	
	// Init Gl context
	const gl = canvas.getContext('webgl')

	// Continue if webgl is available
	if (gl === null) {
		alert('Unable to initialize WebGL.')
		return
	}


	// set clear color to black, fully opaque
	gl.clearColor(0.84, 0.25, 0.56, 1)

	// Clear the color buffer with specified clear color
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

}

window.onload = main
