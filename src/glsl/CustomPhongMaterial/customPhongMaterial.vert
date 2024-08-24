uniform vec4 LightPosition; // Light position in camera coords
uniform vec3 Kd; // Diffuse reflectivity
uniform vec3 Ld; // Light source intensity

out vec3 LightIntensity;

void main() {
  // Calcualate and normalize vectors
  vec3 tnorm = normalize(normalMatrix * normal);
  vec4 camCoords = modelViewMatrix * vec4(position, 1.0);
  vec3 s = normalize(vec3(LightPosition - camCoords));
  // The diffuse shadiong equation
  LightIntensity = Ld * Kd * max( dot(tnorm, s), 0.0 );
  // Convert position to clip coordinates and pass along
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}