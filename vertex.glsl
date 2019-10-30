precision mediump float;
attribute vec2 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
uniform vec3 theta1;
uniform vec3 trans1;
// uniform float scaleX;
// uniform float scaleY;

void main() {

  fColor = vColor;
  vec3 angle = radians(theta1);
  vec3 dsin = sin(angle);
  vec3 dcos = cos(angle);

  mat4 scale = mat4(
    0.3, 0.0, 0.0, 0.0,
    0.0, 0.3, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0 ,1.0
  );

  mat4 rotasiy = mat4(
    dcos.y, 0.0,  -dsin.y, 0.0,
    0.0,    1.0,      0.0, 0.0,
    dsin.y, 0.0,   dcos.y, 0.0,
    0.0,    0.0,      0.0, 1.0
  );

  mat4 translasi = mat4(
    1.0, 0.0, 0.0, trans1.x,
    0.0, 1.0, 0.0, trans1.y,
    0.0, 0.0, 1.0, trans1.z,
    0.0, 0.0, 0.0, 1.0
  );

  gl_Position = vec4(vPosition, 0.0, 1.0) * scale * rotasiy;
  gl_Position = gl_Position * translasi;
}