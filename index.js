(function(global) {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
    // B Non-Fill
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    // B Fill
    var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
    var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);
    // B Non-Fill
    function DrawBNoFill(){
      // tambah 0.3
      var line1 = [
        // x, y,       r, g, b
        -0.5, 0.5, 0.7, 0.0, 1.0,
        -0.5, -0.5, 0.1, 1.0, 0.6
      ];
      var line2 = [
        // x, y,        r, g, b
        -0.5, 0.5, 0.7, 0.0, 1.0,
        -0.35, 0.5, 0.1, 1.0, 0.6
      ];
      var line3 = [
        // x, y,        r, g, b
        -0.45, 0.1, 0.7, 0.0, 1.0,
        -0.35, 0.1, 0.1, 1.0, 0.6
      ];
      var line4 = [
        // x, y,        r, g, b
        -0.5, -0.5, 0.7, 0.0, 1.0,
        -0.35, -0.5, 0.1, 1.0, 0.6
      ];
      //Garis Inner
      var line5 = [
        // x, y,        r, g, b
        -0.45, 0.2, 0.7, 0.0, 1.0,
        -0.35, 0.2, 0.1, 1.0, 0.6
      ];
      var line6 = [
        // x, y,        r, g, b
        -0.45, 0.4, 0.7, 0.0, 1.0,
        -0.35, 0.4, 0.1, 1.0, 0.6
      ];
      var line7 = [
        // x, y,        r, g, b
        -0.45, 0.4, 0.7, 0.0, 1.0,
        -0.45, 0.2, 0.1, 1.0, 0.6
      ];
      var line8 = [
        // x, y,        r, g, b
        -0.45, -0.0001, 0.7, 0.0, 1.0,
        -0.45, -0.4, 0.1, 1.0, 0.6
      ];
      var line9 = [
        // x, y,        r, g, b
        -0.45, -0.0001, 0.7, 0.0, 1.0,
        -0.35, -0.0001, 0.1, 1.0, 0.6
      ];
      var line10 = [
        // x, y,        r, g, b
        -0.45, -0.4, 0.7, 0.0, 1.0,
        -0.35, -0.4, 0.1, 1.0, 0.6
      ];
      var cir2 = [],
        cir3 = [],
        cir4 = [],
        cir5 = [];
      // B atas 1
      for (var k = 0.0; k <= 180; k += 1) {
        var l = k * Math.PI / 180;
  
        var ling2 = [
          -0.35 + Math.sin(l) * 0.15,
          0.3 + Math.cos(l) * 0.2, 0.7, 0.0, 1.0,
        ];
        cir2 = cir2.concat(ling2);
      }
      // B atas 2
      for (var a = 0.0; a <= 180; a += 1) {
        var b = a * Math.PI / 180;
  
        var ling4 = [
          -0.35 + Math.sin(b) * 0.1,
          0.3 + Math.cos(b) * 0.1, 0.7, 0.0, 1.0,
        ];
        cir4 = cir4.concat(ling4);
      }
      // B bawah 1
      for (var m = 0.0; m <= 180; m += 1) {
        var n = m * Math.PI / 180;
  
        var ling3 = [
          -0.35 + Math.sin(n) * 0.25,
          -0.2 + Math.cos(n) * 0.3, 0.7, 0.0, 1.0,
        ];
        cir3 = cir3.concat(ling3);
      }
      // B bawah 2
      for (var c = 0.0; c <= 180; c += 1) {
        var d = c * Math.PI / 180;
  
        var ling5 = [
          -0.35 + Math.sin(d) * 0.2,
          -0.20 + Math.cos(d) * 0.20, 0.7, 0.0, 1.0,
        ];
        cir5 = cir5.concat(ling5);
      }
    // Draw B Non-Fill
    DrawBuffer(gl.LINES, line1, 2, program);
    DrawBuffer(gl.LINES, line2, 2, program);
    DrawBuffer(gl.LINES, line3, 2, program);
    DrawBuffer(gl.LINES, line4, 2, program);
    DrawBuffer(gl.LINES, line5, 2, program);
    DrawBuffer(gl.LINES, line6, 2, program);
    DrawBuffer(gl.LINES, line7, 2, program);
    DrawBuffer(gl.LINES, line8, 2, program);
    DrawBuffer(gl.LINES, line9, 2, program);
    DrawBuffer(gl.LINES, line10, 2, program);
    DrawBuffer(gl.LINE_STRIP, cir2, 181, program);
    DrawBuffer(gl.LINE_STRIP, cir3, 181, program);
    DrawBuffer(gl.LINE_STRIP, cir4, 181, program);
    DrawBuffer(gl.LINE_STRIP, cir5, 181, program);
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
    DrawBuffer(gl.TRIANGLE_FAN, fill1, 4, program2);
    DrawBuffer(gl.TRIANGLE_FAN, fill2, 4, program2);
    DrawBuffer(gl.TRIANGLE_FAN, fill3, 4, program2);
    DrawBuffer(gl.TRIANGLE_FAN, fill4, 4, program2);
    DrawBuffer(gl.TRIANGLE_STRIP, cir6, 361, program2);
    DrawBuffer(gl.TRIANGLE_STRIP, cir7, 361, program2);
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
    var thetaLocation = gl.getUniformLocation(program, 'theta');
    var theta = 0.0;
    var scaleXLocation = gl.getUniformLocation(program2, 'scaleX');
    // var scaleYLocation = gl.getUniformLocation(program2, 'scaleY');
    var scaleX = 1.0;
    // var scaleY = 1.0;
    var melebar = 1.0;
    function render() {
      // Bersihkan layar jadi hitam
      gl.useProgram(program);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // Bersihkan buffernya canvas
      gl.clear(gl.COLOR_BUFFER_BIT);
      // B Non-Fill
      theta += 0.0190;
      gl.uniform1f(thetaLocation, theta);
      DrawBNoFill();
      requestAnimationFrame(render);
    }
    resizer();
    render();
    // B Fill
    function render2() {
      gl.useProgram(program2);
      if (scaleX >= 1) melebar = -1;
      else if (scaleX <= -1) melebar = 1;
      scaleX += 0.0190 * melebar;
      gl.uniform1f(scaleXLocation, scaleX);
      DrawBFill();
      requestAnimationFrame(render2);
    }
    render2();
    function resizer() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }
  }})(window || this);
