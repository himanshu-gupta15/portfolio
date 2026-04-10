"use client";
import React, { useEffect, useRef } from "react";

export default function LiquidEther({ colors }: { colors: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Convert Hex to RGB for the shader
    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b];
    };

    const c1 = hexToRgb(colors[0]);
    const c2 = hexToRgb(colors[1]);
    const c3 = hexToRgb(colors[2]);

    const vertexSource = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fragmentSource = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec3 u_c1; uniform vec3 u_c2; uniform vec3 u_c3;

      // Star function for the streaky "light-speed" look from the video
      float star(vec2 uv, float flare) {
          float d = length(uv);
          float m = .05 / d;
          float rays = max(0., 1. - abs(uv.x * uv.y * 1000.));
          m += rays * flare;
          m *= smoothstep(.5, .2, d);
          return m;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        float t = u_time * 0.1;
        vec2 p = (uv - 0.5) * 2.0;
        p.x *= u_res.x / u_res.y;

        // Nebula Swirls (The Streaks)
        vec2 swirlP = p;
        for(int n = 1; n < 6; n++) {
          float i = float(n);
          swirlP += vec2(0.6 / i * sin(i * swirlP.y + t + 0.5 * i), 0.4 / i * cos(i * swirlP.x + t + 0.5 * i));
        }

        vec3 nebula = mix(u_c1, u_c2, sin(swirlP.x + swirlP.y) * 0.5 + 0.5);
        nebula = mix(nebula, u_c3, cos(swirlP.y) * 0.5 + 0.5);

        // Starfield (The Twinkling Stars)
        float stars = 0.0;
        vec2 starUV = uv * 10.0; // Density
        vec2 gv = fract(starUV) - 0.5;
        vec2 id = floor(starUV);
        
        for(int y=-1; y<=1; y++) {
            for(int x=-1; x<=1; x++) {
                vec2 offs = vec2(x, y);
                float n = fract(sin(dot(id + offs, vec2(12.33, 45.11))) * 43758.5453);
                float size = fract(n * 345.32);
                float starVal = star(gv - offs - vec2(n, fract(n * 34.0)) + 0.5, smoothstep(.8, 1., size));
                stars += starVal * size * (sin(t * 2.0 + n * 6.28) * 0.5 + 0.5);
            }
        }

        // Final Composition
        vec3 finalCol = nebula * 0.4 + (stars * vec3(0.8, 0.9, 1.0));
        gl_FragColor = vec4(finalCol * 1.5, 1.0);
      }
    `;

    const prog = gl.createProgram()!;
    const addShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      gl.attachShader(prog, s);
    };

    addShader(gl.VERTEX_SHADER, vertexSource);
    addShader(gl.FRAGMENT_SHADER, fragmentSource);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const vertices = new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    gl.uniform3fv(gl.getUniformLocation(prog, "u_c1"), c1);
    gl.uniform3fv(gl.getUniformLocation(prog, "u_c2"), c2);
    gl.uniform3fv(gl.getUniformLocation(prog, "u_c3"), c3);

    const render = (time: number) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time * 0.005);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }, [colors]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full opacity-60 pointer-events-none" />;
}