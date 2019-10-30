precision mediump float;
attribute vec2 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
uniform vec3 theta;

void main() {

  fColor = vColor;
  vec3 angle = radians(theta1);
  vec3 dsin = sin(angle);
  vec3 dcos = cos(angle);

  mat4 rotasix = mat4(
    1.0,     0.0,    0.0, 0.0,
    0.0,  dcos.x, dsin.x, 0.0,
    0.0, -dsin.x, dcos.x, 0.0,
    0.0,     0.0,    0.0, 1.0
  );

  mat4 rotasiy = mat4(
    dcos.y, 0.0, -dsin.y, 0.0,
    0.0,    1.0,     0.0, 0.0,
    dsin.y, 0.0,  dcos.y, 0.0,
    0.0,    0.0,     0.0, 1.0
  );

  mat4 rotasiz = mat4(
     dcos.z, dsin.z, 0.0, 0.0,
    -dsin.z, dcos.z, 0.0, 0.0,
    0.0,        0.0, 1.0, 0.0,
    0.0,        0.0, 0.0, 1.0
  );

  gl_Position = vec4(vPosition, 0.0, 1.0) * rotasiz * rotasiy * rotasix;
}
