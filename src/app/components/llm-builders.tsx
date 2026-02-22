import { Zap, Shield, Wrench, Infinity, Database, Cpu } from "lucide-react";
import { motion } from "motion/react";

const llmFeatures = [
  {
    icon: Wrench,
    title: "Fully Customizable",
    description: "Configure every aspect of your LLM - architecture, parameters, training strategy, and more",
  },
  {
    icon: Database,
    title: "Custom Tokenizers",
    description: "Build and integrate your own tokenizers for specialized domains and languages",
  },
  {
    icon: Cpu,
    title: "Efficient Inference",
    description: "Optimized inference engine for fast and memory-efficient model serving",
  },
  {
    icon: Zap,
    title: "Advanced Training",
    description: "Fine-tuning, transfer learning, and advanced optimization strategies built-in",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Keep your models and data local with pure Java implementation - no external services required",
  },
  {
    icon: Infinity,
    title: "Scalable Architecture",
    description: "From small language models to large-scale deployments with distributed training support",
  },
];

const builders = [
  {
    name: "Transformer Builder",
    description: "Create state-of-the-art transformer-based models",
    config: `TransformerLLM llm = new TransformerLLM.Builder()
    .setVocabSize(50000)
    .setEmbeddingDim(768)
    .setNumLayers(12)
    .setNumHeads(12)
    .setFFDim(3072)
    .setMaxSequenceLength(2048)
    .setDropoutRate(0.1)
    .build();`,
  },
  {
    name: "MLP-Mixer Builder",
    description: "High-performance mixing architecture alternative",
    config: `MLPMixerLLM llm = new MLPMixerLLM.Builder()
    .setVocabSize(50000)
    .setHiddenDim(768)
    .setNumLayers(24)
    .setTokenMixerDim(256)
    .setChannelMixerDim(3072)
    .setApplyLayerNorm(true)
    .build();`,
  },
  {
    name: "Vision Transformer Builder",
    description: "Specialized for image and vision tasks",
    config: `VisionTransformer llm = new VisionTransformer.Builder()
    .setImageSize(224)
    .setPatchSize(16)
    .setVocabSize(30000)
    .setHiddenDim(768)
    .setNumLayers(12)
    .setNumHeads(12)
    .build();`,
  },
  {
    name: "Recurrent LLM Builder",
    description: "LSTM/GRU based language models with memory",
    config: `RecurrentLLM llm = new RecurrentLLM.Builder()
    .setVocabSize(50000)
    .setEmbeddingDim(512)
    .setHiddenDim(1024)
    .setNumLayers(3)
    .setCellType(CellType.LSTM)
    .setBidirectional(true)
    .build();`,
  },
];

export function LLMBuilders() {
  return (
    <section id="llm-builders" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4c1d95]/5 to-transparent" />
      
      {/* Floating accent orbs */}
      <motion.div
        className="absolute top-1/4 left-5 w-64 h-64 bg-gradient-to-r from-[#4c1d95] to-[#7c3aed] rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-5 w-72 h-72 bg-gradient-to-l from-[#1e3a8a] to-[#4c1d95] rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#1e3a8a] via-[#4c1d95] to-[#7c3aed] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Advanced LLM Support with Custom Builders
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Create, customize, and deploy state-of-the-art language models with Cyton AI's powerful builder pattern. Choose from pre-built architectures or craft your own.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {llmFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-background border border-border rounded-xl p-6 overflow-hidden hover:border-[#4c1d95]/50 transition-all"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#4c1d95] rounded-lg flex items-center justify-center mb-4 relative"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 relative">{feature.title}</h3>
                <p className="text-muted-foreground text-sm relative">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* LLM Builders Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl mb-12 text-center">Popular LLM Builders</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {builders.map((builder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gradient-to-br from-background to-muted/20 border border-border rounded-xl overflow-hidden hover:border-[#4c1d95]/30 transition-all"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#1e3a8a] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative p-6">
                <motion.h4 
                  className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#1e3a8a] to-[#4c1d95] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  {builder.name}
                </motion.h4>
                <p className="text-muted-foreground mb-4">{builder.description}</p>
                
                <motion.div
                  className="bg-muted/30 border border-border/50 rounded-lg p-4 font-mono text-xs overflow-x-auto hover:border-[#4c1d95]/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <code className="text-foreground/80">{builder.config}</code>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a pre-configured transformer or want to build a custom architecture, Cyton AI gives you the flexibility and power to create the perfect LLM for your use case.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(76, 29, 149, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1e3a8a] to-[#4c1d95] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Explore LLM Documentation
            <Zap className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
