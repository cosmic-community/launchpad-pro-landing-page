import { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
  index: number
}

const gradientBorders = [
  'from-accent-purple to-accent-blue',
  'from-accent-blue to-accent-cyan',
  'from-accent-cyan to-accent-pink',
]

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const { feature_title, description, icon_emoji } = feature.metadata
  const gradient = gradientBorders[index % gradientBorders.length] || gradientBorders[0]

  return (
    <div className="group relative">
      {/* Gradient border glow on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
      />
      <div className="relative glass-card p-8 h-full flex flex-col transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
        {/* Emoji icon */}
        <div className="w-14 h-14 flex items-center justify-center text-3xl mb-6 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
          {icon_emoji || '✨'}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{feature_title}</h3>

        {/* Description */}
        <p className="text-white/50 leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  )
}