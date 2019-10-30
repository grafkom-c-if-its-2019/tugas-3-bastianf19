(function (global) {

    var canvas, gl, program;

    glUtils.SL.init({ callback: function () { main(); } });

    function main() {
        // Register Callbacks
        window.addEventListener('resize', resizer);

        // Get canvas element and check if WebGL enabled
        canvas = document.getElementById("glcanvas");
        gl = glUtils.checkWebGL(canvas);

        // Initialize the shaders and program
        var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
            fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

        program = glUtils.createProgram(gl, vertexShader, fragmentShader);

        gl.useProgram(program);

        resizer();
    }

    // draw!
    function draw() {
        // renderer info
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var cir1 = [],
            cir2 = [],
            cir3 = [],
            cir4 = [],
            cir5 = [],
            cir6 = [],
            cir7 = [];
        // Lingkaran Luar
        for(var i=0.0; i<=360;i+=1){
            var j = i * Math.PI / 180;
            
            var ling1 = [
                Math.sin(j),
                Math.cos(j),
            ];
            cir1 = cir1.concat(ling1);
        }
        // B non-fill
        // Garis Outer
        // Garis 1
        var line1 = new Float32Array([
            -0.5, 0.5,
            -0.5, -0.5
        ])
        // Garis 2
        var line2 = new Float32Array([
            -0.5, 0.5,
            -0.35, 0.5
        ])
        // Garis 3
        var line3 = new Float32Array([
            -0.45, 0.1,
            -0.35, 0.1
        ])
        // Garis 4
        var line4 = new Float32Array([
            -0.5, -0.5,
            -0.35,-0.5
        ])
        // Garis Inner
        var line5 = new Float32Array([
            -0.45, 0.2,
            -0.35, 0.2
        ])
        var line6 = new Float32Array([
            -0.45, 0.4,
            -0.35, 0.4
        ])
        var line7 = new Float32Array([
            -0.45, 0.4,
            -0.45, 0.2
        ])
        var line8 = new Float32Array([
            -0.45, -0.0001,
            -0.45, -0.4
        ])
        var line9 = new Float32Array([
            -0.45, -0.0001,
            -0.35, -0.0001
        ])
        var line10 = new Float32Array([
            -0.45, -0.4,
            -0.35, -0.4
        ])
        // B atas 1
        for(var k=0.0;k<=180;k+=1){
            var l = k * Math.PI / 180;

            var ling2 = [
                -0.35+Math.sin(l)*0.15,
                0.3+Math.cos(l)*0.2,
            ];
            cir2 = cir2.concat(ling2);
        }
        // B atas 2
        for (var a = 0.0; a <= 180; a += 1) {
            var b = a * Math.PI / 180;

            var ling4 = [
                -0.35 + Math.sin(b) * 0.1,
                0.3 + Math.cos(b) * 0.1,
            ];
            cir4 = cir4.concat(ling4);
        }
        // B bawah 1
        for (var m = 0.0; m <= 180; m += 1) {
            var n = m * Math.PI / 180;

            var ling3 = [
                -0.35 + Math.sin(n) * 0.25,
                -0.2 + Math.cos(n) * 0.3,
            ];
            cir3 = cir3.concat(ling3);
        }
        // B bawah 2
        for (var c = 0.0; c <= 180; c += 1) {
            var d = c * Math.PI / 180;

            var ling5 = [
                -0.35 + Math.sin(d) * 0.2,
                -0.20 + Math.cos(d) * 0.20,
            ];
            cir5 = cir5.concat(ling5);
        }
        // Draw B non-fill
        drawA(gl.LINE_STRIP, line1);
        drawA(gl.LINE_STRIP, line2);
        drawA(gl.LINE_STRIP, line3);
        drawA(gl.LINE_STRIP, line4);
        drawA(gl.LINE_STRIP, line5);
        drawA(gl.LINE_STRIP, line6);
        drawA(gl.LINE_STRIP, line7);
        drawA(gl.LINE_STRIP, line8);
        drawA(gl.LINE_STRIP, line9);
        drawA(gl.LINE_STRIP, line10);
        drawCircle(gl.LINE_STRIP, cir1);
        drawCircle(gl.LINE_STRIP, cir2);
        drawCircle(gl.LINE_STRIP, cir3);
        drawCircle(gl.LINE_STRIP, cir4);
        drawCircle(gl.LINE_STRIP, cir5);

        // B fill
        var fill1 = new Float32Array([
            0.25, 0.5,
            0.25, -0.5,
            0.3, -0.5,
            0.3, 0.5
        ])
        var fill2 = new Float32Array([
            0.3, 0.5,
            0.4, 0.5,
            0.4, 0.4,
            0.3, 0.4
        ])
        var fill3 = new Float32Array([
            0.3, 0.2,
            0.4, 0.2,
            0.4, -0.0001,
            0.3, -0.0001
        ])
        var fill4 = new Float32Array([
            0.3, -0.4,
            0.4, -0.4,
            0.4, -0.5,
            0.3, -0.5
        ])
        for (var m = 0.0; m <= 180; m += 1) {
            var n = m * Math.PI / 180;

            var ling3 = [
              0.4 + Math.sin(n) * 0.25,
              -0.2 + Math.cos(n) * 0.3,
            ];

            var vert2 = [
              0.4 +  Math.sin(n) * 0.2,
              -0.2 +  Math.cos(n) * 0.2,
                // 0,
            ];

            cir6 = cir6.concat(ling3);
            cir6 = cir6.concat(vert2);
        }

        for (var m = 0.0; m <= 180; m += 1) {
            var n = m * Math.PI / 180;

            var ling4 = [
                0.4 + Math.sin(n) * 0.15,
                0.3 + Math.cos(n) * 0.2,
            ];

            var vert3 = [
                0.4 + Math.sin(n) * 0.10,
                0.3 + Math.cos(n) * 0.10,
                // 0,
            ];

            cir7 = cir7.concat(ling4);
            cir7 = cir7.concat(vert3);
        }
        // Draw B fill
        drawA(gl.TRIANGLE_FAN, fill1);
        drawA(gl.TRIANGLE_FAN, fill2);
        drawA(gl.TRIANGLE_FAN, fill3);
        drawA(gl.TRIANGLE_FAN, fill4);
        drawCircle(gl.TRIANGLE_STRIP, cir6);
        drawCircle(gl.TRIANGLE_STRIP, cir7);

    }

    function drawPoint() {
        var n = initPointBuffers();
        if (n < 0) {
            console.log('Failed to set the positions of the vertices');
            return;
        }
        gl.drawArrays(gl.POINTS, 0, n);
    }

    function initPointBuffers() {
        var vertices = new Float32Array([
            -0.5, -0.5
        ]);
        var n = 1;

        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the buffer object');
            return -1;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(program, 'aPosition');
        if (aPosition < 0) {
            console.log('Failed to get the storage location of aPosition');
            return -1;
        }

        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);
        return n;
    }

    function drawLine() {
        var n = initLineBuffers();
        if (n < 0) {
            console.log('Failed to set the positions of the vertices');
            return;
        }
        gl.drawArrays(gl.LINES, 0, n);
    }

    function initLineBuffers() {
        var vertices = new Float32Array([
            -0.25, -0.25, -0.25, +0.5
        ]);
        var n = 2;

        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the buffer object');
            return -1;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(program, 'aPosition');
        if (aPosition < 0) {
            console.log('Failed to get the storage location of aPosition');
            return -1;
        }

        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);
        return n;
    }

    function drawCircle(type, vertices) {
        var n = initCircleBuffers(vertices);
        if (n < 0) {
            console.log('Failed to set the positions of the vertices');
            return;
        }
        gl.drawArrays(type, 0, n);
    }
    function initCircleBuffers(vertices) {
        // Create a buffer object
        var vertexBuffer = gl.createBuffer(),
            // vertices = [],
            vertCount = 2;
        var n = vertices.length / vertCount;
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(program, 'aPosition');
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, vertCount, gl.FLOAT, false, 0, 0);

        return n;
    }

    function drawTriangle() {
        var n = initTriangleBuffers();
        if (n < 0) {
            console.log('Failed to set the positions of the vertices');
            return;
        }
        gl.drawArrays(gl.TRIANGLES, 0, n);
    }

    function initTriangleBuffers() {
        var vertices = new Float32Array([
            +0.5, -0.5, 0.0, 0.0, +0.5, 0.0
        ]);
        var n = 3;

        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the buffer object');
            return -1;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(program, 'aPosition');
        if (aPosition < 0) {
            console.log('Failed to get the storage location of aPosition');
            return -1;
        }

        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);
        return n;
    }

    // Generic format
    function drawA(type, vertices) {
        var n = initBuffers(vertices);
        if (n < 0) {
            console.log('Failed to set the positions of the vertices');
            return;
        }
        gl.drawArrays(type, 0, n);
    }

    function initBuffers(vertices) {
        var n = vertices.length / 2;

        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the buffer object');
            return -1;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(program, 'aPosition');
        if (aPosition < 0) {
            console.log('Failed to get the storage location of aPosition');
            return -1;
        }

        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);
        return n;
    }

    function resizer() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        draw();
    }

})(window || this);