'use client'

const data = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 80 },
  { month: 'May', value: 55 },
  { month: 'Jun', value: 90 },
  { month: 'Jul', value: 75 },
]

export default function Chart() {
  const maxValue = Math.max(...data.map((d) => d.value))
  const width = 600
  const height = 200
  const padding = 40

  const points = data.map((d, i) => ({
    x: padding + (i * (width - padding * 2)) / (data.length - 1),
    y: height - padding - (d.value / maxValue) * (height - padding * 2),
  }))

  const linePath = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[400px]">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={height - padding - ratio * (height - padding * 2)}
            x2={width - padding}
            y2={height - padding - ratio * (height - padding * 2)}
            stroke="rgb(30, 41, 59)"
            strokeWidth="1"
          />
        ))}

        {/* Area fill */}
        <path d={areaPath} fill="url(#gradient)" />

        {/* Line */}
        <path d={linePath} fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Data points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="rgb(6, 182, 212)" stroke="rgb(2, 6, 23)" strokeWidth="2" />
            <text x={p.x} y={height - padding + 20} textAnchor="middle" fill="rgb(148, 163, 184)" fontSize="12">
              {data[i].month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}