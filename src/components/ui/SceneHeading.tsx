type Props = { number: string; eyebrow: string; title: string; description?: string }
export function SceneHeading({ number, eyebrow, title, description }: Props) {
  return <div className="scene-heading"><p className="eyebrow"><span>{number}</span> / {eyebrow}</p><h2>{title}</h2>{description && <p className="scene-description">{description}</p>}</div>
}