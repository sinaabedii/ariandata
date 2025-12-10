'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Activity, Cpu } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  layer: number;
  active: boolean;
}

interface Connection {
  from: number;
  to: number;
  weight: number;
  active: boolean;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [processedData, setProcessedData] = useState(0);
  const animationRef = useRef<number>();

  const layers = [4, 6, 8, 6, 4, 2]; // Neural network structure
  const nodes: Node[] = [];
  const connections: Connection[] = [];

  // Generate nodes
  layers.forEach((nodeCount, layerIndex) => {
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: 0,
        y: 0,
        layer: layerIndex,
        active: false,
      });
    }
  });

  // Generate connections
  let nodeIndex = 0;
  for (let l = 0; l < layers.length - 1; l++) {
    const currentLayerStart = nodeIndex;
    const nextLayerStart = nodeIndex + layers[l];
    
    for (let i = 0; i < layers[l]; i++) {
      for (let j = 0; j < layers[l + 1]; j++) {
        connections.push({
          from: currentLayerStart + i,
          to: nextLayerStart + j,
          weight: Math.random(),
          active: false,
        });
      }
    }
    nodeIndex += layers[l];
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Calculate node positions
    const updateNodePositions = () => {
      let nodeIdx = 0;
      const padding = 60;
      const layerWidth = (canvas.width - padding * 2) / (layers.length - 1);

      layers.forEach((nodeCount, layerIndex) => {
        const layerHeight = (canvas.height - padding * 2) / (nodeCount + 1);
        
        for (let i = 0; i < nodeCount; i++) {
          nodes[nodeIdx].x = padding + layerIndex * layerWidth;
          nodes[nodeIdx].y = padding + (i + 1) * layerHeight;
          nodeIdx++;
        }
      });
    };

    let time = 0;
    let activeWave = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateNodePositions();
      time += 0.02;

      // Simulate data flow wave
      activeWave = (Math.sin(time) + 1) / 2 * layers.length;

      // Draw connections
      connections.forEach((conn, idx) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        
        const isActive = fromNode.layer <= activeWave && toNode.layer >= activeWave - 1;
        const alpha = isActive ? 0.6 + Math.sin(time * 2 + idx * 0.1) * 0.4 : 0.1;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        
        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        gradient.addColorStop(0, `rgba(14, 165, 233, ${alpha})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();

        // Draw flowing particles on active connections
        if (isActive && Math.random() > 0.7) {
          const progress = (time * 0.5 + idx * 0.1) % 1;
          const particleX = fromNode.x + (toNode.x - fromNode.x) * progress;
          const particleY = fromNode.y + (toNode.y - fromNode.y) * progress;
          
          ctx.beginPath();
          ctx.arc(particleX, particleY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((node, idx) => {
        const isActive = Math.abs(node.layer - activeWave) < 1;
        const pulse = isActive ? Math.sin(time * 3 + idx * 0.5) * 0.3 + 1 : 1;
        const radius = (8 + node.layer * 1) * pulse;

        // Glow effect
        if (isActive) {
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, radius * 3
          );
          glowGradient.addColorStop(0, 'rgba(14, 165, 233, 0.4)');
          glowGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }

        // Node circle
        const nodeGradient = ctx.createRadialGradient(
          node.x - radius * 0.3, node.y - radius * 0.3, 0,
          node.x, node.y, radius
        );
        nodeGradient.addColorStop(0, isActive ? '#38bdf8' : '#1e3a5f');
        nodeGradient.addColorStop(1, isActive ? '#0ea5e9' : '#0f1a2e');

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        ctx.strokeStyle = isActive ? 'rgba(56, 189, 248, 0.8)' : 'rgba(30, 58, 95, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Simulate processing
    const processInterval = setInterval(() => {
      setAccuracy(prev => Math.min(99.7, prev + Math.random() * 0.5));
      setProcessedData(prev => prev + Math.floor(Math.random() * 1000));
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(processInterval);
    };
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-primary-950 to-black overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Brain className="w-4 h-4 text-secondary-400" />
              <span className="text-sm font-medium text-white/90">Deep Learning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Watch AI{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-accent-cyan bg-clip-text text-transparent">
                Think in Real-Time
              </span>
            </h2>

            <p className="text-gray-400 mb-8 text-lg">
              Visualize how our neural networks process data, learn patterns, and make intelligent decisions. 
              Each node represents a neuron, and the flowing connections show data being transformed.
            </p>

            {/* Live stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">Accuracy</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {accuracy.toFixed(1)}%
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-400">Layers</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {layers.length}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-gray-400">Processed</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {(processedData / 1000).toFixed(1)}K
                </div>
              </motion.div>
            </div>

            {/* Network info */}
            <div className="flex flex-wrap gap-3">
              {['Input Layer', 'Hidden Layers', 'Output Layer'].map((layer, idx) => (
                <span
                  key={layer}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {layer}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Neural Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-primary-900/50 to-primary-950/50 border border-white/10 overflow-hidden backdrop-blur-sm">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-cyan/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
