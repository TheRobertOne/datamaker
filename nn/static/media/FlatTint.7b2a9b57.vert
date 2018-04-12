#define SHADER_NAME PHASER_FLAT_TINT_VS

precision mediump float;

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

attribute vec2 inPosition;
attribute vec4 inTint;

varying vec4 outTint;

void main () {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);
    outTint = inTint;
}
