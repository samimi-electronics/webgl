const vertexShaderSrc = `
	attribute vec4 aVertexPosition;
	uniform mat4 uModelViewMatrix;
	uniform mat4 uProjectionMatrix;
	void main() {
		gl_position = aVertexPosition * uModelViewMatrix * uProjectionMatrix;
	}
`;

const fragmetShaderSrc = `
	void main() {
		gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
	}
`;


function loadShader(gl, type, source) {
	const shader = gl.createShader(type)
	// Send source to shader obj
	gl.shaderSource(shader, source)
	// Compile the shader source
	gl.compileShader(shader)
	// Check if compiplation was a success
	if (!gl.getShaderParameter(shader, gl.COMPLIE_STATUS)) {
		alert(`Compiling the shader was unsuccessul. Error: ${gl.getShaderInfoLog(shader)}`)
		gl.deleteShader(shader)
		return null
	}
	return shader
}


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
