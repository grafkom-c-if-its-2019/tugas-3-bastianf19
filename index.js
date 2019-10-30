(function(global) {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
    // vertex B
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    // vertex kubus
    var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
    var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);
    
    function drawKubus() {  
      var kubus = ([
      //BAWAH
      -0.3, -0.8, 0.7,  255, 255, 255,
      0.4, -0.8, 0.7,   255, 255, 255,
      0.4, -0.8, 0.7,   255, 255, 255,
      0.4, -0.8, -0.6,  255, 255, 255,
      0.4, -0.8, -0.6,  255, 255, 255,
      -0.3, -0.8, -0.6, 255, 255, 255,
      -0.3, -0.8, -0.6, 255, 255, 255,
      -0.3, -0.8, 0.7,  255, 255, 255,
      //ATAS
      -0.3, 0.6, 0.7,   255, 255, 255,
      0.4, 0.6, 0.7,    255, 255, 255,
      0.4, 0.6, 0.7,    255, 255, 255,
      0.4, 0.6, -0.6,   255, 255, 255,
      0.4, 0.6, -0.6,   255, 255, 255,
      -0.3, 0.6, -0.6,  255, 255, 255,
      -0.3, 0.6, -0.6,  255, 255, 255,
      -0.3, 0.6, 0.7,   255, 255, 255,
      //BELAKANG
      -0.3, -0.8, 0.7,  255, 255, 255,
      -0.3, 0.6, 0.7,   255, 255, 255,
      0.4, -0.8, 0.7,   255, 255, 255,
      0.4, 0.6, 0.7,    255, 255, 255,
      //DEPAN
      0.4, -0.8, -0.6,  255, 255, 255,
      0.4, 0.6, -0.6,   255, 255, 255,
      -0.3, -0.8, -0.6, 255, 255, 255,
      -0.3, 0.6, -0.6,  255, 255, 255
    ]);  
    DrawBufferKubus(gl.LINES, kubus, 24);
    }

    // B Fill
    // +0.4
  function DrawBFill() {
    var fill1 = [
      // x, y,        r, g, b
      0.25, 0.5,      0.1, 1.0, 0.6,
      0.25, -0.5,     0.7, 0.0, 1.0,
      0.3, -0.5,      0.7, 0.0, 1.0,
      0.3, 0.5,       0.1, 1.0, 0.6
    ];
    var fill2 = [
      // x, y,        r, g, b
      0.3, 0.5,       0.1, 1.0, 0.6,
      0.4, 0.5,       0.7, 0.0, 1.0,
      0.4, 0.4,       0.7, 0.0, 1.0,
      0.3, 0.4,       0.1, 1.0, 0.6,
    ];
    var fill3 = [
      // x, y,        r, g, b
      0.3, 0.2,       0.1, 1.0, 0.6,
      0.4, 0.2,       0.7, 0.0, 1.0,
      0.4, -0.0001,   0.7, 0.0, 1.0,
      0.3, -0.0001,   0.1, 1.0, 0.6
    ];
    var fill4 = [
      // x, y,        r, g, b
      0.3, -0.4,      0.1, 1.0, 0.6,
      0.4, -0.4,      0.7, 0.0, 1.0,
      0.4, -0.5,      0.7, 0.0, 1.0,
      0.3, -0.5,      0.1, 1.0, 0.6
    ];
    var cir6 = [],
        cir7 = [];
    for (var m = 0.0; m <= 180; m += 1) {
      var n = m * Math.PI / 180;

      var ling3 = [
        0.4 + Math.sin(n) * 0.25,
        -0.2 + Math.cos(n) * 0.3, 0.1, 1.0, 0.6
      ];
      var vert2 = [
        0.4 + Math.sin(n) * 0.2,
        -0.2 + Math.cos(n) * 0.2, 0.7, 0.0, 1.0,
        // 0,
      ];
      cir6 = cir6.concat(ling3);
      cir6 = cir6.concat(vert2);
    }
    for (var m = 0.0; m <= 181; m += 1) {
      var n = m * Math.PI / 180;
      var ling4 = [
        0.4 + Math.sin(n) * 0.15,
        0.3 + Math.cos(n) * 0.2, 0.0, 1.0, 0.6,
      ];
      var vert3 = [
        0.4 + Math.sin(n) * 0.10,
        0.3 + Math.cos(n) * 0.10, 0.7, 0.0, 1.0,
        // 0,
      ];
      cir7 = cir7.concat(ling4);
      cir7 = cir7.concat(vert3);
    }
    DrawBuffer(gl.TRIANGLE_FAN, fill1, 4, program);
    DrawBuffer(gl.TRIANGLE_FAN, fill2, 4, program);
    DrawBuffer(gl.TRIANGLE_FAN, fill3, 4, program);
    DrawBuffer(gl.TRIANGLE_FAN, fill4, 4, program);
    DrawBuffer(gl.TRIANGLE_STRIP, cir6, 361, program);
    DrawBuffer(gl.TRIANGLE_STRIP, cir7, 361, program);
  }
    // Link antara CPU Memory dengan GPU Memory
    function DrawBuffer(type, verArray, n, noprogram) {
      var triangleVertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);

      var vPosition = gl.getAttribLocation(noprogram, 'vPosition');
      var vColor = gl.getAttribLocation(noprogram, 'vColor');

      gl.vertexAttribPointer(
        vPosition,  // variabel yang memegang posisi attribute di shader
        2,          // jumlah elemen per atribut
        gl.FLOAT,   // tipe data atribut
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex 
        0                                   // offset dari posisi elemen di array
      );
      gl.vertexAttribPointer(
        vColor,
        3,
        gl.FLOAT,
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(vPosition);
      gl.enableVertexAttribArray(vColor);

      var vPosition = gl.getAttribLocation(noprogram, 'vPosition');
      var vColor = gl.getAttribLocation(noprogram, 'vColor');
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verArray), gl.STATIC_DRAW);
      gl.drawArrays(type, 0, n);
    }

    function DrawBufferKubus(type, vertices, n) {
      var vertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);

      var vPosition = gl.getAttribLocation(program2, 'vPosition');
      var vColor = gl.getAttribLocation(program2, 'vColor');

      gl.vertexAttribPointer(
        vPosition, //variabel pemegang posisi atribut di shader
        3,          // jumlah elemen per atribut
        gl.FLOAT,   // tipe data atribut
        gl.FALSE,
        6 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
        0
      );

      gl.vertexAttribPointer(
        vColor,
        3,
        gl.FLOAT,
        gl.FALSE,
        6 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(vPosition);
      gl.enableVertexAttribArray(vColor);

      var vPosition = gl.getAttribLocation(program2, 'vPosition');
      var vColor = gl.getAttribLocation(program2, 'vColor');
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      gl.drawArrays(type, 0, n);
    }
    var thetaLocation1 = gl.getUniformLocation(program, 'theta1');
    var transLocation1 = gl.getUniformLocation(program, 'trans1');
    var thetaLocCube = gl.getUniformLocation(program2, 'theta')
    var thetaA1 = [10, 20, 0];
    var trans1 = [0, 0, 0];
    var X1 = 0.0080;
    var Y1 = 0.0090;
    var Z1 = 0.0130;

    function render() {
      // Bersihkan layar jadi hitam
      gl.useProgram(program);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // Bersihkan buffernya canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (trans1[0] >= 0.4 * 0.8 || trans1[0] <= -0.3 * 0.8) {
        X1 *= -1;
      }
      trans1[0] += X1;

      if (trans1[1] >= 0.6 * 0.8 || trans1[1] <= -0.8 * 0.8) {
        Y1 *= -1;
      }
      trans1[1] += Y1;

      if (trans1[2] >= 0.7 * 0.8 || trans1[2] <= -0.6 * 0.8) {
        Z1 *= -1;
      }
      trans1[2] += Z1;

      gl.uniform3fv(transLocation1, trans1);
      thetaA1[1] += 0.190;
      gl.uniform3fv(thetaLocation1, thetaA1); 
      DrawBFill(); 
      requestAnimationFrame(render);
    }
    resizer();
    render();
    // kubus
    function render2() {
      gl.useProgram(program2); 
      var thetaCube = [10, 10, 0];
      gl.uniform3fv(thetaLocCube, thetaCube);
      drawKubus();

      requestAnimationFrame(render2);
    }
    render2();
    function resizer() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }
  }})(window || this);
